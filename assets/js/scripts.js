const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
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
    whoWon(playerIndex, computerIndex);
}

function whoWon(player, computer){
    let isOdd = Math.abs((player-computer) % 2);
    console.log(isOdd); 
    if (isOdd === 1) {
        console.log(Math.max(player,computer));
    } else {
        if (player === computer) {
            console.log("draw");
        } else {
            console.log(Math.min(player,computer));
        }
    }    
}

