const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
// console.log(text);

text.style.fontSize = `${slider.value}px`; // приравниваем значения
console.log(slider);

slider.addEventListener('input', (event) => {
    text.style.fontSize = event.currentTarget.value + 'px';
})