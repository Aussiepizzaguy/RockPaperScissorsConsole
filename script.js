function getComputerChoice () {
//gather computer choice between rock,paper, and scissors//
    //create an array holding value rock,paper, and scissors//
    let choices = ['rock', 'paper', 'scissors'];
    //pick one value that represents computer choice from that array//
    return  choices[Math.floor(Math.random() * choices.length)];
        //breaking this line of code down, Math.random picks a random number between 0 and 1. I then multiply this by the length of choices array (choices.length or 3) to get a random number between 0 and 3. all that math floor does is round the number down. This gives us the value of 0,1,2. these values are then applied to the choices array and returns the string that coresponds to the value (rock=0,paper=1,scissors=2).
}

// have a user imput the value of rock paper or scissors, convert to lowercase, and make sure that the value imputted is rock,paper or scissors, else, loop//
    let PlayerSelectionRaw;
    let PlayerSelection;
  // convert the user imput value to all lowercase//
 // make sure the value imputted is rock,paper, or scissors

 function playerSelection() {
    do {
        PlayerSelectionRaw = prompt ('Please enter Rock, Paper, or Scissors');
        console.log (PlayerSelectionRaw);
        PlayerSelection = PlayerSelectionRaw.toLowerCase();
        console.log (PlayerSelection);
    } while (PlayerSelection !=='rock' && PlayerSelection !=='paper' && PlayerSelection !=='scissors') ;
    return PlayerSelection;
}

 //create functions for scoreboard//
 let compscore=0;
 let playerscore=0;

// compare the computer choice to the user choice to see who wins the round//
//create function to play a single game//
//create a comparison function between computer and player//
// display the winner to the player//
//display scoreboard//
   function playRound (play,comp) {
    if (play === comp) {
        alert (`the computer chose ${comp} and you did too...it's a tie!`);
    } else if (
        (play === "rock" && comp === "scissors") ||
        (play === "scissors" && comp === "paper") ||
        (play === "paper" && comp === "rock")
    ) {
     alert (`the computer chose ${comp} and you chose ${play}.You won! Easy peasy lemon squeezy...`);
    playerscore = ++playerscore;
    } else if (
        (play === "scissors" && comp === "rock") ||
        (play === "rock" && comp === "paper") ||
        (play === "paper" && comp === "scissors")
    ) {
     alert (`the computer chose ${comp} and you chose ${play}.You Lost! Difficult difficult lemon difficult`);
     compscore= ++compscore;   
    }
   }
 
//This is where the round gets played...I just added the player selection and the computer choice into the play round function//
//playRound (playerSelection (), getComputerChoice () )//
   
  //create a function called game that plays the round until 5 rounds have been played//

  function game () {
   for (let i=0; i < 5; i++) {
    playRound (playerSelection (), getComputerChoice () )
    alert (`your score:${playerscore} computer score ${compscore}`)
    }
    if (compscore > playerscore) {
        alert("You lost this one!")
    } else {
        alert ("You win!!!")
    }
  }

  game ();
