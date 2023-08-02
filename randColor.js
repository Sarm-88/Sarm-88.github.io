var divs = document.getElementsByTagName("div");

for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
}