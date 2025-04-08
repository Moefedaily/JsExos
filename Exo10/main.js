let check = document.getElementById("check");

check.addEventListener("click", () => {
  let year = document.getElementById("year").value;
  let result = document.getElementById("result");

  let isBissex = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  if (isBissex) {
    result.textContent = year + " est une année bissextile";
  } else {
    result.textContent = year + " n'est pas une année bissextile";
  }
});
