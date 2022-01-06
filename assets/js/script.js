
const computerScore = 0;
const scoreBoardDiv = document.querySelector(".board"); 
const computerScoreSpan = document.getElementById("comp-score");
const userScoreSpan = document.getElementById("player-score");
const resultDiv = document.getElementById("result");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");




document.addEventListener("DOMContentLoaded", function main () {


        rockDiv.addEventListener('click', function() {
            game("rock");
        
        
        })
        scissorsDiv.addEventListener('click', function() {
           game("scissors");
        
        
        })
        paperDiv.addEventListener('click', function() {
           game("paper");
        
        
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










