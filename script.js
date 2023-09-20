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

//let computerSelection = getComputerChoice();
let winningChoice;
let losingChoice;
let playerScore = 0;
let computerScore = 0;
let resultMessage = "Blank!"
let computerChoice;

function playRound(playerSelection, computerSelection){
    computerChoice = getComputerChoice();

    console.log("Player Choice = " + playerSelection);
    console.log("Computer Choice = " + computerChoice);
    
    let result;

    //Tie
    if (playerSelection == computerChoice){
        resultMessage = "You Tied! "
    } //Player win
    else if (playerSelection == "ROCK" && computerChoice == "SCISSORS" ||
        playerSelection == "SCISSORS" && computerChoice == "PAPER" ||
        playerSelection == "PAPER" && computerChoice == "ROCK") 
    {
        winningChoice = playerSelection;
        losingChoice = computerChoice;
        playerScore++;
        resultMessage = "You Win! ";
        result = "win";
    } //Computer win
    else if (computerChoice == "ROCK" && playerSelection == "SCISSORS" ||
             computerChoice == "SCISSORS" && playerSelection == "PAPER" ||
             computerChoice == "PAPER" && playerSelection == "ROCK")
    {
        winningChoice = computerChoice;
        losingChoice = playerSelection;
        computerScore++;
        resultMessage = "You Lose! ";
        result = "lose";
    }
}
    
window.onload=function(){
    const outputBox = document.querySelector('.output');
    const selectionsBox = document.querySelector('.selections');
    const playerSelectionBox = document.querySelector('.playerSelection');
    const computerSelectionBox = document.querySelector('.computerSelection');
    const resultBox = document.querySelector('.results');

    
    const rockBtn = document.querySelector('.rock');
    rockBtn.addEventListener('click', () => {
        playRound("ROCK");
        playerSelectionBox.textContent = "Rock";
        computerSelectionBox.textContent = computerChoice;
        resultBox.textContent = resultMessage;
    });

    const paperBtn = document.querySelector('.paper');
    paperBtn.addEventListener('click', ()=>{
        playRound("PAPER");
        playerSelectionBox.textContent = "Paper";
        computerSelectionBox.textContent = computerChoice;
        resultBox.textContent = resultMessage;
    });

    const scissorsBtn = document.querySelector('.scissors');
    scissorsBtn.addEventListener('click', () => {
        playRound("SCISSORS");
        playerSelectionBox.textContent = "Scissors";
        computerSelectionBox.textcontent = computerChoice;
        resultBox.textContent = resultMessage;
    });

}


// function game(){
//     let roundResult;
//     for (i = 0; i < 5; i++){
//         console.log("Round " + i);
//         playRound();

//         if (resultMessage == "You Tied! "){
//             console.log(resultMessage);
//             console.log("Player Score: " + playerScore);
//             console.log("ComputerScore: " + computerScore);
//         } else {
//             console.log(resultMessage + winningChoice + " beats " + losingChoice)
//             console.log("Player Score: " + playerScore);
//             console.log("ComputerScore: " + computerScore);
//         }
        
//     }

//     if (playerScore > computerScore){
//         console.log("You won the game! You won " + playerScore + " round(s), while the computer won " + computerScore + " round(s)");
//     } else if (playerScore < computerScore){
//         console.log("You lost the game! You won " + playerScore + " round(s), while the computer won "  + computerScore + " round(s)");
//     } else if (playerScore == computerScore){
//         console.log("You tied the computer!");
//     }
// }


//game();