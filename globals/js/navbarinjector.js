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
            <button class="dropbtn" id="projects" onclick="window.location.href='projects/main.html'">Projects</button>
            <div class="dropdown-content">
                <a href="projects/source/ActionEdit/ae.html">ActionEdit</a>
                <a href="projects/source/EntityEdit/ee.html">EntityEdit</a>
                <a href="projects/source/GenomeEdit/ge.html">GenomeEdit</a>
                <a href="projects/source/ItemEdit/ie.html">ItemEdit</a>
                <a href="projects/source/MagicEdit/me.html">MagicEdit</a>
                <a href="projects/source/SkillEdit/se.html">SkillEdit</a>
            </div>
        </div>
        <a href="misc/about.html" id="about">About</a>
    </div>
*/

// Inject HTML Code
const inject = "<!--Navbar--> <div class=\"navbar\" id=\"navbar\"> <a href=\"index.html\" id=\"home\">Home<\/a> <div class=\"dropdown\"> <button class=\"dropbtn\" id=\"projects\" onclick=\"window.location.href=\'projects\/main.html\'\">Projects<\/button> <div class=\"dropdown-content\"> <a href=\"projects\/source\/ActionEdit\/ae.html\">ActionEdit<\/a> <a href=\"projects\/source\/EntityEdit\/ee.html\">EntityEdit<\/a> <a href=\"projects\/source\/GenomeEdit\/ge.html\">GenomeEdit<\/a> <a href=\"projects\/source\/ItemEdit\/ie.html\">ItemEdit<\/a> <a href=\"projects\/source\/MagicEdit\/me.html\">MagicEdit<\/a> <a href=\"projects\/source\/SkillEdit\/se.html\">SkillEdit<\/a> <\/div> <\/div> <a href=\"misc\/about.html\" id=\"about\">About<\/a> <\/div>";
document.getElementsByTagName("BODY")[0].insertAdjacentHTML("afterbegin", inject);

const path = window.location.pathname.toLowerCase();
if (path.includes("index")) {
    document.getElementById("home").classList.add("active");
} else if (path.includes("projects")) {
    document.getElementById("projects").classList.add("active");
} else if (path.includes("about")) {
    document.getElementById("about").classList.add("active");
}

var prefix = "";
let str = window.location.pathname;
let count = str.substring(0, (str.lastIndexOf("/") - 1)).split("/").length - 1;

for (let i = 0; i < count; i++) {
    prefix += "../";
}

$(document).ready(function() {
    $("#navbar").find("a").each(async function() {
        let oldUrl = $(this).attr("href");
        let newUrl = prefix + oldUrl;
        console.log(prefix + " " + oldUrl);
        $(this).attr("href", newUrl);
    });
});
