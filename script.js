
function getComputerChoice(){
    var randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerChoice;

    if (randomNumber == 1){
        computerChoice = "ROCK";
    } else if (randomNumber == 2){
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }

    return computerChoice;
}

let playerSelection = prompt("Rock, Paper, Scissors... Go! Make your selection: ")
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    computerChoice = getComputerChoice();
    console.log("Computer Choice = " + computerChoice);
    playerChoice = playerSelection.toUpperCase();
    console.log("Player Choice = " + playerChoice);
    let winningChoice;
    let losingChoice;
    let result;
    

    if (playerChoice == computerChoice){
        return("You Tied!")
    }
    else if (playerChoice == "ROCK" && computerChoice == "SCISSORS" ||
             playerChoice == "SCISSORS" && computerChoice == "PAPER" ||
             playerChoice == "PAPER" && computerChoice == "ROCK") 
        {
            winningChoice = playerChoice;
            losingChoice = computerChoice;
            result = "win";
        }
    else if (computerChoice == "ROCK" && playerChoice == "SCISSORS" ||
             computerChoice == "SCISSORS" && playerChoice == "PAPER" ||
             computerChoice == "PAPER" && playerChoice == "ROCK")
        {
        winningChoice = computerChoice;
        losingChoice = playerChoice;
        result = "lose";
        }

    return("You " + result + "! " + winningChoice + " beats " + losingChoice)
}/*
function game(){
    for (i = 0; i < 5; i++){
        playRound();
    }

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
*/

console.log(playRound(playerSelection, computerSelection));
