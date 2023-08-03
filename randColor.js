var divs = document.getElementsByTagName("div");

var bodyStyles = window.getComputedStyle(document.body);
var dark = bodyStyles.getPropertyValue("--dark");
var primary = bodyStyles.getPropertyValue("--primary");
var secondary = bodyStyles.getPropertyValue("--secondary");
var light = bodyStyles.getPropertyValue("--light");

var colors = [dark, primary, secondary, light]

for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = colors[rand_color()];
}

// "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"

function rand_color() {
    return Math.floor(Math.random() * colors.length);
}