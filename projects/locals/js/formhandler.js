// jshint esversion: 8
var json;
const growers = document.querySelectorAll(".grow-wrap");
import {
    jsonDisplay
} from "/globals/js/jsonhandler.js";
import {
    copyTextToClipboard
} from "/globals/js/clipboardhandler.js";

// Append a value to the json object
async function appendValue(s, path) {
    // Check if root is initialized
    if (typeof json[s.id] == "undefined") {
        json[s.id] = {};
    }

    // Check if paths are initialized
    for (const key in path) {
        if (Object.hasOwnProperty.call(path, key)) {
            if (typeof path[key] == "undefined") {
                path[key] = {};
            }
        }
    }

    // Pre-Process the data
    let append = s.value;
    if (s.classList.contains("mashed")) {
        append = append.replaceAll(" ", "");
    } else if (s.classList.contains("trimmed")) {
        append = append.trim();
    } else if (s.classList.contains("dashed")) {
        const reg = new RegExp("([-])\\1+", "g");
        append = append.trim().replaceAll(" ", "-").replaceAll(reg, "-");
    }

    if (s.classList.contains("lowercase")) {
        append = append.toLowerCase();
    } else if (s.classList.contains("uppercase")) {
        append = append.toUpperCase();
    }

    // Append data to specified location
    switch (path.length) {
        case 0:
            json[s.id] = append;
            break;
        case 1:
            json[path[0]][s.id] = append;
            break;
        case 2:
            json[path[0]][path[1]][s.id] = append;
            break;
    }
}

// Scans for json-addable objects in an object tree
async function scanJSON(s, path = []) {
    let tag = $(s).get(0).tagName;
    if (tag !== "INPUT" && tag !== "DIV") {
        return;
    }

    if (tag !== "DIV") {
        appendValue(s, path);
        path.push(s);
    }

    if ($(this).children().length > 0) {
        return;
    } else {
        $(s).children().each(function() {
            scanJSON($(this), path);
        });
    }
}

// Initializes the script to scan for json-addable objects
function startScanJSON() {
    json = {};
    $("#form").children().each(async function() {
        scanJSON(this);
    });

    jsonDisplay.jsonstring = JSON.stringify(json);
    jsonDisplay.outputDivID = "jsonarea";
    jsonDisplay.outputPretty(JSON.stringify(json));
}

// Scan on editing of input areas
$("body").find("*").each(async function() {
    let tag = $(this).prop("tagName");
    if (tag === "INPUT") {
        $(this).prop("title", $(this).attr("class"));
    }

    $(this).on("input", "input:text", function() {
        startScanJSON();
    });
});

// Initialize HTML Objects.
$("#uuid").val(window.uuid());
$("#jsoncopy").click(function() {
    startScanJSON();
    copyTextToClipboard(JSON.stringify(json));
});

// Start scan on Load:
startScanJSON();
