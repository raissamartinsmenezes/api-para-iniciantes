// nav
$(window).ready(function () {

    // menu hover + dropdown
    $("ul").hover(function() {
        $(this).find(".nav-active").slideToggle();
        $(this).siblings().find('.nav-active').slideUp();
        }
    );

});

// scrooll menu
(function() {
  'use strict';

  let section = document.querySelectorAll(".section");
  let sections = {};
  let i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})()

// quizz
var quizz = [{
  "question": "O que é um servidor?",
  "choices": {
      a: "Um computador com mouse, teclado e monitor", 
      b: "Um computado sem mouse, teclado e monitor", 
      c: "Não é um computador, pois não tem as mesmas funções"
  },
  "correct": "a"
}, 
{
  "question": "Qual o significado de API?",
  "choices": {
      a: "Interface de programação de aplicativos", 
      b: "Interface de programação de aplicação", 
      c: "Implementação de aplicativos programáveis"
  },
  "correct": "b"
}, 
{
  "question": "Quando dois sistemas estão conectados através de uma API, dizemos que eles estão:",
  "choices": {
      a: "Integrados", 
      b: "Ampliados", 
      c: "Manipulados"
  },
  "correct": "a"
}, 
{
  "question": "Qual a tradução de client e server?",
  "choices": {
      a: "clientela e serviço", 
      b: "cliente e servir", 
      c: "cliente e servidor"
  },
  "correct": "c"
}, 
];   

const nextQuestion = document.getElementById('submit');
const resultQuizz = document.getElementById('result');
const quizzBox = document.getElementById('quizz');

console.log(quizz)

// form
const escolheMetodo = document.getElementById('escolheMetodo');
const resultadoMetodo = document.getElementById('resultadoMetodo');
const buttonResposta = document.getElementById('buttonResposta');
const inputCorpo = document.getElementById('inputCorpo');

buttonResposta.addEventListener('click', function(e) {
  e.preventDefault()
  resultadoMetodo.innerHTML = '';
  console.log(inputCorpo)

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
    console.log(valorInput + resultadoAnterior)
    resultadoMetodo.innerHTML = `Boa escolha! Atualizamos o seu pedido para: ${valorInput} + ${resultadoAnterior} ;)`;
  } else if (escolheMetodo.value == 'delete') {
    resultadoMetodo.innerHTML = `Seu pedido foi deletado, sem pizza 🍕 para você!`;
  }
});

// console.log(inputCorpo)
// console.log(resultadoMetodo)
