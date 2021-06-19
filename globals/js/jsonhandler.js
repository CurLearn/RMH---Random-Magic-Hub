// jshint esversion: 6
// JSONHANDLER MODULE: Ver. 0.1a
// Description: Encodes and Parses json files representing a user's RMT World.
// TODO: Allow direct downloading of JSON files

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
