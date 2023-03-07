console.log('|||||||||||||||||||||||||||')
console.log('|||||||||||||||||||||||||||')
console.log('|||||||||||||||||||||||||||')

let usernum;
let playerScore = 0;
let computerScore = 0;
while (playerScore !== 5 && computerScore !== 5) {
    usernum = prompt('Choose your weapon: (Rock-Paper-Scissor)')
    while (usernum.toLowerCase() !== 'rock' && usernum.toLowerCase() !== 'paper' && usernum.toLowerCase() !== 'scissor') {
        usernum = prompt('Invalid choice! Please enter: (Rock-Paper-Scissor)')
    }
    let firstChar = usernum.substring(0, 1);
    let theR = usernum.substring(1, usernum.length).toLowerCase();
    let playerSelection = firstChar.toUpperCase() + theR
    let computerSelection = getComputerChoice();
    console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}`);
    gameRound(playerSelection, computerSelection)
    console.log(`player: ${playerScore} || computer: ${computerScore}`)
    if (playerScore === 5) {
        console.log('You won! Congratulations!')
    } else if (computerScore === 5) {
        console.log('You lost! You better go home!')
    }

}
function gameRound(a, b) {
    if (a.toLowerCase() === b.toLowerCase()) {
        console.log("It's a draw");
    } else if (a.toLowerCase() === 'rock' && b.toLowerCase() === 'paper') {
        console.log("You Lose! Paper beats Rock");
        computerScore += 1
    } else if (a.toLowerCase() === 'rock' && b.toLowerCase() === 'scissor') {
        console.log("You Win! Rock beats Scissor");
        playerScore += 1
    } else if (a.toLowerCase() === 'paper' && b.toLowerCase() === 'rock') {
        console.log("You Win! Paper beats Rock");
        playerScore += 1
    } else if (a.toLowerCase() === 'paper' && b.toLowerCase() === 'scissor') {
        console.log("You Lose! Scissor beats Paper");
        computerScore += 1
    } else if (a.toLowerCase() === 'scissor' && b.toLowerCase() === 'rock') {
        console.log("You Lose! Rock beats Scissor");
        computerScore += 1
    } else if (a.toLowerCase() === 'scissor' && b.toLowerCase() === 'paper') {
        console.log("You Win! Scissor beats Paper");
        playerScore += 1
    }
}
function getComputerChoice() {
    let i = Math.floor(Math.random() * 3) + 1;
    if (i === 1) {
        i = 'Rock'
    } else if (i === 2) {
        i = 'Paper'
    } else if (i === 3) {
        i = 'Scissor'
    }
    return i
}