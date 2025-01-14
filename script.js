function getHumanChoice(){
    let answer= prompt("Rock, Paper, or Scissors?");
    return answer.toLowerCase();
}
function getComputerChoice(){
    let x= Math.random();
    if (x<=(1/3)){
        return "rock"
    }else if(x>(1/3) && x<(2/3)){
        return "scissors";
    }else{
        return "paper";
    }
}
function playRound(humanChoice, computerChoice){
    if (humanChoice==computerChoice){
        return "lose";
    }
    if (humanChoice=="rock"){
        if (computerChoice=="paper"){
            return "lose";
        }else{
            return "win";
        }
    }else if (humanChoice=="scissors"){
        if (computerChoice=="rock"){
            return "lose";
        }else{
            return "win";
        }
    } else if (humanChoice=="paper"){
        if (computerChoice=="scissors"){
            return "lose";
        }else{
            return "win";
        }
    }
}
let compScore = 0;
let humanScore = 0;

while (compScore < 5 && humanScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    if (result === "win") {
        humanScore++;
        console.log(`You win this round!`);
    } else {
        compScore++;
        console.log(`You lose this round.`);
    }

    console.log(`You chose: ${humanSelection}, Computer chose: ${computerSelection}`);
    console.log(`Current Score - You: ${humanScore}, Computer: ${compScore}`);
}

if (humanScore === 5) {
    console.log("Congratulations! You win the game!");
} else {
    console.log("Sorry, you lost the game. Better luck next time!");
}