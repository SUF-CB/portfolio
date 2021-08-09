window.onload=type; // TEXT EFFECT 
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


//nav
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}





