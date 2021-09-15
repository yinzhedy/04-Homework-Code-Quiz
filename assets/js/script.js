var secondsLeftNumber = document.querySelector(".seconds-left-number");
var highScoresText = document.querySelector(".high-scores-text");
var numberCorrectDisplay = document.querySelector(".number-correct-display");
var numberIncorrectDisplay = document.querySelector(".number-incorrect-display");
var quizTitle = document.querySelector(".quiz-title");
var instructionText = document.querySelector(".instruction-text");
var startButton = document.querySelector(".start-button");
var button1 = document.querySelector(".button-1");
var button2 = document.querySelector(".button-2");
var button3 = document.querySelector(".button-3");
var button4 = document.querySelector(".button-4");
var buttonArray = [button1, button2, button3, button4]


startButton.addEventListener("click", function() {
    var timeLeft = 30;

    timeInterval = setInterval(function () {
        timeLeft--;
        secondsLeftNumber.textContent = timeLeft;
        console.log(timeLeft);

        if(timeLeft === 0) {
        clearInterval(timeInterval);}
    }, 1000);
    displayQuestionSet1();
    changeStartVisibility();
    changeButtonVisibility();
});
// function to begin quiz
// start timer


// change -data-visibility on answer buttons, start button, and title
// change the text inside of instruction text
function changeStartVisibility () {
    var visibility = startButton.getAttribute("data-visibility");

    if(visibility === "visible") {
        startButton.setAttribute("display", "none");
        startButton.setAttribute("data-visibility", "hidden");}
    else {
        startButton.removeAttribute("display", "none");
        startButton.setAttribute("data-visibility", "visible");}
}

function changeButtonVisibility() {
    for (let i = 0; i < buttonArray.length; i++) {
        
    // startButton.setAttribute("data-visibility", "hidden");
    // buttonArray.setAttribute("data-visibility", "visible");
    var visibility = buttonArray[i].getAttribute("data-visibility");

        if(visibility === "hidden") {
         buttonArray[i].removeAttribute("display", "none");
        buttonArray[i].setAttribute("data-visibility", "visible");}
        else {
        buttonArray[i].setAttribute("display", "none");
        buttonArray[i].setAttribute("data-visibility", "hidden");} 
    }
;}

function displayQuestionSet1 () {
    instructionText.textContent = "Whats your favorite color?"
    button1.textContent = "Blue";
    button2.textContent = "Red";
    button3.textContent = "Green";
    button4.textContent = "Orange";
};

function displayQuestionSet2 () {
    instructionText.textContent = "Whats your favorite food??"
    button1.textContent = "Burgers";
    button2.textContent = "Curry";
    button3.textContent = "Sushi";
    button4.textContent = "Salad";
};

function displayQuestionSet3 () {
    instructionText.textContent = "Whats your favorite dog breed?"
    button1.textContent = "Doberman";
    button2.textContent = "Chihuahua";
    button3.textContent = "Golden Retriever";
    button4.textContent = "Corgi";
};

function displayQuestionSet4 () {
    instructionText.textContent = "Whats your favorite music?"
    button1.textContent = "RnB";
    button2.textContent = "Rap";
    button3.textContent = "Pop";
    button4.textContent = "Metal";
};

function displayQuestionSet5 () {
    instructionText.textContent = "Whats your favorite season?"
    button1.textContent = "Spring";
    button2.textContent = "Summer";
    button3.textContent = "Fall";
    button4.textContent = "Winter";
};



// change the text inside of answer buttons
// either add or subtract time from the timer
// add to incorrect or correct score display
// call the next function for the next question/answers