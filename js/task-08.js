const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // запрещаем перезагрузку страницы

    const formEl = event.currentTarget.elements;
    console.log(formEl);

    const emailValue = formEl.email.value;
    const passwordValue = formEl.password.value;

    if (!emailValue || !passwordValue) {
        alert('Все поля должны быть заполнены')
        return
    }

    // console.log(emailValue);

    const inputValue = {}; // создаем пустой обьект
    
    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach((value, name) => inputValue[name] = value)
    console.log(inputValue);

    event.currentTarget.reset();
})
