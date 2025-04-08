const title = document.getElementById("title");

let counter = 0;
const messages = ["Salut !", "Hello !", "Coucou !", "Woohoo !"];

function changeTitle() {
  counter++;

  if (counter === 1) {
    title.textContent = "Salut !";
  } else if (counter === 2) {
    title.textContent = "Hello !";
  } else if (counter === 3) {
    title.textContent = "Coucou !";
  } else if (counter === 4) {
    title.textContent = "Woohoo !";
    counter = 0;
  }
  //   counter = (counter + 1) % messages.length;
  //   title.textContent = messages[counter];
}

setInterval(changeTitle, 3000);
