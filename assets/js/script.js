
let computerScore = 0;
const scoreBoardDiv = document.querySelector(".board"); 
const computerScoreSpan = document.getElementById("comp-score");
const userScoreSpan = document.getElementById("player-score");
let userScore = 0;
const resultDiv = document.getElementById("result");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");
const muteButton = document.getElementById("mute");
const instructButton = document.getElementById("instruct");
let mute = false;


/* waiting to load dom and for user choice/click */

document.addEventListener("DOMContentLoaded", function main () {

        playChoices = document.querySelectorAll('div.choice');
        playChoices.forEach(function (element) {
            element.addEventListener('click', function() {
        
           playAudio() 
                game(element.getAttribute('id'));
            });

        });

        muteButton.addEventListener ('click', function(){

        mute = true;
    });

        instructButton.addEventListener ('click', function(){

            alert('Click on your choice to make a move. First to 10 points wins the game! Press "mute" button to turn off the audio.');
        });
    

});

function playAudio () {

    if (mute == false) {

        audio.play(); }
}

const audio = new Audio();
audio.src = "./assets/audio/sound1.wav";



/* Generates random computer choice */
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
    userScore++;
    if (userScore === 10) {
        userScore = 0;
        computerScore = 0;
        alert("CONGRATULATIONS, YOU WON! :D")
    }
    computerScoreSpan.innerHTML = computerScore;
    userScoreSpan.innerHTML = userScore; 
    resultDiv.innerHTML = "Computer chose " + convertToWord(b) + ", " + "You Win!";

}


/* Gets executed if user loses */
function lose(a, b) {
    computerScore++;
    if (computerScore === 10) {
        computerScore = 0;
        userScore = 0;
        alert("COMPUTER IS THE WINNER!")
    }
    userScoreSpan.innerHTML = userScore; 
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = "Computer chose " + convertToWord(b) + ", " + " You lose!";
}

/* Gets executed if a draw */
function draw (user, computer) {
    

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

