window.onload=type;
var i = 0;
var txt = "Welcome to my Porfolio Website!";

var speed = 50;

function type() {
    if (i < txt.length) {
        document.getElementById("suf").innerHTML += txt.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
