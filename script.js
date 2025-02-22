// input color....
let input = document.querySelector('.input-color input');

// hexadecimal...
let hexa = document.querySelector('.hexadecimal span');

// event listener...
input.addEventListener('input' , function(event) {
    hexa.textContent = input.value;
    document.body.style.backgroundColor = input.value
})