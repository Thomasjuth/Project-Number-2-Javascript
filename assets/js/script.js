
const computerScore = 0;
const scoreBoardDiv = document.querySelector(".board"); 
const computerScoreSpan = document.getElementById("comp-score");
const userScoreSpan = document.getElementById("player-score");
const resultDiv = document.getElementById("result");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");




/* waiting to load dom and for user choice/click */

document.addEventListener("DOMContentLoaded", function main () {

        playChoices = document.querySelectorAll('div.choice');
        playChoices.forEach(function (element) {
            element.addEventListener('click', function() {
                audio.play();
                game(element.getAttribute('id'));
            });

        });
    

});


const audio = new Audio();
audio.src = "./assets/audio/sound1.wav";


/* Generates random computer choice@ */
function getComputerChoice() {

    const options = ["r", "s", "p"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
    
    }

/* Converts letter to word */
function convertToWord (letter) {

    if (letter === "r") return "ROCK";
    if (letter === "p") return "PAPER";
    return "SCISSORS";    
        
}


/* Gets excuted if user wins */

function win(a, b) {
    var userScore = "";
    userScore++;
    userScoreSpan.innerHTML = userScore; 
    resultDiv.innerHTML = convertToWord(a) + " beats " + convertToWord(b);

}


/* Gets executed if user loses */
function lose(a, b) {
    var computerScore = "";
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    computerScore++;resultDiv.innerHTML = convertToWord(b) + " beats " + convertToWord(a);

}

/* Gets executed if a draw */
function draw (user, computer) {

    console.log("drawwww");
    resultDiv.innerHTML = "It's a draw!";

}





/* MAIN GAME FUNCTION */
function game(userChoice) {

    const computerChoice = getComputerChoice()
        switch(userChoice + computerChoice) {
            case "rs":
            case "pr":
            case "sp":
                win(userChoice, computerChoice);
                break;

            case "rp":
            case "ps":
            case "sr":
                lose(userChoice, computerChoice);
            break;

            case "rr":
            case "pp":
            case "sp":
                draw(userChoice, computerChoice);
            break;



            
        }
        

}




    









