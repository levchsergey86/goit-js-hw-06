
const categoriesList = document.querySelector('#categories'); // знайти елемент ul#categories
const items = categoriesList.querySelectorAll('li.item'); // отримати всі елементи li.item в списку
const itemsLength = items.length; // знайти довжину масиву li.item
console.dir(`Number of categories: ` + itemsLength); // вивести довжину масиву у консоль


const items2 = document.querySelectorAll('li.item');
items2.forEach(item => {
  const head = item.querySelector('h2').textContent;
  const count = item.querySelectorAll('li').length;
  console.log('Category: ' + head);
  console.log('Elements: ' + count);
});

