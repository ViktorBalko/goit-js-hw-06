const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');



textInput.addEventListener('input', (event) => {

// if (event.currentTarget.value.trim() === '') {
//     textOutput.textContent = 'Anonimus';
//     return;
// }
//  textOutput.textContent = event.currentTarget.value;

// можно записать по другому
 let inputValue = event.currentTarget.value.trim();
     textOutput.textContent = inputValue ? inputValue : 'Anonymous'; 
});
