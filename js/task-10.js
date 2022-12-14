function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
  createBoxes(Number(inputEl.value))
});
btnDestroy.addEventListener('click', destroyBoxes);

// 1)
function createBoxes(amount) {
  const someArray = [];
  let widthDiv = 20;
  let heightDiv = 20;
  for (let index = 1; index <= amount; index += 1) {
    const createdDiv = document.createElement('div');

    widthDiv += 10;
    heightDiv += 10;
    createdDiv.style.width = `${widthDiv}px`;
    createdDiv.style.height = `${heightDiv}px`;
    createdDiv.style.background = getRandomHexColor();
  
    someArray.push(createdDiv);
  };
  
  divBoxesEl.append(...someArray);
};

// 2)
function destroyBoxes() {
  divBoxesEl.innerHTML = '';
};