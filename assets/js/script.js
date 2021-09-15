var secondsLeftNumber = document.querySelector(".seconds-left-number");
var highScoresText = document.querySelector(".high-scores-text");
var numberCorrectDisplay = document.querySelector(".number-correct-display");
var numberIncorrectDisplay = document.querySelector(".number-incorrect-display");
var quizTitle = document.querySelector(".quiz-title");
var instructionText = document.querySelector(".instruction-text");
var button = document.querySelectorAll("button");
var startButton = document.querySelector(".start-button");
var button1 = document.querySelector(".button-1");
var button2 = document.querySelector(".button-2");
var button3 = document.querySelector(".button-3");
var button4 = document.querySelector(".button-4");
var buttonArray = [button1, button2, button3, button4]

// function to begin timer, hide start, and display question set 1 in buttons and instruction text
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
    return;
});


// change visibility of Start button
function changeStartVisibility () {
    var visibility = startButton.getAttribute("data-visibility");

    if(visibility === "visible") {
        startButton.style.display = "none";
        startButton.setAttribute("data-visibility", "hidden");
    console.log(startButton.getAttribute("display"))}
    else {
        startButton.removeAttribute("style", "display:none");
        startButton.setAttribute("data-visibility", "visible");}
}

// change visibility of answer buttons (buttons1-4)
function changeButtonVisibility() {
    for (let i = 0; i < buttonArray.length; i++) {
        
    // startButton.setAttribute("data-visibility", "hidden");
    // buttonArray.setAttribute("data-visibility", "visible");
    var visibility = buttonArray[i].getAttribute("data-visibility");

        if(visibility === "hidden") {
         buttonArray[i].removeAttribute("style", "display:none");
        buttonArray[i].setAttribute("data-visibility", "visible");}
        else {
        buttonArray[i].style.display = "none";
        buttonArray[i].setAttribute("data-visibility", "hidden");} 
    }
;}

// functions to change text in buttons 1-4 and instructions to different sets 
function displayQuestionSet1 () {
    instructionText.textContent = "Whats your favorite color?"
    button1.textContent = "Blue";
    button2.textContent = "Red";
    button3.textContent = "Green";
    button4.textContent = "Orange";
    button.forEach(item => {
        item.addEventListener('click', event => {
            if (item == button1) {
                secondsLeftNumber += 10;}
            else {
                secondsleftNumber -= 5;};
    displayQuestionSet2();
    });
});
}

function displayQuestionSet2 () {
    instructionText.textContent = "Whats your favorite food??"
    button1.textContent = "Burgers";
    button2.textContent = "Curry";
    button3.textContent = "Sushi";
    button4.textContent = "Salad";
    button.forEach(item => {
        item.addEventListener('click', event => {
            if (item == button1) {
                secondsLeftNumber += 10;}
            else {
                secondsleftNumber -= 5;};
    displayQuestionSet3();
    });
});
}

function displayQuestionSet3 () {
    instructionText.textContent = "Whats your favorite dog breed?"
    button1.textContent = "Doberman";
    button2.textContent = "Chihuahua";
    button3.textContent = "Golden Retriever";
    button4.textContent = "Corgi";
    button.forEach(item => {
        item.addEventListener('click', event => {
            if (item == button1) {
                secondsLeftNumber += 10;}
            else {
                secondsleftNumber -= 5;};
    displayQuestionSet4();
    });
});
}

function displayQuestionSet4 () {
    instructionText.textContent = "Whats your favorite music?"
    button1.textContent = "RnB";
    button2.textContent = "Rap";
    button3.textContent = "Pop";
    button4.textContent = "Metal";
    button.forEach(item => {
        item.addEventListener('click', event => {
            if (item == button1) {
                secondsLeftNumber += 10;}
            else {
                secondsleftNumber -= 5;};
    displayQuestionSet5();
    });
});
}

function displayQuestionSet5 () {
    instructionText.textContent = "Whats your favorite season?"
    button1.textContent = "Spring";
    button2.textContent = "Summer";
    button3.textContent = "Fall";
    button4.textContent = "Winter";
    button.forEach(item => {
        item.addEventListener('click', event => {
            if (item == button1) {
                secondsLeftNumber += 10;}
            else {
                secondsleftNumber -= 5;};
    displayQuestionSet1();
    });
});
}