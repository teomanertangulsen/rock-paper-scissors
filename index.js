let winningScore = 5;
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", () => {
    this.checkRoundWinner("rock", this.computerChoice());
});

paperBtn.addEventListener("click", () => {
    this.checkRoundWinner("paper", this.computerChoice());
});

scissorsBtn.addEventListener("click", () => {
    this.checkRoundWinner("scissors", this.computerChoice());
});

function checkRoundWinner(playerChoice, computerChoice) {
    if(computerChoice === "paper" && playerChoice === "paper") {
        alert("Equality!!!");
    } else if(computerChoice === "paper" && playerChoice === "rock") {
        alert("Computer win this round!!!");
        computerScore++;
    } else if(computerChoice === "paper" && playerChoice === "scissors") {
        alert("Player win this round!!!");
        playerScore++;
    } else if(computerChoice === "rock" && playerChoice === "paper") {
        alert("Player win this round!!!");
        playerScore++;
    } else if(computerChoice === "rock" && playerChoice === "rock") {
        alert("Equality!!!");
    } else if(computerChoice === "rock" && playerChoice === "scissors") {
        alert("Computer win this round!!!");
        computerScore++;
    } else if(computerChoice === "scissors" && playerChoice === "paper") {
        alert("Computer win this round!!!");
        computerScore++;
    } else if(computerChoice === "scissors" && playerChoice === "rock") {
        alert("Player win this round!!!");
        playerScore++;
    } else if(computerChoice === "scissors" && playerChoice === "scissors") {
        alert("Equality!!!");
    }
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    if(computerScore == 5 || playerScore == 5) {
        isGameOver = true;
        if(computerScore == 5) {
            document.getElementById("result").innerHTML = "Computer Won!!!";
        } else {
            document.getElementById("result").innerHTML = "Player Won!!!";
        }
    }
}

function computerChoice() {
    let possibleChoices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * (3 - 0));
    return possibleChoices[randomIndex];
}