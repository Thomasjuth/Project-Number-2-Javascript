
const computerScore = 0;
const scoreBoardDiv = document.querySelector(".board"); 
const computerScoreSpan = document.getElementById("comp-score");
const userScoreSpan = document.getElementById("player-score");
const resultDiv = document.getElementById("result");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");





document.addEventListener("DOMContentLoaded", function main () {

        playChoices = document.querySelectorAll('div.choice');
        playChoices.forEach(function (element) {
            element.addEventListener('click', function() {
                audio.play();
                game(element.getAttribute('id'));
            });

        });
    

})



function game(userChoice) {

    const computerChoice = getComputerChoice()
        switch(userChoice + computerChoice) {
            case "rs":
            window.alert("Computer chose SCISSORS, you win this round!");
            break;

            case "rp":
            window.alert("Computer chose PAPER, you win this round");
            break;

            case "rr":
            window.alert("Computer chose ROCK, it's a draw");
            break;

            case "sr":
            window.alert("Computer chose ROCK, one point to the computer!");
            break;

            case "sp":
            window.alert("Computer chose PAPER, one point for you!");
            break;

            case "ss":
            window.alert("Computer chose SCISSORS, it's a draw!");
            break;

            case "ps":
            window.alert("Computer chose SCISSORS, you win this round");
            break;

            case "pp":
            window.alert("Computer chose PAPER, it's a draw!");
            break;

            case "pr":
            window.alert("Computer chose ROCK, one more point for you my friend!");
            break;
        }
        
    


}

function getComputerChoice() {

    const options = ["r", "s", "p"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
    
    }


    const audio = new Audio();
    audio.src = "./assets/audio/thesound.wav";


    









