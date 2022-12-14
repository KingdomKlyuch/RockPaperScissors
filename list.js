let winner = 0;
let humanScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = getComputerChoice();
result = playRound(playerSelection, computerSelection);

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
	button.addEventListener("click", () => {
        playerSelection = button.textContent.toUpperCase();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);

        game();
    });
});



  function getComputerChoice(){
let number = Math.floor(Math.random() * (3 + 1));

    if (number == 1){
    return 'Rock';}
    else if (number == 2){
    return 'Paper';}
    else {
    return 'Scissors';    
}};



function playRound(playerSelection, computerSelection) {
computerSelection = computerSelection.toUpperCase();


    if (computerSelection === 'SCISSORS' && playerSelection === "PAPER"){

	return playerSelection + "beats" + computerSelection + "gratz";

}
    else if (computerSelection === 'ROCK' && playerSelection === "PAPER"){

	return playerSelection + "beats" + computerSelection + "gratz";
	
}
    else if (computerSelection === 'PAPER' && playerSelection === "PAPER"){
	 return `It's a tie! Both players chose ${playerSelection}.`;
}
    else if (computerSelection === 'SCISSORS' && playerSelection === "ROCK"){
	return playerSelection + "beats" + computerSelection + "gratz";

}
    else if (computerSelection === 'ROCK' && playerSelection === "ROCK"){
	 return `It's a tie! Both players chose ${playerSelection}.`;
}
    else if (computerSelection === 'PAPER' && playerSelection === "ROCK"){
	return  computerSelection + "beats" + playerSelection + "ouch!";

}
    else if (computerSelection === 'PAPER' && playerSelection === "SCISSORS"){
	return computerSelection + "beats" + playerSelection + "ouch!";

}
    else if (computerSelection === 'SCISSORS' && playerSelection === "SCISSORS"){
	 return `It's a tie! Both players chose ${playerSelection}.`;
}
    else if (computerSelection === 'ROCK' && playerSelection === "SCISSORS"){
	return  computerSelection + "beats" + playerSelection + "ouch!";


}
return `Player chose ${playerSelection}, computer chose ${computerSelection}`;
}

alert(win_condition());

function game() {
    while (humanScore <= 5 && computerScore <= 5) {
      let computerSelection = getComputerChoice();
      computerSelection = computerSelection.toUpperCase();
      result = playRound(playerSelection, computerSelection);
  
      if (result.includes('Player')) {
        humanScore++;
      } else if (result.includes('Computer')) {
        computerScore++;
      }
    }
  }

alert(win_condition());

 function win_condition() {
 if (humanScore == 5) {
  return 'Player Wins!';
}
if (computerScore == 5) {
return 'Computer wins!';
}
}

game();






