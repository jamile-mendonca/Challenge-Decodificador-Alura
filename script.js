let botaoCriptografar = document.querySelector('.criptografar');
let botaoDescriptografar = document.querySelector('.descriptografar');



function criptografar() {
  let textoDigitado = document.querySelector('.text-area-input').value;
  textoDigitado.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
}

function descriptografar() {
  let textoDigitado = document.querySelector('.text-area-input').value;
  textoDigitado.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
}

botaoCriptografar.addEventListener('click', criptografar)
botaoDescriptografar.addEventListener('click', descriptografar)
