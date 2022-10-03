const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};

const counterEl = document.querySelector('#counter');
const buttonDecrementEl = counterEl.firstElementChild;
const buttonIncrementEl = counterEl.lastElementChild;
const valueEl = document.querySelector('#value');

buttonDecrementEl.addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});
buttonIncrementEl.addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});