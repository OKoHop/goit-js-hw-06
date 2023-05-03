const placeHolder = document.querySelector('#name-input');
const out = document.querySelector('#name-output');

placeHolder.addEventListener('input', (event) => {
    out.textContent = event.currentTarget.value;
    if (out.textContent.length === 0) {
        out.textContent = 'Anonymous';
    }
})