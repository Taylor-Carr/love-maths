// wait for the dom to finish loading before running the game
// get the button elelments and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
           if (this.getAttribute("data-type") === "submit") {
               checkAnswer();
           } else {
            let gameType = this.getAttribute("data-type");
            runGame(gameType);
           }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
             checkAnswer();
        }
    })


    runGame("addition");
   

});


function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // creates two random numbers batween 1 and 25
      let num1 = Math.floor(Math.random() * 25) + 1;
      let num2 = Math.floor(Math.random() * 25) + 1;
    if (gameType ==="addition") {
        displayAdditionQuestion(num1, num2);     
     } else if (gameType === "multiply") {
		displayMultiplyQuestion(num1, num2);
	} else if (gameType === "subtract") {
		displaySubtractQuestion(num1, num2);
	} else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}. Aborting!`;
        }
    
} 

/**
 * checks the answer against the first element in
 * the returned calculatecorrectanswer array
 */
function checkAnswer() {
    
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it correct:)")
        incrementScore();
    } else {
        alert(`Awwwww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
 runGame(calculatedAnswer[1]);


}
 /**
  * Gets the operands (numbers) and the operator (plus, minus etc)
  * directly from the dom, and returns the correct answer.
  */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').textContent);
    let operand2 = parseInt(document.getElementById('operand2').textContent);
    let operator = document.getElementById("operator").textContent; 


    if (operator === "+") {
		return [operand1 + operand2, "addition"];
	} else if (operator === "x") {
		return [operand1 * operand2, "multiply"];
	} else if (operator ==="-") {
		return [operand1 - operand2, "subtract"];
	} else if (operator === "/") { 
        return [operand1 / operand2, "division"];
     } else {
		alert(`Unimplemented operator ${operator}`);
		throw `Unimplemented operator ${operator}, aborting!`;
	}
}


/**
 * gets the correct score from the dom and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}
/**
 * gets the current tally of incorrect answers from the dom and increments it by 1
 */

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}




function displayAdditionQuestion(operand1, operand2) {
    
        document.getElementById('operand1').textContent = operand1;
        document.getElementById('operand2').textContent = operand2;
        document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}

function displayDivisionQuestion(operand1, operand2) {
    operand1 = operand1 * operand2;
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
    
   
    
}