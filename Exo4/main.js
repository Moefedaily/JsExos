let password = document.getElementById("password");
let checkPassword = document.getElementById("check-password");
let message = document.getElementById("message");

checkPassword.addEventListener("keyup", () => {
  if (password.value === checkPassword.value) {
    message.style.color = "green";
    message.innerHTML = "Les mots de passe correspondent";
  } else {
    message.style.color = "red";
    message.innerHTML = "Les mots de passe ne correspondent pas";
  }
});
