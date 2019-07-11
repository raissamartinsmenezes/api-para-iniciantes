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

  

