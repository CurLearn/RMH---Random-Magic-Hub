// jshint esversion: 6
document.getElementById("uuid").value = window.uuid();
document.getElementById("jsoncopy").onclick = function() {
    document.getElementById("jsonarea").select();
    document.execCommand('copy');
};
