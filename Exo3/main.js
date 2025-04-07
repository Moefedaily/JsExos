const input = document.getElementById("input");
const display = document.getElementById("display");
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  if (input.type === "password") {
    input.type = "text";
    display.textContent = "Hidden";
  } else {
    input.type = "password";
    display.textContent = "Visible";
  }
});
