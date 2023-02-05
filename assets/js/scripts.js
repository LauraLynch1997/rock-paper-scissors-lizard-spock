document.addEventListener("DOMContentLoaded", function() {
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


  
