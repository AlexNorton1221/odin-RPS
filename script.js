
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

//let playerSelection = prompt("Rock, Paper, Scissors... Go! Make your selection: ")
let computerSelection = getComputerChoice();
let winningChoice;
let losingChoice;
let playerScore = 0;
let computerScore = 0;
let resultMessage = "Blank!"

function playRound(playerSelection, computerSelection){
    let computerChoice = getComputerChoice();
    console.log("Computer Choice = " + computerChoice);
    let playerChoice = prompt("Rock, Paper, Scissors...Go! Make your decision: ").toUpperCase();
    console.log("Player Choice = " + playerChoice);
    let result;

    //Tie
    if (playerChoice == computerChoice){
        resultMessage = "You Tied! "
        return("tie")
    } //Player win
    else if (playerChoice == "ROCK" && computerChoice == "SCISSORS" ||
             playerChoice == "SCISSORS" && computerChoice == "PAPER" ||
             playerChoice == "PAPER" && computerChoice == "ROCK") 
        {
            winningChoice = playerChoice;
            losingChoice = computerChoice;
            playerScore++;
            resultMessage = "You Win! ";
            result = "win";
        } //Computer win
    else if (computerChoice == "ROCK" && playerChoice == "SCISSORS" ||
             computerChoice == "SCISSORS" && playerChoice == "PAPER" ||
             computerChoice == "PAPER" && playerChoice == "ROCK")
        {
            winningChoice = computerChoice;
            losingChoice = playerChoice;
            computerScore++;
            resultMessage = "You Lose! ";
            result = "lose";
        }
}

function game(){
    let roundResult;
    for (i = 0; i < 5; i++){
        console.log("Round " + i);
        playRound();

        if (resultMessage == "You Tied! "){
            console.log(resultMessage);
            console.log("Player Score: " + playerScore);
            console.log("ComputerScore: " + computerScore);
        } else {
            console.log(resultMessage + winningChoice + " beats " + losingChoice)
            console.log("Player Score: " + playerScore);
            console.log("ComputerScore: " + computerScore);
        }
        
    }

    if (playerScore > computerScore){
        console.log("You won the game! You won " + playerScore + " round(s), while the computer won " + computerScore + " round(s)");
    } else if (playerScore < computerScore){
        console.log("You lost the game! You won " + playerScore + " round(s), while the computer won "  + computerScore + " round(s)");
    } else if (playerScore == computerScore){
        console.log("You tied the computer!");
    }
}

game();