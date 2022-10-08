function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const backgroundColorTextEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

bodyEl.style.backgroundColor = 'red';
backgroundColorTextEl.addEventListener('change', getRandomHexColor);
changeColorBtn.addEventListener('click', getRandomHexColor);

console.log(backgroundColorTextEl);
console.log(changeColorBtn);