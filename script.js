// Game variables
const ROCK = 1
const PAPER = 2
const SCISSORS = 3
const TIE = 0
const WIN = 1
const LOSE = 2

// Get computer choice
function getComputerChoice() {
    // Get random number from 1 to 3
    return Math.floor(Math.random() * 3) + 1;
}

// Get human choice
function getPlayerChoice() {
    return ROCK
}

// Play
function playRound(playerSelection, computerSelection) {

    switch (playerSelection) {
        case ROCK:
            if (computerSelection === ROCK) {
                console.log("It's a tie!")
                return TIE
            }
            else if (computerSelection == PAPER) {
                console.log("You lose! Paper beats Rock.")
                return LOSE
            }
            else if (computerSelection == SCISSORS) {
                console.log("You win! Rock beats scissors.")
                return WIN
            }
            break
        case PAPER:
            if (computerSelection === PAPER) {
                console.log("It's a tie!")
                return TIE
            }
            else if (computerSelection == ROCK) {
                console.log("You win! Paper beats Rock.")
                return WIN
            }
            else if (computerSelection == SCISSORS) {
                console.log("You lose! Scissors beats paper.")
                return LOSE
            }
            break
        case SCISSORS:
            if (computerSelection === SCISSORS) {
                console.log("It's a tie!")
                return TIE
            }
            else if (computerSelection == PAPER) {
                console.log("You win! Scissors beats paper.")
                return WIN
            }
            else if (computerSelection == ROCK) {
                console.log("You lose! Rock beats scissors.")
                return LOSE
            }
            break
        default:
            return "Invalid match"
    }

}

// Game function
function game() {

    // Variables to store scores
    let playerScore = 0
    let computerScore = 0

    // Play 5 times
    for (let i = 0; i < 5; i++) {
        // Get computer and player choices
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        // Play round and update scores
        const result = playRound(playerSelection, computerSelection)
        if (result === WIN) {
            playerScore++
        }
        else if (result === LOSE) {
            computerScore++
        }
        else {
            playerScore++
            computerScore++
        }
    }

    console.log(`Computer score: ${computerScore} x Player score: ${playerScore}`)

}

game()