// jshint esversion: 6
var json;
const growers = document.querySelectorAll(".grow-wrap");
import { jsonDisplay } from "/globals/js/jsonhandler.js";
import { copyTextToClipboard } from "/globals/js/clipboardhandler.js";

$('body').children().each(function () {
    $(this).on('input', 'input:text', function() {
        startScanJSON();
    });
});

$('#uuid').val(window.uuid());
$('#jsoncopy').click(function() {
    startScanJSON();
    copyTextToClipboard(JSON.stringify(json));
});

function startScanJSON() {
    json = {};
    $('#form').children().each(function() {
        scanJSON(this);
    });

    jsonDisplay.jsonstring = JSON.stringify(json);
    jsonDisplay.outputDivID = "jsonarea";
    jsonDisplay.outputPretty(JSON.stringify(json));
}

function scanJSON(s, path = []) {
    let tag = $(s).get(0).tagName;
    if (tag != "INPUT" && tag != "DIV")
        return;

    if (tag != "DIV") {
        appendValue(s, path);
        path.push(s);
    }

    if ($(this).children().length > 0)
        return;
    else
        $(s).children().each(function() {
            scanJSON($(this), path);
        });
}

function appendValue(s, path) {
    // Check if root is initialized
    if (typeof json[s.id] == 'undefined')
        json[s.id] = {};

    // Check if paths are initialized
    for (const key in path)
        if (Object.hasOwnProperty.call(path, key))
            if (typeof path[key] == 'undefined')
                path[key] = {};

    // Append data to specified location
    switch (path.length) {
        case 0:
            json[s.id] = s.value;
            break;
        case 1:
            json[path[0]][s.id] = s.value;
            break;
        case 2:
            json[path[0]][path[1]][s.id] = s.value;
            break;
        default:
            console.error("Append out of Bounds");
    }
}

$('#jsonarea').on("input", () => {

});

startScanJSON();
