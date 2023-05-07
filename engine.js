function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}

//console.log(getComputerChoice(array));

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    if (player === computer) {
        return "A tie! No winner"
    } else if (player === "ROCK" && computer === "SCISSORS") {
        return `You Win! ${playerSelection} beats ${computerSelection}`; 
    } else if (player === "ROCK" && computer === "PAPER") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (player === "SCISSORS" && computer ==="ROCK") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (player === "SCISSORS" && computer === "PAPER") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (player === "PAPER" && computer === "SCISSORS") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (player === "PAPER" && computer === "ROCK") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else return "iNVALID ENTRY! enter rock, paper or scissors";
}

//onst playerSelection = "rock";
//const array = ['rock', 'paper', 'scissors'];
//onst computerSelection = getComputerChoice(array);
//console.log(playRound(playerSelection, computerSelection));

function game() {
    const playerSelection = window.prompt("Enter any of the following 'Rock, Paper, scissors': ");
    const array = ['rock', 'paper', 'scissors'];
    const computerSelection = getComputerChoice(array);

    let i = 0;
    do {
        console.log(playRound(playerSelection, computerSelection))
        i++;
    } while (i < 5);
    
}
console.log(game());