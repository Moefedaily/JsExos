let loading = document.getElementById("loadingAnimation");
let content = document.getElementById("displayContent");

window.onload = function () {
  setTimeout(function () {
    loading.style.display = "none";
    content.style.display = "block";
  }, 3000);
};
