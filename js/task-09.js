function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector('.change-color');
const hexColor = document.querySelector('.color');

changeButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  console.log(randomColor);

  document.body.style.background = randomColor;
  hexColor.textContent = randomColor;
})