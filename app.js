const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const reset = document.querySelector('#reset');
const playerScore = document.querySelector('#player');
const computerScore = document.querySelector('#computer');
const container = document.querySelector('#container');
const result = document.createElement('div');
let pScore = 0;
let cScore = 0;
let playerSelection;
let computerSelection;
rock.addEventListener('click', () => {
    playerSelection = 'rock'
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})
paper.addEventListener('click', () => {
    playerSelection = 'paper'
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})
scissor.addEventListener('click', () => {
    playerSelection = 'scissor'
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})
reset.addEventListener('click', () => {
    pScore = 0;
    cScore = 0;
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
    result.textContent = ""
    container.appendChild(result);
})

function playRound(a, b) {

    computerSelection = getComputerChoice();
    if (a === b) {
        result.textContent = `It's a draw. The computer chose ${b} as well.`;

    } else if (a === 'rock' && b === 'paper') {
        result.textContent = "You Lose! Paper beats Rock";
        cScore += 1;
    } else if (a === 'rock' && b === 'scissor') {
        result.textContent = "You Win! Rock beats Scissor";
        pScore += 1;
    } else if (a === 'paper' && b === 'rock') {
        result.textContent = "You Win! Paper beats Rock";
        pScore += 1;
    } else if (a === 'paper' && b === 'scissor') {
        result.textContent = "You Lose! Scissor beats Paper";
        cScore += 1;
    } else if (a === 'scissor' && b === 'rock') {
        result.textContent = "You Lose! Rock beats Scissor";
        cScore += 1;
    } else if (a === 'scissor' && b === 'paper') {
        result.textContent = "You Win! Scissor beats Paper";
        pScore += 1;
    }
    if (pScore === 5 || cScore === 5) {
        if (pScore === 5) {
            result.textContent = "You won the game! Congratulations!"
        } else if (cScore === 5) {
            result.textContent = "You lost! You better go home!"
        }
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    }
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    container.appendChild(result);
}
function getComputerChoice() {
    let i = Math.floor(Math.random() * 3) + 1;
    if (i === 1) {
        i = 'rock'
    } else if (i === 2) {
        i = 'paper'
    } else if (i === 3) {
        i = 'scissor'
    }
    return i
}

