// let counterValue = 0;

const btnInc = document.querySelector('[data-action="increment"]');
const btnDecr = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('#value')

const counterValue = {
    value: 0,
    decrement(value) {
        this.value -= 1;
    },
    increment(value) {
        this.value += 1;
    },
}

btnInc.addEventListener('click', () => {
    counterValue.increment();
    counter.textContent = counterValue.value;
})

btnDecr.addEventListener('click', () => {
    counterValue.decrement();
    counter.textContent = counterValue.value;
})