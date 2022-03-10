// declaration variables
var questionEl = document.getElementById("question-title");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var startButton = document.getElementById("start");
var currentQuestion = 0;

function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
  
    // un-hide questions section
    questionsEl.removeAttribute("class");
  
    // start timer
    timerId = setInterval(clockTick, 1000);
  
    // show starting time
    timerEl.textContent = time;
  
    questionDisplay();
  }

startButton.addEventListener("click", function(event){
    event.preventDefault();
    questionDisplay();
})

// displays the question and answers
function questionDisplay(){
    questionEl.innerText = questions[currentQuestion].title;
    choicesEl.innerHTML = "";
    for (let i = 0; i < questions[currentQuestion].choices.length; i++){
        // declaring the answer button
        var answerButton = document.createElement("button");
        answerButton.innerText = questions[currentQuestion].choices[i];
        choicesEl.appendChild(answerButton);
        // displays the next question upon click
        answerButton.addEventListener("click", function(event){
            event.preventDefault();
            correctAnswer(event.target.innerText);
            currentQuestion++;
            questionDisplay();
        })
    }
}

function correctAnswer(chosen){
    //check if user got wrong or correct answer
    if (chosen !== questions[currentQuestion].answer){
        // subtract time
        time -= 10;
    } else {
    }
}