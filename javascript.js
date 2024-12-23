function getComputerChoice() {
    let result = Math.floor(Math.random() * 3 + 1);
    if (result === 1) {
        result = "rock";
    } else if (result === 2) {
        result = "paper";
    } else {
        result = "scissors";
    }
    return result;
}

function getHumanChoice() {
    let userchoice = prompt("Rock, paper, or scissors?");
    return userchoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let humanWin = `You win! ${humanChoice} beats ${computerChoice}`;
    let computerWin = `You lose! ${computerChoice} beats ${humanChoice}`;

    if (humanChoice === computerChoice) {
        console.log("Draw");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        return "human";
    } else {
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        if (result === "human") {
            humanScore++;
            console.log(`Round ${i + 1}: You win! ${humanSelection} beats ${computerSelection}`);
        } else if (result === "computer") {
            computerScore++;
            console.log(`Round ${i + 1}: You lose! ${computerSelection} beats ${humanSelection}`);
        } else {
            console.log(`Round ${i + 1}: It's a draw!`);
        }
    }

    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Better luck next time! The computer wins!");
    } else {
        console.log("It's a tie overall!");
    }
}