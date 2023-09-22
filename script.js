let playerScore = 0;
let computerScore = 0;
let resultMessage = "Blank!"
let computerChoice;

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

function playRound(playerSelection, computerSelection){
    console.log("Player Choice = " + playerSelection);
    console.log("Computer Choice = " + computerChoice);
    
    let result;

    //Tie
    if (playerSelection == computerChoice){
        resultMessage = "You Tied!"
    } 
    //Player win
    else if (playerSelection == "ROCK" && computerChoice == "SCISSORS" ||
        playerSelection == "SCISSORS" && computerChoice == "PAPER" ||
        playerSelection == "PAPER" && computerChoice == "ROCK") 
    {
        playerScore++;
        resultMessage = "You Win!";
    } 
    //Computer win
    else if (computerChoice == "ROCK" && playerSelection == "SCISSORS" ||
             computerChoice == "SCISSORS" && playerSelection == "PAPER" ||
             computerChoice == "PAPER" && playerSelection == "ROCK")
    {
        computerScore++;
        resultMessage = "You Lose!";
    }
}

function gameOver() {
    if (playerScore == 5 || computerScore === 5){
        return true;
    }
    else
        return false;
}

// window.onload=function(){
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const playerSelectionBox = document.querySelector('.playerSelection');
    const computerSelectionBox = document.querySelector('.computerSelection');
    const resultBox = document.querySelector('.results');
    const playerScoreDisplay = document.querySelector('.playerScore');
    const computerScoreDisplay = document.querySelector('.computerScore');

    rockBtn.addEventListener('click', () => handleClick("ROCK"));
    paperBtn.addEventListener('click', ()=> handleClick("PAPER"));
    scissorsBtn.addEventListener('click', () => handleClick("SCISSORS"));

function handleClick(playerChoice){
    if(gameOver()){
        resultBox.textContent = "Game Over!"
        
        //disable choice buttons
        //create restart button

        console.log("GAME OVER!");
        return;
    }

    computerChoice = getComputerChoice();
    playerSelectionBox.textContent = playerChoice;
    computerSelectionBox.textContent = computerChoice;
    playRound(playerChoice, computerChoice);
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultBox.textContent = resultMessage;
    console.log("PS = " + playerScore);
    console.log("CS = " + computerScore);
};
// }