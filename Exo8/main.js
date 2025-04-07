const btn = document.getElementById("btn");
const snackbar = document.getElementById("snackbar");

btn.addEventListener("click", function () {
  snackbar.className = "show";
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
});
