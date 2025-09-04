let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let compChoice = ["rock", "paper", "scissors"] // let computer pick [rock, paper, scissors]
    let randomizeChoice = Math.floor(Math.random() * compChoice.length) + 1 // randomize rock paper and scissors

    if (randomizeChoice === 1) {
        return "rock";
    } if (randomizeChoice === 2) {
        return "paper";
    } if (randomizeChoice === 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter rock, paper or scissors")
    return humanChoice;
}

function playGame() {
    function playRound(humanChoice, compChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == 'rock' && compChoice == 'scissors') {
            console.log("You win! Rock beats Scissors")
            humanScore = humanScore + 1;
        }

        else if (humanChoice == 'rock' && compChoice == 'paper') {
            console.log("You lose! Paper beats Rock")
            computerScore++;
        }

        else if (humanChoice == 'rock' && compChoice == 'rock') {
            console.log("It's a draw!")
        }

        if (humanChoice == 'paper' && compChoice == 'scissors') {
            console.log("You lose! Scissors beats Paper")
            computerScore++;
        }

        else if (humanChoice == 'paper' && compChoice == 'rock') {
            console.log("You win! Paper beats Rock")
            humanScore++;
        }

        else if (humanChoice == 'paper' && compChoice == 'paper') {
            console.log("It's a draw!")
        }

        if (humanChoice == 'scissors' && compChoice == 'paper') {
            console.log("You win! Scissors beats paper")
            humanScore++;
        }

        else if (humanChoice == 'scissors' && compChoice == 'rock') {
            console.log("You lose! Rock beats Scissors")
            computerScore++;
        }

        else if (humanChoice == 'scissors' && compChoice == 'scissors') {
            console.log("It's a draw!")
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}

playGame();
console.log(' ');
console.log('You: ', humanScore);
console.log('Computer: ', computerScore);