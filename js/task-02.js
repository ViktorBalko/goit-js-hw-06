const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector(`#ingredients`);
// console.log(ingredientsList);

const createElem = ingredients.map((ingredEl) => {
  const itemEl = document.createElement(`li`); // создадим элемент li
  // console.log(itemEl);

  itemEl.textContent = ingredEl; // добавим текстовое содержимое
  // console.log(itemEl.textContent);

  itemEl.classList.add(`item`); // добавим класс
  // console.log(itemEl);

  return itemEl;
});

ingredientsList.append(...createElem); // ... - распыление
