//initalise game variables
//let options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let options = [
    {
        "name":"Rock",
        "icon":"fa-hand-back-fist"
    },
    {
        "name":"Paper",
        "icon":"fa-hand"
    },
    {
        "name":"Scissors",
        "icon":"fa-hand-scissors"
    },
    {
        "name":"Lizard",
        "icon":"fa-hand-lizard"
    },
    {
        "name":"Spock",
        "icon":"fa-hand-spock"
    }
];
let winStreak = 0;
let playerWins = 0;
let computerWins = 0;

//create game buttons and event listeners
document.addEventListener("DOMContentLoaded", function() {
    //call generate buttons funtion to fill buttons with value from game array
    generateButtons(options);
    //create button event listeners
    buttonListeners();
  });

//reset game
document.getElementById("reset").addEventListener('click', function(event) {
    //set all variables to 0
    winStreak = 0;
    playerWins = 0;
    computerWins = 0;
    //push data to frontend
    document.getElementById("win-streak").innerHTML = winStreak;
    document.getElementById("player-wins").innerHTML = playerWins;
    document.getElementById("computer-wins").innerHTML = computerWins;

    //remove previous games choices from front end
    document.getElementById("who-won").innerHTML = '';
    document.getElementById("player-choice").innerHTML = '';
    document.getElementById("computer-choice").innerHTML = '';
    document.getElementById("result").innerHTML = '';
});

//add event listener for drop down
const selectElement = document.querySelector('#list');
selectElement.addEventListener('change', (event) => {
    //if first option is chosen generate buttons for Lizard Spock
   if(event.target.value == 1){
      options = [
        {
            "name":"Rock",
            "icon":"fa-hand-back-fist"
        },
        {
            "name":"Paper",
            "icon":"fa-hand"
        },
        {
            "name":"Scissors",
            "icon":"fa-hand-scissors"
        },
        {
            "name":"Lizard",
            "icon":"fa-hand-lizard"
        },
        {
            "name":"Spock",
            "icon":"fa-hand-spock"
        }
    ];
      document.getElementById("title").innerHTML = 'Rock, Paper, Scissors, Lizard, Spock';
      document.getElementById("buttons").classList.remove("alt");
      //change rules
      document.getElementById("game2").classList.remove("show");
      document.getElementById("game1").classList.add("show");
      generateButtons(options);
      buttonListeners();
  //else generate buttons for rock paper scissors 
  }else{
      options = [
        {
            "name":"Rock",
            "icon":"fa-hand-back-fist"
        },
        {
            "name":"Paper",
            "icon":"fa-hand"
        },
        {
            "name":"Scissors",
            "icon":"fa-hand-scissors"
        }
    ];
      document.getElementById("title").innerHTML = 'Rock Paper Scissors';
      document.getElementById("buttons").classList.add("alt");
      //change rules
      document.getElementById("game1").classList.remove("show");
      document.getElementById("game2").classList.add("show");
      generateButtons(options);
      buttonListeners();
  }
});

function buttonListeners(){
    //get all game buttons
    const buttons = document.querySelectorAll("#buttons .button");
    //loop through buttons and create event listener for click. Start game on click.
    for (const button of buttons) {
        button.addEventListener('click', function(event) {
            //start game on click
            startGame(button);
        });
    }
}
//funtion to generate the games buttons. Auto generates any ammount of buttons
function generateButtons(options) {
    //initalise empty variable
    let html = "";
    //loop through values in array
    options.forEach((option) => {
        //create button using value from current index in array
        html += `<button class="button">${option.name}<br><i class="fa-solid ${option.icon}"></i></button>`;
    });
    //fill button container with buttons
    document.getElementById('buttons').innerHTML = html;
}

//main game funtion
function startGame(clickedButton){
    //get index of array that the player has choosen 
    let playerIndex = options.map(e => e.name).indexOf(clickedButton.firstChild.nodeValue);
    //get computers index using random generator from 0 to array length
    let computerIndex = Math.floor(Math.random() * ((options.length - 1) - 0 + 1) + 0);
    //set the players visual indicator to their choice
    document.getElementById("player-choice").innerHTML = options[playerIndex].name;
    //show player the computers choice
    document.getElementById("computer-choice").innerHTML = options[computerIndex].name;
    //get the winner using whoWon function   
    let results = whoWon(playerIndex, computerIndex);
    //print the results of the game on screen
    printResults(playerIndex, computerIndex, results);
}

//function to calculate the winner using algorithm
function whoWon(player, computer){
    //calculate if the difference between the player and comp's choices is odd or not.
    let isOdd = Math.abs((player-computer) % 2);
    //if the difference is odd return the larger of the two numbers. 
    if (isOdd === 1) {
        return Math.max(player,computer);
    } else {
        //if the player and computer choose the same option return -1
        if (player === computer) {
            return -1;
        //if the difference is even return the smaller of the two numbers. 
        } else {
            return Math.min(player,computer);
        }
    }  
}

//function to print results of the game
function printResults(playerIndex, computerIndex, results){
    //if whoWon returned -1 it was a draw
    if(results === -1){
        //reset winStreak to 0
        winStreak = 0;
        //print the result on the screen and update the win streak
        document.getElementById("who-won").innerHTML = "Draw!";
        document.getElementById("result").innerHTML = '';
        document.getElementById("win-streak").innerHTML = winStreak;
    //if whoWon returned the same value the player choose
    }else if(results === playerIndex){
        //increment the win streak
        winStreak++;
        //increment the number of player wins 
        playerWins++;
        //print the result on the screen and update the win streak and player wins
        document.getElementById("who-won").innerHTML = "You Won!";
        //explain the win condition
        document.getElementById("result").innerHTML = `${options[playerIndex].name} beats ${options[computerIndex].name}`;
        //set colour to green on win
        document.getElementById("result").style.color = "green";
        document.getElementById("win-streak").innerHTML = winStreak;
        document.getElementById("player-wins").innerHTML = playerWins;
    //if whoWon did not return the same value as the player
    }else{
        //reset winStreak to 0
        winStreak = 0;
        //increment the number of computer wins 
        computerWins++;
        //print the result on the screen and update the win streak and computer wins
        document.getElementById("who-won").innerHTML = "You Lost!";
        //explain the loss condition
        document.getElementById("result").innerHTML = `${options[computerIndex].name} beats ${options[playerIndex].name}`;
        //set colour to red on loss
        document.getElementById("result").style.color = "red";
        document.getElementById("win-streak").innerHTML = winStreak;
        document.getElementById("computer-wins").innerHTML = computerWins;
    }
}
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("modelBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};