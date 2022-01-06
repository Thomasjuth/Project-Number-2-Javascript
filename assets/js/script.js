
const computerScore = 0;
const scoreBoardDiv = document.querySelector(".board"); 
const computerScoreSpan = document.getElementById("comp-score");
const userScoreSpan = document.getElementById("player-score");
const resultDiv = document.getElementById("result");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");




document.addEventListener("DOMContentLoaded", function main () {


        rockDiv.addEventListener('click', function() {
            game("r");
        
        
        })
        scissorsDiv.addEventListener('click', function() {
           game("s");
        
        
        })
        paperDiv.addEventListener('click', function() {
           game("p");
        
        
        })

})



function game(userChoice) {

    const computerChoice = getComputerChoice()
    console.log(computerChoice);

}

function getComputerChoice() {

    const options = ["r", "s", "p"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
    
    }










