// jshint esversion: 6
// JSONHANDLER MODULE: Ver. 0.1a
// Description: Encodes and Parses json files representing a user's RMT World.

// JSON DOWNLOAD:
export function jsonDownload(filename, text) {
    var element = document.createElement("a");
    element.setAttribute("href", "data:application/json," + encodeURIComponent(text));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// JSON FORMAT:
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
        let con, highlight;
        const keys = Object.keys(json);
        const values = Object.values(json);
        console.log(json, keys, values);

        // TODO: Syntax highlight the JSON: String, Integer, Float, Boolean, Null, UUID, etc.
        for (var i = 0; i < keys.length; i++) {
            highlight = "highlight-undefined";
            if (typeof values[i] == "object") {
                con = document.createElement("div");
                con.innerHTML = prefix + `<span id="${keys[i]}" class="key highlight-object">${keys[i]}</span> {`;
                con.id = `${keys[i]}-c`;
                con.contentEditable = true;

                append.appendChild(con);
                jsonHandler.highlightValue(keys[i]);

                // Next Scan
                jsonHandler.scanJSON(json[keys[i]], append, (prefix + "  "));
            } else {
                con = document.createElement("div");

                try {
                    console.log(keys[i]);
                    let classList = document.getElementById(keys[i]).classList;
                    highlight = `highlight-${classList[classList.length - 1]}`; // TODO: Make highlight class always last index
                } catch (e) {
                    // Ignored
                }

                con.innerHTML = prefix + `<span id="${keys[i]}" class="key highlight-key">${keys[i]}</span>: <span id="${keys[i]}-v ${highlight}" class="string">${values[i]}</span>`;
                con.id = `${keys[i]}-c`;
                con.contentEditable = true;

                append.appendChild(con);
                jsonHandler.highlightValue(keys[i]);
            }
        }
    },

    // Highlights a part of the JSON
    highlightValue(key) {
        // TODO: Implement
    },

    // Modify a part of the existing JSON view
    modifyJSON(key, value) {
        if (typeof $(key) !== "undefined") {
            $(key).innerText = value; // TODO: Add highlighting

            // Re-add highlighting in case of type switch
            $(key).removeClass();
            jsonHandler.highlightValue(key);
            return true;
        } else {
            return false;
        }
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
