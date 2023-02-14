const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let winStreak = 0;
let playerWins = 0;

document.addEventListener("DOMContentLoaded", function() {
    generateButtons(options);
    const buttons = document.querySelectorAll("#buttons .button")
    for (const button of buttons) {
        button.addEventListener('click', function(event) {
            startGame(button);
        })
    }
    console.log("hello");
    
  });
  function generateButtons(options) {
    let html = ""
    options.forEach((option) => {
        console.log(option);
        html += `<button class="button">${option}</button>`;
    });
    document.getElementById('buttons').innerHTML = html;
}

function startGame(clickedButton){ 
    let playerIndex = options.indexOf(clickedButton.innerHTML);
    let computerIndex = Math.floor(Math.random() * ((4 - 1) - 0 + 1) + 0);
    console.log(playerIndex);
    console.log(computerIndex);
    document.getElementById("player-choice").innerHTML = options[playerIndex];
    document.getElementById("computer-choice").innerHTML = options[computerIndex];
    let results = whoWon(playerIndex, computerIndex);
    printResults(playerIndex, results);
}

function whoWon(player, computer){
    let isOdd = Math.abs((player-computer) % 2);
    if (isOdd === 1) {
        return Math.max(player,computer);
    } else {
        if (player === computer) {
            return -1;
        } else {
            return Math.min(player,computer);
        }
    }    
}

function printResults(playerIndex, results){
    if(results === -1){
        winStreak = 0;
        document.getElementById("who-won").innerHTML = "Draw!";
        document.getElementById("win-streak").innerHTML = winStreak;
    }else if(results === playerIndex){
        winStreak++;
        playerWins++;
        document.getElementById("who-won").innerHTML = "You Won!";
        document.getElementById("win-streak").innerHTML = winStreak;
        document.getElementById("player-wins").innerHTML = playerWins;
    }else{
        winStreak = 0;
        document.getElementById("who-won").innerHTML = "You Lost!";
        document.getElementById("win-streak").innerHTML = winStreak;
    }
}