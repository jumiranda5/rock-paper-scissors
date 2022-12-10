// Game constants
const ROCK = 1
const PAPER = 2
const SCISSORS = 3
const TIE = 0
const WIN = 1
const LOSE = 2


// Variables to store the scores
let playerScore = 0
let computerScore = 0


// Computer choice => get random number from 1 to 3
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}


// Buttons
const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');
const btnClear = document.querySelector('#clear');

btnRock.addEventListener('click', () => playRound(ROCK));

btnPaper.addEventListener('click', () => playRound(PAPER));

btnScissors.addEventListener('click', () => playRound(SCISSORS));

btnClear.addEventListener('click', () => clear() );


// Rounds => compare user and computer choices and update scores and DOM
function playRound(playerSelection) {

    const computerSelection = getComputerChoice()

    let result;

    switch (playerSelection) {
        case ROCK:
            if (computerSelection === ROCK) result = TIE
            else if (computerSelection == PAPER) result = LOSE
            else if (computerSelection == SCISSORS) result = WIN
            break
        case PAPER:
            if (computerSelection === PAPER) result = TIE
            else if (computerSelection == ROCK) result = WIN
            else if (computerSelection == SCISSORS) result = LOSE
            break
        case SCISSORS:
            if (computerSelection === SCISSORS) result = TIE
            else if (computerSelection == PAPER) result = WIN
            else if (computerSelection == ROCK) result = LOSE
            break
        default:
            console.log("Invalid match")
    }

    updateScores(result, playerSelection, computerSelection)
    showEmojis(playerSelection, computerSelection)

}


// Update scores and add DOM partial result text
function updateScores(result, playerSelection, computerSelection) {
    
    const partialResult = document.querySelector("#partial-result")
    const score = document.querySelector("#score")
    const playerText = getChoiceText(playerSelection)
    const computerText = getChoiceText(computerSelection)

    if (result === WIN) {
        playerScore++
        partialResult.textContent = `You win! ${playerText} beats ${computerText.toLowerCase()}.`
    }
    else if (result === LOSE) {
        computerScore++
        partialResult.textContent = `You lose! ${computerText} beats ${playerText.toLowerCase()}.`
    }
    else {
        partialResult.textContent = "It's a tie!"
    }

    score.textContent = `${playerScore} x ${computerScore}`

    // End game if first player reaches 5 points
    if (playerScore === 5 || computerScore === 5) {
        showFinalResult()
    }

}


// Convert choice int to text
function getChoiceText(choice) {
    if (choice === ROCK) return "Rock"
    else if (choice === PAPER) return "Paper"
    else if (choice === SCISSORS) return "Scissors"
}


// Show player and computer choices as emojis on results div
function showEmojis(playerSelection, computerSelection) {
    const human = document.querySelector("#human")
    const computer = document.querySelector("#computer")

    human.innerHTML = getEmoji(playerSelection)
    computer.innerHTML = getEmoji(computerSelection)
}


function getEmoji(choice) {
    if (choice === ROCK) return "&#9994;"
    else if (choice === PAPER) return "&#9995;"
    else if (choice === SCISSORS) return "&#9996;"
}


// Update DOM => show final result text, hide game buttons, show "clear" button
function showFinalResult() {

    const finalResultDiv = document.querySelector("#reset-div")
    const btnDiv = document.querySelector("#btn-div")
    const finalResult = document.querySelector("#final-result")

    btnDiv.classList.add('hidden');
    finalResultDiv.classList.remove('hidden');                                   

    if (playerScore > computerScore) {
        finalResult.textContent = "Congratulations! You won!"
    }
    else {
        finalResult.textContent = "Sorry, you lost..."
    }

}


function clear() {

    const finalResultDiv = document.querySelector("#reset-div")
    const btnDiv = document.querySelector("#btn-div")
    const finalResult = document.querySelector("#final-result")
    const human = document.querySelector("#human")
    const computer = document.querySelector("#computer")
    const partialResult = document.querySelector("#partial-result")
    const score = document.querySelector("#score")
    playerScore = 0
    computerScore = 0

    btnDiv.classList.remove("hidden")
    finalResultDiv.classList.add("hidden")
    finalResult.textContent = ""
    human.innerHTML = ""
    computer.innerHTML = ""
    partialResult.textContent = ""
    score.textContent = `${playerScore} x ${computerScore}`

}