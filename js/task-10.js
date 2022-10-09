function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

inputEl.addEventListener('input', () => {
  console.log(inputEl.value);
});
btnCreate.addEventListener('click', () => {
  console.log('Create this!')
});
btnDestroy.addEventListener('click', () => {
  console.log('Destroy this!')
});


// const createBoxes = function (amount) {
//   const something = [];

// return something.push(() => {
//   const createdDiv = document.createElement('div');
//   createdDiv.style.background = getRandomHexColor();
//   createdDiv.style.width = '30px';
//   createdDiv.style.height = '30px';
  
//   return createdDiv;
//   })
// };

// const createdDivs = createBoxes(inputEl.value);

// // divBoxesEl.append(createdDiv);
// divBoxesEl.append(...createdDivs);




const some = [];
function valueNumbers(value) {
  for (let index = 1; index <= value; index += 1) {
    some.push(index);
  };
  return some;
};

console.log(valueNumbers(12));



const createBoxes = function (array) {
  return array.map(() => {
    const createdDiv = document.createElement('div');
    createdDiv.style.background = getRandomHexColor();
    createdDiv.style.width = '30px';
    createdDiv.style.height = '30px';
  
    return createdDiv;
  });
};

const itemsEl = createBoxes(some);

divBoxesEl.append(...itemsEl);