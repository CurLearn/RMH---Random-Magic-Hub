// jshint esversion: 6
// JSONHANDLER MODULE: Ver. 0.1a
// Description: Encodes and Parses json files representing a user's RMT World.

// Formatting JSON:
export const jsonDisplay = {

    jsonstring: "",
    outputDivID: "",

    outputPretty(jsonstring) {
        jsonstring = jsonstring === "" ? jsonDisplay.jsonstring : jsonstring;
        var pretty = JSON.stringify(JSON.parse(jsonstring), null, 2);
        var shpretty = jsonDisplay.syntaxHighlight(pretty);
        var newDiv;
        newDiv = document.getElementById(jsonDisplay.outputDivID).getElementsByTagName("pre")[0];
        if (newDiv == null) {
            newDiv = document.createElement("pre");
            newDiv.id = "pre";
            newDiv.title = "JSON Code";
            newDiv.style.overflow = "scroll";
            newDiv.style.textOverflow = "scroll";
        }
        newDiv.innerHTML = shpretty;
        document.getElementById(jsonDisplay.outputDivID).appendChild(newDiv);
    },

    syntaxHighlight(json) {

        if (typeof json != "string") {
            json = JSON.stringify(json, undefined, 2);
        }

        json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
            var cls = "number";
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = "key";
                } else {
                    cls = "string";
                }
            } else if (/true|false/.test(match)) {
                cls = "boolean";
            } else if (/null/.test(match)) {
                cls = "null";
            }
            return "<span class=\"" + cls + "\">" + match + "</span>";
        });
    }
};

// Make User Download A JSON File
export function jsonDownload(filename, text) {
    var element = document.createElement("a");
    element.setAttribute("href", "data:application/json," + encodeURIComponent(text));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Formatting JSON NEW:
export const jsonHandler = {
    subscribers: [],

    buildJSON(input, outputID) {
        let append = document.getElementById(outputID).getElementsByTagName("pre")[0];

        // Check if Div is still NULL
        if (typeof append === "undefined") {
            append = document.createElement("pre");
            append.id = "pre";
            append.title = "JSON Code";
            append.style.overflow = "scroll";
            append.style.textOverflow = "scroll";
        }

        $("pre").empty(); // TODO: Remove.

        // TODO: Allow for modification of json instead of rescanning.
        jsonHandler.scanJSON(input, append, "");
        document.getElementById(outputID).appendChild(append);
    },

    // Builds a new JSON view onto a div;
    scanJSON(json, append, prefix) {
        console.log(json);

        let obj;
        const keys = Object.keys(json);
        const values = Object.values(json);

        // TODO: Split KEY and VALUE into two divs that don't create a new line.
        // TODO: Syntax highlight the JSON: String, Integer, Float, Boolean, Null, UUID, etc.
        for (var i = 0; i < keys.length; i++) {
            if (typeof values[i] == "object") {
                obj = document.createElement("div");
                obj.innerText = prefix + `${keys[i]} {`;
                obj.id = `${json[keys[i]]}`;
                obj.contentEditable = true;

                append.appendChild(obj);
                jsonHandler.scanJSON(json[keys[i]], append, (prefix + "  "));
            } else {
                obj = document.createElement("div");
                obj.innerText = prefix + `${keys[i]}: ${values[i]}`;
                obj.id = `${json[keys[i]]}`;
                obj.contentEditable = true;

                append.appendChild(obj);
            }
        }
    },

    // Highlights a part of the JSON
    highlightJSON(json) {
        return "";
    },

    // Modify a part of the existing JSON view
    modifyJSON(key, value) {
        // TODO: Call modify on modification of a key/value div.
    },

    // Called when a key value pair was modified from within the view
    callModifyEvent(key, value) {
        for (const subscriber in subscribers) {
            try {
                subscriber(key, value);
            } catch (e) {
                // Ignored
            }
        }
    }
};

// TODO: Start work on JSON Config Handler.
