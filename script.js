let botaoCriptografar = document.querySelector('.criptografar');
let botaoDescriptografar = document.querySelector('.descriptografar');



function decodificar(codigo) {
  let textoDigitado = document.querySelector('.text-area-input').value;
  let textoAlterado = '';
  let inputResposta = document.querySelector('.change');
  let outputResposta = document.querySelector('.output-answer ');
  let textArea = document.querySelector('.text-area-output')

  switch (codigo) {
    case "criptografar":
      textoAlterado = textoDigitado.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
      break;
    case "descriptografar":
      textoAlterado = textoDigitado.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
      break;
    default:
      console.log('Erro');
      break;
  }

  if (inputResposta.classList.contains('change')) {
    inputResposta.classList.replace('change', 'hide')

    outputResposta.classList.remove('hide');
    textArea.value = textoAlterado
  }
}

function copiarTexto() {
  const texto = document.querySelector('.text-area-output');
  texto.select();
  document.execCommand('copy');
  alert('Texto copiado com sucesso!')
}

botaoCriptografar.addEventListener('click', () => decodificar('criptografar'));
botaoDescriptografar.addEventListener('click', () => decodificar('descriptografar'));