const myBtn = document.getElementById("myBtn");
const cntClic = document.getElementById("cntClic");
let nbClic = 0;

myBtn.addEventListener("click", () => {
  nbClic++;
  cntClic.textContent = `You clicked ${nbClic} times`;
  console.log(`You clicked ${nbClic} times`);
});
