var win = 0;
var loss = 0;
var tie = 0;
for(i = 0; i < 3; i++) {

// User choice
var userChoice = prompt("Rock, paper or scissors?");
if (! userChoice) {
    // User choice was undefined
    document.write("<p>Player 1, No Answer! Refresh this screen and try again.</p>");
} else {
    // Display user choice
    document.write("<p>Player 1:" + " " + userChoice + "</p>");
}
// Computer choice
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

// Display computer choice
document.write("<p>Computer:" + " " + computerChoice + "</p>");
// Compare user choice vs computer choice
var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        tie+=1;
        return "A tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            // rock wins
            win+=1;
            return "You win!";
        } else {
            // paper wins
            loss+=1;
            return "Aw Shux! Try again.";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            win+=1;
            return "You win!";
        } else {
            // scissors wins
            loss+=1;
            return "Aw shux! Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            loss+=1;
            return "Aw shux! Try again.";
        } else {
            // scissors wins
            win+=1;
            return "You win!";
        }
    }
};
// Run the compare function
var results = compare(userChoice,computerChoice);

// Display results
document.write("<br><hr><b>Results: </b>" + results);

}
document.write("<br/>Final Results: W-"+win+"; L-"+loss+"; T-"+tie+";");

//A different method

/*var playerChoice = prompt("Rock, Paper, Scissors Game");
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1===choice2){
        return "A tie!";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
    }
};
compare(userChoice,computerChoice);*/




//Or this method

    /*const getUserChoice = userInput =>{
      userInput = userInput.toLowerCase(); {    
      if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors') {
        return userInput;
      } else {
        console.log('not a valid choice');
      }
    };

    function getComputerChoice() {
      switch(Math.floor(Math.random()*3)) {
        case 0:
          return 'rock';
          break;
        case 1:
          return 'scissors';
          break;
        case 2:
          return 'paper';
          break;
        };
    }

    function determineWinner(userChoice,computerChoice) {
      if (userChoice === computerChoice) {
        return 'A tie!';
      } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'Computer wins!';
        } else {
          return 'You win!';
        }
      } else if (userChoice === 'paper'){
        if (compterChoice === 'scissors') {
          return 'Computer wins!';
        }else {
          return 'You win!';
        }
      } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'Computer wins!';
        } else {
          return 'You win!';
        }
      } else if (userChoice === 'bomb') {
        return 'You win!';
      }
    };

    function playGame() {
      var userChoice = getUserChoice('scissors');
      var computerChoice = getComputerChoice()
      console.log(`you chose ${userChoice}`);
      console.log(`computer chose ${computerChoice}`);
      console.log(determineWinner(userChoice,computerChoice));
    };*/

//yet another method for reference

    /*const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors') {
    return userInput;
  } else {
    console.log('not a valid choice');
  }
};

function getComputerChoice() {
  switch(Math.floor(Math.random()*3)) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'scissors';
      break;
    case 2:
      return 'paper';
      break;
    };
}

function determineWinner(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    return 'It's a tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  } else if (userChoice === 'paper'){
    if (compterChoice === 'scissors') {
      return 'Computer wins!';
    }else {
      return 'You win!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  } else if (userChoice === 'bomb') {
    return 'You win!';
  }
};

function playGame() {
  var userChoice = getUserChoice('scissors');
  var computerChoice = getComputerChoice()
  console.log(`you threw ${userChoice}`);
  console.log(`computer threw ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
};*/