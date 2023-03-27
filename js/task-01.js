const categoriesList = document.querySelector("#categories"); 
const items = categoriesList.querySelectorAll("li.item"); 
const itemsLength = items.length; 
console.dir(`Number of categories: ` + itemsLength);

const items2 = document.querySelectorAll("li.item");
items2.forEach((item) => {
  const head = item.querySelector("h2").textContent;
  const count = item.querySelectorAll("li").length;
  console.log("Category: " + head);
  console.log("Elements: " + count);
});
