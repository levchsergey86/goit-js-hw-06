const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const list = document.querySelector("#ingredients");
const items = ingredients.map(item => `<li class="item">${item}</li>`);
list.innerHTML = items.join("");

// const list = document.querySelector("#ingredients");
// ingredients.forEach(function (item) {
//   const listItem = document.createElement("li");
//   listItem.textContent = item;
//   listItem.classList.add("item");
//   list.appendChild(listItem);
// });