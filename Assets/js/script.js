let questions = [ 
    {question: "What is the extension of a CSS file?",
    choices:[".html",".css",".js"],
    answer: ".css"
    },
    {
    question: "How do you select an ID in a CSS file?",
    choices:["#",".","$"],
    answer: "#"
    },
    {
    question: "What adds interactivity to a webbpage?",
    choices:["CSS","Javascript","Adding a 'Interact' tag to your html file"],
    answer: "Javascript"
    },
    {
    question: "What symbol is used to signify the start of a JQuery?",
    choices:["%","#","$"],
    answer: "$"
    },
    {
    question: "What does CSS stand for?",
    choices:["Creative Styling Selectors", "Cascading Style Sheets", "Cool Stylish Shoes"],
    answer: "Cascading Style Sheets"
    }];
let timer = 60;
let askQuestion = document.getElementById("quiz-question");
let answers = document.getElementsByClassName("option");
let questionIndex = 0;
let score = document.getElementById("timer-display");
var userInitial = document.getElementById('initials');
var saveScore = document.getElementById('save')
var localStorageName = 'highscore';
var saveHighScore = document.getElementById('save');

  
function Quiz() {
    var choices = questions[questionIndex].choices
    askQuestion.textContent = questions[questionIndex].question;
    for (i = 0;i< choices.length; i++){
        console.log(answers [i]);
        answers[i].textContent = choices[i];
        
        answers[i].addEventListener('click', checkAnswer);
    };
    
    
}
function checkAnswer(event){
    var correctAnswer = questions[questionIndex].answer
    if (event.target.textContent === correctAnswer) {
        alert('Correct!');
    }
    else {
        alert('Incorrect.');
    timer -= 5;
    }
    console.log(questionIndex)
    questionIndex ++
    if (questionIndex >= 5) {
        clearInterval(timeInterval);
        document.getElementById('quiz-end').classList.remove('hide');
        document.getElementById('question').classList.add('hide');
    } else{
    Quiz()
    }
}

var timeInterval = setInterval(function(){
timer--
score.textContent = timer
if (timer === 0){
    clearInterval(timeInterval);
    document.getElementById('quiz-end').classList.remove('hide');
    document.getElementById('question').classList.add('hide');
  



}
},1000);

function saveScore(event){
    var data = {
        initials: userInitial.value,
        score: timer
    }
    var localScore = localStorage.setItem(localStorageName)
   
    localScore.addEventListener('click', saveHighScore)
    
}
function retryQuiz(){

    
}

localStorage.setItem('initials', 'clearInterval');
localStorage.getItem('initials')
Quiz()