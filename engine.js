let player = 0;
let computer = 0;

function welcome() {
    alert("Welcome to the old-school game Rock-Paper-Scissors. The rules are simple: Rock beats scissors, scissors beats paper, paper beats rock.");
}

function game(numOfRounds) {
    welcome();

    do {
        let cc = getComputerChoice(array);
        let pc = getPlayerChoice();
        let result = compareChoices(cc, pc);
        updateScore(result, 1);

        if (result !== 0) {
            numOfRounds--;
        }

    } while (numOfRounds > 0);
    if (player > computer) {
        alert("FINAL SCORE")
        alert(`Player = ${player}  VS  Computer = ${computer}`);
        alert("Congratulations! YOU WIN");
    } 
    alert(`Player = ${player}  VS  Computer = ${computer}`);
    alert("SORRY! YOU LOSE");

    clearScoreBoard();
}

const array = ["Rock", "Paper", "Scissors"];

function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    let computerChoice = item.toUpperCase();
    return computerChoice;
}

function getPlayerChoice() {
    let pc = prompt("Choose EITHER 'rock, paper, or scissors.'");
    let playerChoice = pc.toUpperCase();
    if (playerChoice === "ROCK" || playerChoice === "SCISSORS" || playerChoice === "PAPER") {
        alert("Nice one");
        return playerChoice;
    } alert("INVALID! ensure your spelling is correct, Choose either rock, paper, or scissors.");
    getPlayerChoice();
}

function compareChoices(computerChoice, playerChoice) {
    alert(`Your choice = ${playerChoice}  ---VS---  Computer's Choice = ${computerChoice}`);
    if (playerChoice === computerChoice) {
        alert("Same choice, It's a tie, Replay!");
        let result = 0;
        return result;
    }
    if ((playerChoice === "ROCK" && computerChoice === "SCISSORS")
                                ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER")
                                ||
        (playerChoice === "PAPER" && computerChoice === "ROCK")) {
            alert("You win");
            let result = 1;
            return result;
        } alert("You lose");
        let result = 2;
        return result;   
} 

function updateScore(result, points) {
    if (result == 1) { 
        player += points;
        alert(`Player = ${player}  VS  Computer = ${computer}`);
    }
    if (result === 2) { 
        computer += points;
        alert(`Player = ${player}  VS  Computer = ${computer}`);
    }
    if (result === 0) { 
        player += 0;
        computer += 0;
        alert(`Player = ${player}  VS  Computer = ${computer}`);
    }
}

function clearScoreBoard() {
    player = 0;
    computer = 0;
  }



game(5);