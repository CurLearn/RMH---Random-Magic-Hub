// Converted using: 
// 1: https://www.textfixer.com/tools/remove-line-breaks.php
// 2: http://www.howtocreate.co.uk/tutorials/jsexamples/syntax/prepareInline.html
// 3: Fix HTML Comments
/* Original:
    <!--Navbar-->
    <div class="navbar">
        <a href="/index.html">Home</a>
        <div class="dropdown">
            <button class="active dropbtn" onclick="window.location.href='/projects/main.html'">Projects</button>
            <div class="dropdown-content">
                <a href="source/ActionEdit/ae.html">ActionEdit</a>
                <a href="source/EntityEdit/ee.html">EntityEdit</a>
                <a href="source/GenomeEdit/ge.html">GenomeEdit</a>
                <a href="source/ItemEdit/ie.html">ItemEdit</a>
                <a href="source/MagicEdit/me.html">MagicEdit</a>
                <a href="source/SkillEdit/se.html">SkillEdit</a>
            </div>
        </div>
        <a href="/misc/about.html">About</a>
    </div>
*/

// Inject HTML Code
var inject = "<!--Navbar--> <div class=\"navbar\"> <a href=\"\/index.html\">Home<\/a> <div class=\"dropdown\"> <button class=\"active dropbtn\" onclick=\"window.location.href=\'\/projects\/main.html\'\">Projects<\/button> <div class=\"dropdown-content\"> <a href=\"source\/ActionEdit\/ae.html\">ActionEdit<\/a> <a href=\"source\/EntityEdit\/ee.html\">EntityEdit<\/a> <a href=\"source\/GenomeEdit\/ge.html\">GenomeEdit<\/a> <a href=\"source\/ItemEdit\/ie.html\">ItemEdit<\/a> <a href=\"source\/MagicEdit\/me.html\">MagicEdit<\/a> <a href=\"source\/SkillEdit\/se.html\">SkillEdit<\/a> <\/div> <\/div> <a href=\"\/misc\/about.html\">About<\/a> <\/div>";
document.getElementsByTagName("BODY")[0].insertAdjacentHTML('afterbegin', inject);
