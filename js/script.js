// nav
$(window).ready(function () {

    // menu hover + dropdown
    $("ul").hover(function() {
        $(this).find(".nav-active").slideToggle();
        $(this).siblings().find('.nav-active').slideUp();
        }
    );
});

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

  

//   submitButton.addEventListener('click', showResults);