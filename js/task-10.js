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
  for (let index = 1; index <= amount; index += 1) {
    const createdDiv = document.createElement('div');
    createdDiv.style.background = getRandomHexColor();
    createdDiv.style.width = '30px';
    createdDiv.style.height = '30px';
  
    someArray.push(createdDiv);
  };
  
  divBoxesEl.append(...someArray);
};

// 2)
function destroyBoxes() {
  divBoxesEl.innerHTML = '';
};