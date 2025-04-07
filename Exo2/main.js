var btn = document.getElementById("btn");
var result = document.getElementById("result");

function pileOuFace() {
  return Math.random() < 0.5 ? "heads" : "tails";
}

btn.addEventListener("click", () => {
  let resultat = pileOuFace();
  result.textContent = resultat;
  console.log(resultat);
});
