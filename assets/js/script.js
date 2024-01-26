// wait for the dom to finish loading before running the game
// get the button elelments and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
           if (this.getAttribute("data-type") === "submit") {
               alert("You clicked Submit!");
           } else {
            let gameType = this.getAttribute("data-type");
            alert(`You clicked ${gameType}`);
           }
        });
    }
});


function runGame() {

    // creates two random numbers batween 1 and 25
      let num1 = Math.floor(Math.random() * 25) + 1;
      let num2 = Math.floor(Math.random() * 25) + 1;   
}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}


function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}