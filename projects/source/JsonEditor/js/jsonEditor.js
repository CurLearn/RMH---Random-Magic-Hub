// jshint esversion: 6
try {
    var url = window.location.search.substring(1).replaceAll("%22", "\"");;
    var json = JSON.parse(url);
    console.log(json);
    console.log(url.length);
} catch (e) {
    console.log("No valid JSON Sent");
}

