const input = document.querySelector("#validation-input");
const dataLength = input.dataset.length;
console.dir(dataLength);

input.addEventListener("blur", onBlur);

function onBlur(evt) {
  if (evt.target.value.length === parseInt(dataLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
