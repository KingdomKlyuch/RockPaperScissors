let winner = 0;
let humanScore = 0;
let computerScore = 0;
let playerSelection = '';
let result = playRound(playerSelection, computerSelection);

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
	button.addEventListener("click", () => {
        let playerSelection = button.textContent.toUpperCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
    });
});



  function getComputerChoice() {
let number = Math.floor(Math.random() * (3 + 1));{

    if (number == 1){
    return 'Rock';}
    else if (number == 2){
    return 'Paper';}
    else {
    return 'Scissors';    
}}};



function playRound(playerSelection, computerSelection) {
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


}
return `Player chose ${playerSelection}, computer chose ${computerSelection}`;
}

game();

    function game() {
(playRound(playerSelection, computerSelection));
while (humanScore <= 5 && computerScore <= 5) {
playerSelection = '';
let computerSelection = getComputerChoice();
computerSelection = computerSelection.toUpperCase();
result = playRound(playerSelection, computerSelection);
alert

if (result.includes('Player')) {
    humanScore++;
  } else if (result.includes('Computer')) {
    computerScore++;
  }
}

};

alert(win_condition());

 function win_condition() {
 if (humanScore == 5) {
  return 'Player Wins!';
}
if (computerScore == 5) {
return 'Computer wins!';
}
}}







