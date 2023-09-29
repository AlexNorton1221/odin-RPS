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
    const buttonBox = document.querySelector('.buttons');    
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
    

    computerChoice = getComputerChoice();
    playerSelectionBox.textContent = playerChoice;
    computerSelectionBox.textContent = computerChoice;
    playRound(playerChoice, computerChoice);
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultBox.textContent = resultMessage;

    if(gameOver()){
        resultBox.textContent = "Game Over!"
            if (playerScore > computerScore){
                resultBox.textContent = "Game Over! You Win!";
            }
            else
                resultBox.textContent = "Game Over! You Lose!";
        
        buttonBox.removeChild(rockBtn);
        buttonBox.removeChild(paperBtn);
        buttonBox.removeChild(scissorsBtn);

        const restartBtn = document.createElement('button');
        restartBtn.classList.add('restart');
        restartBtn.textContent = "Restart Game";
        restartBtn.addEventListener('click', () => {
            location.reload();
        });

        buttonBox.appendChild(restartBtn);



        console.log("GAME OVER!");
        return;
    }
};
// }