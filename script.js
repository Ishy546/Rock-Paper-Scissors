function getComputerChoice() {
    let x = Math.random();
    if (x <= 1 / 3) {
        return "rock";
    } else if (x > 1 / 3 && x < 2 / 3) {
        return "scissors";
    } else {
        return "paper";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    }
    if (humanChoice === "rock") {
        return computerChoice === "paper" ? "lose" : "win";
    } else if (humanChoice === "scissors") {
        return computerChoice === "rock" ? "lose" : "win";
    } else if (humanChoice === "paper") {
        return computerChoice === "scissors" ? "lose" : "win";
    }
}
let compScore = 0;
let humanScore = 0;
function handleGameRound(humanSelection) {
    const txt = document.querySelector(".txt");
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    if (result === "win") {
        humanScore++;
        txt.textContent = `You win this round!`;
    } else if (result === "lose") {
        compScore++;
        txt.textContent = `You lose this round.`;
    } else {
        txt.textContent = `It's a tie!`;
    }
    txt.textContent += ` You chose: ${humanSelection}, Computer chose: ${computerSelection}.`;
    txt.textContent += ` Current Score - You: ${humanScore}, Computer: ${compScore}`;
    if (humanScore === 5) {
        txt.textContent = "Congratulations! You win the game!";
        return true;
    } else if (compScore === 5) {
        txt.textContent = "Sorry, you lost the game. Better luck next time!";
        return true;
    }
    return false;
}
function getHumanChoice(event) {
    const humanSelection = event.target.id;
    const gameEnded = handleGameRound(humanSelection);
    if (gameEnded) {
        compScore = 0;
        humanScore = 0;
    }
}
const buttons = document.querySelectorAll(".option");
buttons.forEach(button => {
    button.addEventListener("click", getHumanChoice);
});
const resetButton = document.querySelector(".Reset");
resetButton.addEventListener("click", function () {
    compScore = 0;
    humanScore = 0;
    const txt = document.querySelector(".txt");
    txt.textContent = `Current Score - You: ${humanScore}, Computer: ${compScore}`;
});