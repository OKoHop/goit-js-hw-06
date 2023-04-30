const placeHolder = document.querySelector('#name-input');
const out = document.querySelector('#name-output');

placeHolder.addEventListener('input', (event) => {
    out.textContent = event.currentTarget.value;
})