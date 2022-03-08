var burgerIcon = document.querySelector('#burger');
var navbarMenu = document.querySelector('#nav-links');
var timer = document.querySelector('#time');
var answers = document.querySelector('#answers');
var question = document.querySelector('#question');
var helpNav = document.querySelector('#help-nav');
var scoresNav = document.querySelector('#scores-nav');
var instructions = document.querySelector('#instructions');
var startButton = document.querySelector('#start-button');
var questionAnswerEl = document.querySelector("#question-answers");
var startScreen = document.querySelector("#start-screen");
var timerId = document.querySelector('#timer-id');



// Menu button for mobile to show 'help' and 'scores'
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

helpNav.addEventListener('click', triviaRules)

function triviaRules() {
    instructions.classList.remove('hide');
    //instructions.classList.add('hide');
}

// Timer

var timeSeconds = 30

timer.innerHTML = timeSeconds;

function countDown() {
    var countInterval = setInterval(function() {
        if (timeSeconds === 0) {
            clearInterval(countInterval);
            timer.innerHTML = "Time Out!";
        } else {
            timeSeconds--;
            timer.innerHTML = timeSeconds;
        }
    }, 1000);
}

// hide q&a on page load
questionAnswerEl.setAttribute("class", "hide");

//hide start screen
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startScreen.setAttribute("class", "hide");
    startButton.setAttribute("class", "hide");

    //un-hide questions section
    questionAnswerEl.setAttribute("class", "show");

    timerId.setAttribute("class", "show");

    countDown();

}


//generate randomuser as page loads
//window.onload = getRandomUser

//randomuser api fetch
// async function getRandomUser() {
//     const apiUrl = 'https://randomuser.me/api/?results=10';
//     const result = await fetch(apiUrl);
//     const data = await result.json();
//     console.log(data.results);
// }

//open trivia api fetch
// async function sendRequest() {
//     let apiUrl = 'https://opentdb.com/api.php?amount=10';
//     let result = await fetch(apiUrl);
//     let data = await result.json();
//     console.log(data.results);
//     useApiResponse(data.results[0]);
// }
//load open trivia api data
//sendRequest();

//load questions and and answers and make them random 
// function useApiResponse(data) {
//     var correctAnswer = data.correct_answer;
//     var incorrectAnswer = data.incorrect_answers;
//     var optionsList = incorrectAnswer;
//     optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    // console.log(optionsList);
    // console.log(correctAnswer);
//     question.innerHTML = `${data.question} <br> <span class = "category">${data.category} </span>`;
//     answers.innerHTML = `
//         ${optionsList.map((option, index) => `
//             <button class="button is-info is-large"> ${index + 1}. <span>${option}</span> </button>
//     `).join('')}
//     `;
// }

 function useApiDate (data) {
     document.querySelector("#category").innerHTML = `Category: ${data.results[0].category}`
     document.querySelector("#difficulty").innerHTML = `Difficulty: ${data.results}[0].difficulty}`
     document.querySelector("#question").innerHTML = `Question: ${data.results[0].question}`
     document.querySelector("#answer1").innerHTML = data.results[0].correct_answer
     document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answer[0]
     document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answer[1]
     document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answer[2]
 }

 let correctButton = document.querySelector("answer1")

 correctButton.addEventListener("click", ()=>{
     document.querySelector("answer1").innerHTML = "CORRECT!";
     sendRequest();

 })

// const _question = document.getElementById('question');
// const _options = document.querySelector('.quiz-options');

// async function loadQuestion() {
//     const APIUrl = "https://opentdb.com/api.php?amount=5";
//     const result = await fetch(`${APIUrl}`);
//     const data = await result.json();
//     //console.log(data.results);
//     showQuestion(data.results);
// }

// function showQuestion(data){
//     let correctAnswer = data.correct_answer;
//     console.log(correctAnswer);
// }

// loadQuestion();