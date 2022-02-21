const symbolInput = document.querySelector('#validation-input');
// console.log(symbolInput);

symbolInput.addEventListener('blur', (event) => {
    console.log(event.currentTarget.value.length); // возвращает то что ввели
    console.log(event.currentTarget.dataset.length); // возвращает то что требуется

    const valueLength = event.currentTarget.value.length;  
    const expectedLength = Number(event.currentTarget.dataset.length);

    if (valueLength === expectedLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
        return
    }
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
});