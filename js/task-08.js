const form = document.querySelector('.login-form');
const dataUser = {};

form.addEventListener('submit', event => {
    event.preventDefault();
    const {
        elements: {
            email,
            password
        }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Заполните все поля формы!')
    } else {
        dataUser.email = email.value;
        dataUser.password = password.value;
        console.log(dataUser);
    }

    event.currentTarget.reset();
});