// jshint esversion: 8
// Converted using: 
// 1: https://www.textfixer.com/tools/remove-line-breaks.php
// 2: http://www.howtocreate.co.uk/tutorials/jsexamples/syntax/prepareInline.html
// 3: Fix HTML Comments
/* Original:
    <!--Navbar-->
    <div class="navbar" id="navbar">
        <a href="index.html" id="home">Home</a>
        <div class="dropdown">
            <button class="dropbtn" id="projects">Projects</button>
            <div class="dropdown-content">
                <a href="projects/source/JsonEditor/JsonEditor.html">JsonEditor</a>
                <a href="projects/source/JsonConfigEditor/JsonConfigEditor.html">JsonConfigEditor</a>
            </div>
        </div>
        <a href="misc/about.html" id="about">About</a>
    </div>
*/

// Inject HTML Code
const inject = "<!--Navbar--> <div class=\"navbar\" id=\"navbar\"> <a href=\"index.html\" id=\"home\">Home<\/a> <div class=\"dropdown\"> <button class=\"dropbtn\" id=\"projects\">Projects<\/button> <div class=\"dropdown-content\"> <a href=\"projects\/source\/JsonEditor\/JsonEditor.html\">JsonEditor<\/a> <a href=\"projects\/source\/JsonConfigEditor\/JsonConfigEditor.html\">JsonConfigEditor<\/a> <\/div> <\/div> <a href=\"misc\/about.html\" id=\"about\">About<\/a> <\/div>";
document.getElementsByTagName("BODY")[0].insertAdjacentHTML("afterbegin", inject);

const path = window.location.pathname.toLowerCase();
if (path.includes("index")) {
    document.getElementById("home").classList.add("active");
} else if (path.includes("projects")) {
    document.getElementById("projects").classList.add("active");
} else if (path.includes("about")) {
    document.getElementById("about").classList.add("active");
}

//CONFIG:
let root = "RMH---Random-Magic-Hub";
// END;

var prefix = "";
let str = window.location.pathname;
let r = 1;
if (str.includes(root)) {
    r++;
}

let count = str.substring(0, (str.lastIndexOf("/") - 1)).split("/").length - r;
for (let i = 0; i < count; i++) {
    prefix += "../";
}

window.prefix = prefix;
$(document).ready(function() {
    $("#navbar").find("a").each(async function() {
        let oldUrl = $(this).attr("href");
        let newUrl = prefix + oldUrl;
        $(this).attr("href", newUrl);
    });
    $(".dropbtn").each(function(i, obj) {
        if (obj.id === "projects") {
            $(obj).click(function() {
                window.location.href = prefix + "projects/main.html";
            });
        }
    });
});
