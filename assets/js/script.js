
const computerScore = 0;
const scoreBoardDiv = document.querySelector(".board"); 
const computerScoreSpan = document.getElementById("comp-score");
const userScoreSpan = document.getElementById("player-score");
const resultDiv = document.getElementById("result");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");


function main () {

    rockDiv.addEventListener('click', function() {
        window.alert("you, clicked rock");
    
    
    })
    scissorsDiv.addEventListener('click', function() {
        window.alert("you, clicked scissors");
    
    
    })
    paperDiv.addEventListener('click', function() {
        window.alert("you, clicked paper");
    
    
    })
    
    }

function getComputerChoice() {

const options = ["r", "s", "p"];
const randomNumber = Math.floor(Math.random() * 3);
return options[randomNumber];

}


function userChoice(){

const computerChoice = getComputerChoice()
console.log(computerChoice);

}





