document.addEventListener("DOMContentLoaded", function() {
    const options = ["Rock", "Paper", "Scissors", "Lizard", "Cock"];
    generateButtons(options);
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
