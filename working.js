

function createPlayer(name, password, pronouns) {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let scorecard = [wins, losses, ties];

    const gameWin = () => scorecard[0]++;
    const gameLoss = () => scorecard[1]++;
    const gameTie = () => scorecard[2]++;
    
    const totalWins = () => scorecard[0];
    const totalLosses = () => scorecard[1]; 
    const totalTies = () => scorecard[2]; 

    return { name, password, pronouns, 
            gameWin, gameLoss, gameTie, 
            totalWins, totalLosses, totalTies };
}

const gameboard = (function() {
    let board = ["", "", "", "", "", "", "", "", ""];
    function reset() {
        board.forEach((data, index) => board[index] = "");
    } 
    return { board, reset };
})();


const logic = (function() {
    const zero = [[0, 1, 2], [0, 4, 8], [0, 3, 6]];
    const one = [[0, 1, 2], [1, 4, 7]];
    const two = [[0, 1, 2], [2, 5, 8], [2, 4, 6]];
    const three = [[0, 3, 6], [3, 4, 5]];
    const four = [[0, 4, 8], [1, 4, 7], [2, 4, 6], [3, 4, 5]];
    const five = [[2, 5, 8], [3, 4, 5]];
    const six = [[6, 7, 8], [2, 4, 6], [0, 3, 6]];
    const seven = [[6, 7, 8], [1, 4, 7]];
    const eight = [[6, 7, 8], [0, 4, 8], [2, 5, 8]];
    return { zero, one, two, three, four, five, six, seven, eight };
})();



function match(player1, player2, gameboard, logic) {
    let matchEnd = false;
    let turnCounter = 1;
    let playerSelection = "";

    const possibleMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    while (matchEnd === false) {
        
        playerSelection = Number(getInput(possibleMoves));

        if (checkAvailability(possibleMoves, playerSelection) === true) {
            gameboard.board[playerSelection] = turnCounter % 2 != 0 ? "X" : "O";
            possibleMoves[playerSelection] = turnCounter % 2 != 0 ? "X" : "O";
        }

        else {
            continue;
        }
        
        /*if (turnCounter >= 5) {

            switch (playerSelection) {
                case 0:
                    matchEnd = checkWin(gameboard, logic.zero, turnCounter);
                    break;
                case 1:
                    matchEnd = checkWin(gameboard, logic.one, turnCounter);
                    break;
                case 2:
                    matchEnd = checkWin(gameboard, logic.two, turnCounter);
                    break;
                case 3:
                    matchEnd = checkWin(gameboard, logic.three, turnCounter);
                    break;
                case 4:
                    matchEnd = checkWin(gameboard, logic.four, turnCounter);
                    break;
                case 5:
                    matchEnd = checkWin(gameboard, logic.five, turnCounter);
                    break;
                case 6:
                    matchEnd = checkWin(gameboard, logic.six, turnCounter);
                    break;
                case 7:
                    matchEnd = checkWin(gameboard, logic.seven, turnCounter);
                    break;
                case 8:
                    matchEnd = checkWin(gameboard, logic.eight, turnCounter);
                    break;
            }
        }*/
        turnCounter++;

        if (turnCounter === 10 && matchEnd === false) {
            matchEnd = true;
            console.log("DRAW");
        }
    }
    // need to write function to award win/loss/draw based on turnCounter
    gameboard.reset();
}

function getInput(possibleMoves) {
    console.log("Available moves:")
    console.log(possibleMoves);
    const prompt = require('prompt-sync')();
    let ps = prompt("Select a space");
    return ps;
}

function checkAvailability(pm, ps) {
    if (pm[ps] !== "") {
        return true;
    }
    return false;
}

function checkWin(gb, l, tc) {
    letter = tc % 2 !== 0 ? "X" : "O"; 

    for (let i = 0; i < l.length; i++) {
        if (gb.board[l[i][0]] === letter && 
            gb.board[l[i][1]] === letter && 
            gb.board[l[i][2]] === letter) {
                console.log(letter === "X" ? "Player 1 Wins" : "Player 2 Wins");
                return true;    // return winner!
            }
    }
    return false;   // the game continues
}

function awarding(){
    // stuff
}

const sasha = createPlayer("sasha", "6969", "she/her");
const bruce = createPlayer("bruce", "6969", "he/him"); 


document.getElementById("createMatch").addEventListener("click", match(sasha, bruce, gameboard, logic));