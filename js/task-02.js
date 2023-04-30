const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const items = [];
ingredients.forEach(el => {
  const createItem = document.createElement('li');
  createItem.textContent = el;
  createItem.classList.add('item');
  items.push(createItem);
});

list.append(...items);
console.log(list);