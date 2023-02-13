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
    let human = 2;
    let computer = 5;
    let isOdd = Math.abs((human-computer) % 2);
    console.log(isOdd); 
    if (isOdd === 1) {
        console.log(Math.max(human,computer));
    } else {
        if (human === computer) {
            console.log("draw");
        } else {
            console.log(Math.min(human,computer));
        }
    }    
    
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

}

