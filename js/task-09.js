function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
let backgroundColorTextEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  backgroundColorTextEl.textContent = bodyEl.style.backgroundColor;
});