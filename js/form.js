// form
const escolheMetodo = document.getElementById('escolheMetodo');
const resultadoMetodo = document.getElementById('resultadoMetodo');
const buttonResposta = document.getElementById('buttonResposta');
const inputCorpo = document.getElementById('inputCorpo');

buttonResposta.addEventListener('click', function (e) {
  e.preventDefault()
  resultadoMetodo.innerHTML = '';
  // console.log(inputCorpo)

  if (escolheMetodo.value == 'get') {
    resultadoMetodo.innerHTML = 'Você ainda não pediu a sua pizza, que tal tentar outro método?';
  } else if (escolheMetodo.value == 'post') {
    valorInput = inputCorpo.value
    resultadoMetodo.innerHTML = `Ótimo, pegamos o pedido da sua pizza 🍕 de ${valorInput} ;)`;
  } else if (escolheMetodo.value == 'put') {
    let resultadoAnterior = [];
    resultadoAnterior.push(valorInput);
    valorInput = '';
    valorInput = inputCorpo.value;
    // console.log(valorInput + resultadoAnterior)
    resultadoMetodo.innerHTML = `Boa escolha! Atualizamos o seu pedido para: ${valorInput} + ${resultadoAnterior} ;)`;
  } else if (escolheMetodo.value == 'delete') {
    resultadoMetodo.innerHTML = `Seu pedido foi deletado, sem pizza 🍕 para você!`;
  }
});

// console.log(inputCorpo)
// console.log(resultadoMetodo)