var logo = document.getElementById("logo");
var value = 0;

function animLogo() {
  if (value < 240) {
    value++;

    logo.style.height = value + "px";
    logo.style.width = value + "px";
    let fontSize = Math.max(10, value / 10);
    logo.style.fontSize = fontSize + "px";
  }
}

setInterval(animLogo, 10);
