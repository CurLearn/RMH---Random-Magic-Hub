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
                <a href="/projects/source/ActionEdit/ae.html">ActionEdit</a>
                <a href="/projects/source/EntityEdit/ee.html">EntityEdit</a>
                <a href="/projects/source/GenomeEdit/ge.html">GenomeEdit</a>
                <a href="/projects/source/ItemEdit/ie.html">ItemEdit</a>
                <a href="/projects/source/MagicEdit/me.html">MagicEdit</a>
                <a href="/projects/source/SkillEdit/se.html">SkillEdit</a>
            </div>
        </div>
        <a href="/misc/about.html">About</a>
    </div>
*/

// Inject HTML Code
var inject = '<!--Navbar--> <div class=\"navbar\"> <a href=\"\/index.html\">Home<\/a> <div class=\"dropdown\"> <button class=\"active dropbtn\" onclick=\"window.location.href=\'\/projects\/main.html\'\">Projects<\/button> <div class=\"dropdown-content\"> <a href=\"\/projects\/source\/ActionEdit\/ae.html\">ActionEdit<\/a> <a href=\"\/projects\/source\/EntityEdit\/ee.html\">EntityEdit<\/a> <a href=\"\/projects\/source\/GenomeEdit\/ge.html\">GenomeEdit<\/a> <a href=\"\/projects\/source\/ItemEdit\/ie.html\">ItemEdit<\/a> <a href=\"\/projects\/source\/MagicEdit\/me.html\">MagicEdit<\/a> <a href=\"\/projects\/source\/SkillEdit\/se.html\">SkillEdit<\/a> <\/div> <\/div> <a href=\"\/misc\/about.html\">About<\/a> <\/div>';
document.getElementsByTagName("BODY")[0].insertAdjacentHTML('afterbegin', inject);