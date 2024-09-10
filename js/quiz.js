function startquiz(domain) {
    var quizQuestions = document.querySelectorAll('[id^="quizquestion-"]');
    quizQuestions.forEach(function(question) {
        question.style.display = 'none';
    });
    var selectedQuestion = document.getElementById('quizquestion-' + domain);
    if (selectedQuestion) {
        selectedQuestion.style.display = 'block';
    }
}

function startQuiz(domain) {
    var quizQuestions = document.querySelectorAll('[id^="quizquestion-"]');
    quizQuestions.forEach(function (question) {
        question.style.display = 'none';
    });

    var selectedQuestion = document.getElementById('quizquestion-' + domain);
    if (selectedQuestion) {
        selectedQuestion.style.display = 'block';
    }
}


function finishQuiz() {

    document.getElementById('total-correct').innerText = totalCorrect;
    document.getElementById('total-attempted').innerText = totalAttempted;


    var quizQuestions = document.querySelectorAll('[id^="quizquestion-"]');
    quizQuestions.forEach(function (question) {
        question.style.display = 'none';
    });

}
function checkAnswer(questionNumber, selectedOption) {
    if(questionNumber==2 || questionNumber==7)
    {var correctAnswer = 'B'; }
    else if(questionNumber==1)
    {
      var correctAnswer = 'D'; 
    }
    else if(questionNumber==4 )
    {var correctAnswer = 'A'; }
    else
    {
      var correctAnswer = 'C'; 
    }
    

    var selectedButton = document.getElementById('quizquestion-' + questionNumber).querySelector(".btn-danger-"+ selectedOption+"");
     
    if (selectedOption === correctAnswer) {
      
        selectedButton.style.backgroundColor = 'green';
    } else {
      
        selectedButton.style.backgroundColor = 'red';
    }
}
