
const message = ["The rules are simple: Rock beats scissors, scissors beats paper, paper beats rock! Click any of the options to make your choice. GOODLUCK!"] 
const speed = 50
let textPosition = 0;

function typewriter() {
    document.querySelector("#message").innerHTML = message[0].substring(0, textPosition) + '<span>\u25AE</span>'
    if(textPosition++ != message[0].length)
      setTimeout(typewriter, speed)
  }
  
  window.addEventListener("load", typewriter);

//window.addEventListener("load", game(5));
function game(numOfRounds) {

    const images = document.querySelectorAll("div.leftdiv img"); //select all elements that have "div.leftdi img"
    console.log(images);
    do {
        
        images.forEach(img => img.addEventListener("click", function(e) {
        
            img.classList.add('playing'); //add class 'playing' to selected img element
            disp = document.querySelector('div.middle2 .entryp')
            console.log(disp);
            let pic = disp.appendChild(img);
            console.log(pic.className);
            function replace() {
                let rev = document.querySelector("div.leftdiv");
                rev.appendChild(img);
                img.classList.remove('playing');
            } 
            setTimeout(replace, 3000);
            
            
            //let translate = pic.className;
                    
                
            //the above selects the players display and adds the selected image to it
            let player = 0;
            let computer = 0;

            console.log(player);
            console.log(computer);

            let comp = getComputerChoice(array);
            console.log(comp);
            if (comp === "ROCK") {
                let pick = document.querySelector("div.rightdiv img.crock");
                pick.classList.add('playing')
                disc = document.querySelector('div.middle2 .entryc')
                disc.appendChild(pick);
                function replace() {
                    let rev = document.querySelector("div.rightdiv");
                    rev.appendChild(pick);
                    pick.classList.remove('playing');
                } 
                setTimeout(replace, 3000);
            } else 
            if (comp === "SCISSORS") {
                let pick = document.querySelector("div.rightdiv img.cscissors");
                pick.classList.add('playing')
                pick.classList.add('playing')
                disc = document.querySelector('div.middle2 .entryc')
                disc.appendChild(pick);
                function replace() {
                    let rev = document.querySelector("div.rightdiv");
                    rev.appendChild(pick);
                    pick.classList.remove('playing');
                } 
                setTimeout(replace, 3000);
            } else {
                let pick = document.querySelector("div.rightdiv img.cpaper");
                pick.classList.add('playing')
                pick.classList.add('playing')
                disc = document.querySelector('div.middle2 .entryc')
                disc.appendChild(pick);
                function replace() {
                    let rev = document.querySelector("div.rightdiv");
                    rev.appendChild(pick);
                    pick.classList.remove('playing');
                } 
                setTimeout(replace, 3000);
            } 
            //the above accepts the computer's choice, selects the computer display and adds the selected image to it
            
            function compareChoices(p, c) {

                let declare = document.querySelector('div.middle2 div#declare');
                declare.textContent = `Your choice = ${p}  ---VS---  Computer's Choice = ${c}`;
                if (p === c) {
                    declare.textContent = `Same choice, It's a tie, Replay!`;
                    let result = 0;
                    updateScore(result, 1);
                } else
                if ((p === "ROCK" && c === "SCISSORS")
                                            ||
                    (p === "SCISSORS" && c === "PAPER")
                                            ||
                    (p === "PAPER" && c === "ROCK")) {
                    declare.textContent = `You win:  ${p} beats ${c}`
                    let result = 1;
                    updateScore(result, 1);
                } else {
                    declare.textContent = `You lose:  ${c} beats ${p}`
                    let result = 2;
                    updateScore(result, 1);
                }   
            } 

            if (pic.className === "rock playing") {
                let playerChoice = "ROCK";
                console.log(playerChoice);
                compareChoices(playerChoice, comp);
            } else if (pic.className === "paper playing") {
                let playerChoice = "PAPER";
                console.log(playerChoice);
                compareChoices(playerChoice, comp);
            } else {
                let playerChoice = "SCISSORS";
                compareChoices(playerChoice, comp);
            } 

            function updateScore(result, points) {
                if (result === 1) { 
                    
                    player += points;
                    let update1 = document.querySelector('div.updates div#update1');
                    update1.textContent = `${player}`;
            
                    let column = document.querySelector('.updates').querySelector('.column');
                    column.textContent = ":";
            
                    let update2 = document.querySelector('div.updates div#update2');
                    update2.textContent = `${computer}`;
                    
                    
                } else
                if (result === 2) { 
                    
                    computer += points;
                    let update1 = document.querySelector('div.updates div#update1');
                    update1.textContent = `${player}`;
            
                    let column = document.querySelector('.updates').querySelector('.column');
                    column.textContent = ":";
            
                    let update2 = document.querySelector('div.updates div#update2');
                    update2.textContent = `${computer}`;
                    
                } else
                if (result === 0) { 
                    player += 0;
                    computer += 0;
                    let update1 = document.querySelector('div.updates div#update1');
                    update1.textContent = `${player}`;
            
                    let column = document.querySelector('.updates').querySelector('.column');
                    column.textContent = ":";
            
                    let update2 = document.querySelector('div.updates div#update2');
                    update2.textContent = `${computer}`;
                    
                }
                console.log(player);
                console.log(computer);
                console.log(result);
                
            }// takes result & updates score like so; alert(`Player = ${player}  VS  Computer = ${computer}`);
        console.log(e);   
        }));//iterate through the array of selected elements and run the said function
       
        let comp1 = getComputerChoice(array);
        gievMeResult(playerChoice, comp1);
        function gievMeResult(p, c) {

            if (p === c) {
                declare.textContent = `Same choice, It's a tie, Replay!`;
                let result = 0;
            } else
            if ((p === "ROCK" && c === "SCISSORS")
                                        ||
                (p === "SCISSORS" && c === "PAPER")
                                        ||
                (p === "PAPER" && c === "ROCK")) {
                let result = 1;
            } else {
                let result = 2;
            }   
        } 

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






// let cc = getComputerChoice(array);
// let pc = getPlayerChoice();

// function removeImages(e) {
//     if (img.paper.playing || img.rock.playing || img.scissors.playing) {
//     let olds = this.classList.remove('playing');
//         const card1 = document.querySelector('div.leftdiv');
//         card1.appendChild(olds);
//     } else {
//         let news = this.classList.remove('playing');
//         const card2 = document.querySelector('div.leftdiv');
//         card2.appendChild(news);
//     }
    
// }



function clearScoreBoard() {
    player = 0;
    computer = 0;
  }

  

window.addEventListener("load", game);
