const buttonPlus = document.querySelector('button[data-action="increment"]');
// console.log(buttonPlus);

const buttonMinus = document.querySelector('button[data-action="decrement"]');
// console.log(buttonMinus);

const valueCounter = document.querySelector('#value');
// console.log(valueCounter);

let counter = 0;

const clickPlus = () => {
    valueCounter.textContent = counter += 1; 
};

const clickMinus = () => {
    valueCounter.textContent = counter -= 1;
};

buttonPlus.addEventListener('click', clickPlus);
buttonMinus.addEventListener('click', clickMinus);

