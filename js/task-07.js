const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputRange);

function onInputRange(event) {
    // console.log(event.currentTarget.value);
    textEl.style.fontSize = `${event.currentTarget.value}px`;
};

// console.log(inputEl.value);
// console.log(textEl.style.fontSize);
// console.log(typeof (textEl.style.fontSize));
// console.log(typeof (inputEl.value));