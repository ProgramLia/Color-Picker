// input color....
let input = document.querySelector('.input-color input');

// hexadecimal...
let hexa = document.querySelector('.hexadecimal span');

// event listener...
input.addEventListener('input' , function(event) {
    hexa.textContent = input.value;
    document.body.style.backgroundColor = input.value
})

// fungsi untuk copy text...
function copy() {
    let text = input.value;
    navigator.clipboard.writeText(text).then(item=> {
        document.querySelector('.information').textContent = 'Text Berhasil disalin'
    }).catch(error=> {
        console.log('Gagal menyalin text' + error)
    })
}