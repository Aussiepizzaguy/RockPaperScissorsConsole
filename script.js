//gather computer choice between rock,paper, and scissors//
    //create an array holding value rock,paper, and scissors//
        let choices = ['rock', 'paper', 'scissors'];
    //pick one value that represents computer choice from that array//
        let ComputerSelection = choices[Math.floor(Math.random() * choices.length)];
        console.log (ComputerSelection)
        //breaking this line of code down, Math.random picks a random number between 0 and 1. I then multiply this by the length of choices array (choices.length or 3) to get a random number between 0 and 3. all that math floor does is round the number down. This gives us the value of 0,1,2. these values are then applied to the choices array and returns the string that coresponds to the value (rock=0,paper=1,scissors=2).

// have a user imput the value of rock paper or scissors, convert to lowercase, and make sure that the value imputted is rock,paper or scissors, else, loop//
    let PlayerSelectionRaw;
    let PlayerSelection;
  // convert the user imput value to all lowercase//
 // make sure the value imputted is rock,paper, or scissors

    do {
        PlayerSelectionRaw = prompt ('Please enter Rock, Paper, or Scissors');
        console.log (PlayerSelectionRaw);
        PlayerSelection = PlayerSelectionRaw.toLowerCase();
        console.log (PlayerSelection);
    } while (PlayerSelection !=='rock' && PlayerSelection !=='paper' && PlayerSelection !=='scissors') ;
    console.log (PlayerSelection);

// compare the computer choice to the user choice to see who wins the round//
// display the winner to the player//
