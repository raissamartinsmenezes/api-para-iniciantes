// quizz 
const quizz = [{
    question: "O que é um servidor?",
    choices: ["Um computador com mouse, teclado e monitor", "Um computado sem mouse, teclado e monitor", "Não é um computador, pois não tem as mesmas funções"],
    correct: "0"
    },
    {
    question: "Qual o significado de API?",
    choices: ["Interface de programação de aplicativos", "Interface de programação de aplicação", "Implementação de aplicativos programáveis"], 
    correct: "1"
    },
    {
    question: "Quando dois sistemas estão conectados através de uma API, dizemos que eles estão:",
    choices: ["Integrados", "Ampliados", "Manipulados"],
    correct: "0"
    },
    {
    question: "Qual a tradução de client e server?",
    choices: ["clientela e serviço", "cliente e servir", "cliente e servidor"],
    correct: "2"
    },
];

// let questionsCounter = 0; //numero de questões
// let choices = []; //respostas do usuário 
// // let boxQuizz = $('#quizz'); //div da quiz
// // let submitButton = $('#submit') //pegar botão submit

// $('#submit').on('click', function (e) {
//     e.preventDefault();
//     if (isNaN(choices[questionsCounter])) {
//         alert('Selecione uma resposta para continuar!');
//     } else {
//         questionsCounter++;
//     }
// })
        

function createQuestionElement(i) {
    let divQuestions = $("<div id='questions' class='option-black-box'></div>");
    let questionAsk = $(`<p id='qAsk'>TESTE1</p>`);
    divQuestions.append(questionAsk);
    let item;
    for (item = 0; item < quizz[i].choices.length; item++) {
        let divChoices = $('<div>');
        let input = "<input type='radio' name='quizz' value='0'><label>TESTE2</label>";
        input += quizz[i].choices[i];
        item.append(input);
        radioList.append(item);
    };
    // divQuestions.append(`<div><input type='radio' name='quizz' value='0'><label>TESTE2</label></div>`);
    $('#boxQuestions').append(divQuestions);
    // return divQuestions
}

createQuestionElement();
// function createInputsQuestions() {
//     $('#questions').append(`<div><input type='radio' name='quizz' value='${i}'><label>${quizz[0].question.choices}</label></div>`);
//     return divQuestions
// }
// console.log(quizz[0].question)
// createInputsQuestions();




// ---------------------------------------------------------


// cria a div que contem a respostas
    // function createQuestionElement(index) {
    //     let divQuestions = $("<div id='questions' class='option-black-box'></div>");
    //     $('#boxQuestions').append(divQuestions);
    //     let questionAsk = $('<p>').append(quizz[index].question);
    //     $('#questions').append(questionAsk);
    //     return divQuestions
    // }


    // let qElement = $('<div>', {
    //     id: 'questions',
    //     class: 'option-black-box'
    // });

    // var header = $('<label>Question ' + (index + 1) + ':</h2>');
    // qElement.append(header);

    // var question = $('<p>').append(questions[index].question);
    // qElement.append(question);

    // var radioButtons = createRadios(index);
    // qElement.append(radioButtons);

    // return qElement;


// cria a lista de respostas com radio buttons
// function createRadios(index) {
//     var radioList = $('<ul>');
//     var item;
//     var input = '';
//     for (var i = 0; i < questions[index].choices.length; i++) {
//         item = $('<li>');
//         input = '<input type="radio" name="answer" value=' + i + ' />';
//         input += questions[index].choices[i];
//         item.append(input);
//         radioList.append(item);
//     }
//     return radioList;
// }
// console.log(questionsCounter)
// console.log(choices)
// console.log(boxQuizz)
// console.log(submitButton)

