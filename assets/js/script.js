



document.addEventListener("DOMContentLoaded", function () {

    rockDiv.addEventListener('click', function() {
        console.log("you, clicked rock");
    
    
    })
    scissorsDiv.addEventListener('click', function() {
        window.alert("you, clicked scissors");
    
    
    })
    paperDiv.addEventListener('click', function() {
        window.alert("you, clicked paper");
    
    
    })

})


const computerScore = 0;
const scoreBoardDiv = document.querySelector(".board"); 
const computerScoreSpan = document.getElementById("comp-score");
const userScoreSpan = document.getElementById("player-score");
const resultDiv = document.getElementById("result");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = doc.getElementById("s");


