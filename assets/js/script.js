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
var timeLeft = 31;

function timer() {
    timeInterval = setInterval(function () {
        timeLeft--;
        secondsLeftNumber.textContent = timeLeft;
        console.log(timeLeft);

        if(timeLeft === 0) {
        clearInterval(timeInterval);}
    }, 1000);
};
// function to begin timer, hide start, and display question set 1 in buttons and instruction text
startButton.addEventListener("click", function() {

    // timeInterval = setInterval(function () {
    //     timeLeft--;
    //     secondsLeftNumber.textContent = timeLeft;
    //     console.log(timeLeft);

    //     if(timeLeft === 0) {
    //     clearInterval(timeInterval);}
    // }, 1000);
    changeStartVisibility();
    changeButtonVisibility();
    timer();
    displayQuestionSet1();
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
    instructionText.textContent = "Which is a correct way to add 'display: none' to a variable named 'header'?"
    button1.textContent = "header.setAttribute(display, none)";
    button2.textContent = "header.style.display(none)";
    button3.textContent = "header.setAttribute('display', 'none')";
    button4.textContent = "header.style.display = 'none'";
    button.forEach(item => {
        item.addEventListener('click', event => {
            if (item = buttonArray[3]) {
                timeLeft += 10;}
            else {
                timeLeft -= 5;};
    // timer();
    displayQuestionSet2();
    return;
    });
});
}

function displayQuestionSet2 () {
    instructionText.textContent = "using  var___ = document.querySelectAll, on a class present on multiple elements within the document, will create:"
    button1.textContent = "a boolean";
    button2.textContent = "an array";
    button3.textContent = "a number";
    button4.textContent = "you cannot declare a variable under these circumstances";
    button.forEach(item => {
        item.addEventListener('click', event => {
            if (item = buttonArray[1]) {
                timeLeft += 10;}
            else {
                timeLeft -= 5;};
    // timer();
    displayQuestionSet3();
    return;
    });
});
}

function displayQuestionSet3 () {
    instructionText.textContent = "We use 'stopPropogation()' in order to:"
    button1.textContent = "prevent an infitite loop";
    button2.textContent = "end a function";
    button3.textContent = "prevent a 404 message / being redirected to a different page";
    button4.textContent = "prevent event bubbling";
    button.forEach(item => {
        item.addEventListener('click', event => {
            if (item = buttonArray[3]) {
                timeLeft += 10;}
            else {
                timeLeft -= 5;};
    // timer();
    displayQuestionSet4();
    return;
    });
});
}

function displayQuestionSet4 () {
    instructionText.textContent = "We use 'for loops' in order to"
    button1.textContent = "declare/create a function";
    button2.textContent = "finish an if statement";
    button3.textContent = "execute code repeatedly ";
    button4.textContent = "give an alternative when if statement conditions are not met";
    button.forEach(item => {
        item.addEventListener('click', event => {
            if (item = buttonArray[2]) {
                timeLeft += 10;}
            else {
                timeLeft -= 5;};
    // timer();
    displayQuestionSet5();
    return;
    });
});
}

function displayQuestionSet5 () {
    instructionText.textContent = "What is the difference between declaring var using querySelector() and querySelectorAll() ?"
    button1.textContent = "querySelector selects a single class/element/id/etc., querySelectorAll selects anything with the selected class/element/id/etc.";
    button2.textContent = "querySelectorAll selects anything with the selected class/element/id/etc., querySelector selects a single class/element/id/etc.";
    button3.textContent = "querySelector selects only by element type, querySelectorAll selects all elements.";
    button4.textContent = "querySelector can only assigns value to a variable, querySelectorAll can only assigns value to a constant";
    button.forEach(item => {
        item.addEventListener('click', event => {
            if (item = buttonArray[0]) {
                timeLeft += 10;}
            else {
                timeLeft -= 5;};
    // timer();
    displayQuestionSet1();
    return;
    });
});
}