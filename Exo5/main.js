let villes = [
  "Bordeaux",
  "Nantes",
  "Lyon",
  "Marseille",
  "Monptellier",
  "Paris",
  "Rennes",
  "Strasbourg",
];
let distance = [950, 850, 450, 800, 1000, 460, 840, 0];
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let distanceParc = document.getElementById("check-distance").value;
  if (isNaN(distanceParc)) {
    alert("Veuillez entrer une distance valide");
    return;
  }

  let villesAcces = [];

  for (let i = 0; i < villes.length; i++) {
    if (distanceParc >= distance[i]) {
      villesAcces.push(villes[i]);
    }
  }

  if (villesAcces.length > 0) {
    alert("Villes accessibles : " + villesAcces.join(", "));
  } else {
    alert("Aucune ville n'est accessible avec cette distance");
  }
});
