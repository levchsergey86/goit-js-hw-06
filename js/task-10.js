function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");

input.addEventListener("blur", inputValue);

let amount;

function inputValue(evt) {
  amount = evt.target.value;
  console.log(amount);
}

createButton.addEventListener("click", createBoxes);

function createBoxes() {
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(div);
    boxSize += 10;
  }
}

destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes(evt) {
  divBoxes.innerHTML = "";
}
