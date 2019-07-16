const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(){
    const divAnswer = document.getElementById('resultadoQuizz');
    const rightQuestion = document.querySelectorAll('input[name="question"]');
    for (let i = 0; i < rightQuestion.length; i++) {
        if (rightQuestion[i].checked) {
            return rightQuestion[i].value;
            // console.log(resultado)
        }
        let resultado = rightQuestion[i].value;
    }

    const rightQuestion1 = document.querySelectorAll('input[name="question1"]');
    for (let i = 0; i < rightQuestion.length; i++) {
        if (rightQuestion1[i].checked) {
            return rightQuestion1[i].value;
            // console.log(resultado1)
        }
    }

    const rightQuestion2 = document.querySelectorAll('input[name="question2"]');
    for (let i = 0; i < rightQuestion.length; i++) {
        if (rightQuestion2[i].checked) {
            return rightQuestion2[i].value;
            // console.log(resultado2)
        }

    }

    // let resultado = rightQuestion[i].value;
    // let resultado1 = rightQuestion1[i].value;
    // let resultado2 = rightQuestion2[i].value;
    let resultadoA = 'a';
    let resultadoE = 'e';
    let resultadoG = 'g';
    console.log(resultado)
    // const divAnswer = document.getElementById('resultadoQuizz');
 
    if (resultado === resultadoA && resultado1 === resultadoE && resultado2 === resultadoG) {
        // console.log(resultado)
            divAnswer.innerHTML = 'Tá voaaaaando ✈️!';
            // divAnswer.innerHTML = 'Ixi, vamos tentar de novo?';
    } else {
        divAnswer.innerHTML = 'Ixi, vamos tentar de novo?';
    }

    // if(resultado == resultadoA && resultado1 == resultadoE && resultado2 == resultadoG) {
    //     divAnswer.innerHTML = 'Tá voaaaaando ✈️!';
    //     // divAnswer.innerHTML = 'Ixi, vamos tentar de novo?';
    // } else if(rightQuestion == 2) {
    //     divAnswer.innerHTML = 'Ô loquinho, arrasou!';
    // } else if (rightQuestion == 3) {
    //     divAnswer.innerHTML = 'Tá voaaaaando ✈️!';
    // } else { 
    //     divAnswer.innerHTML = 'Deu ruim! Você não acertou nenhuma :/';
    // }    

});