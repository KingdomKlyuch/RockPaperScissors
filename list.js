
const buttons = document.querySelectorAll('.button');
let winner = 0;
let humanScore = 0;
let computerScore = 0;




// game();

// function game() {
//   while (humanScore <= 5 && computerScore <= 5) {
//     let playerSelection = prompt("Rock, Paper, or Scissors?");
//     let computerSelection = getComputerChoice();
//     playerSelection = playerSelection.toUpperCase();
//     computerSelection = computerSelection.toUpperCase();
//     alert(playRound(playerSelection, computerSelection));
//   }
//   alert(win_condition());
// }
function getComputerChoice() 
    let number = Math.floor(Math.random() * (3 + 1));

  if (number == 1){
    return 'Rock';}
  else if (number == 2){
    return 'Paper';}
  else {
  return 'Scissors';    
};

function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toUpperCase();
computerSelection = computerSelection.toUpperCase();


if (computerSelection === 'SCISSORS' && playerSelection === "PAPER"){
	computerScore +=1;
	return playerSelection + "beats" + computerSelection + "gratz";

}
else if (computerSelection === 'ROCK' && playerSelection === "PAPER"){
	humanScore+=1;
	return playerSelection + "beats" + computerSelection + "gratz";
	
}
else if (computerSelection === 'PAPER' && playerSelection === "PAPER"){
	return "it's a draw";
}
else if (computerSelection === 'SCISSORS' && playerSelection === "ROCK"){
	humanScore +=1;
	return playerSelection + "beats" + computerSelection + "gratz";

}
else if (computerSelection === 'ROCK' && playerSelection === "ROCK"){
	return "it's a draw";
}
else if (computerSelection === 'PAPER' && playerSelection === "ROCK"){
	computerScore +=1;
	return  computerSelection + "beats" + playerSelection + "ouch!";

}
else if (computerSelection === 'PAPER' && playerSelection === "SCISSORS"){
	humanScore +=1;
	return computerSelection + "beats" + playerSelection + "ouch!";

}
else if (computerSelection === 'SCISSORS' && playerSelection === "SCISSORS"){
	return "it's a draw";
}
else if (computerSelection === 'ROCK' && playerSelection === "SCISSORS"){
	computerScore +=1;
	return  computerSelection + "beats" + playerSelection + "ouch!";

}}

// function win_condition() {
//   if (humanScore == 5) {
//     return 'Player Wins!';
//   }
//   if (computerScore == 5) {
//     return 'Computer wins!';
//   }
// }


buttons.forEach(button => button.addEventListener("click", playRound)
);


