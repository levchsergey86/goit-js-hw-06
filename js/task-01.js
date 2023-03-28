const categoriesList = document.querySelector("#categories"); 
const items = categoriesList.children;
const itemsLength = items.length; 
console.dir(`Number of categories: ` + itemsLength);

const items2 = document.querySelectorAll("li.item");
items2.forEach((item) => {
  const head = item.firstElementChild.textContent;
  const count = item.lastElementChild.children.length;
  console.log("Category: " + head);
  console.log("Elements: " + count);
});
