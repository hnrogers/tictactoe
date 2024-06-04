

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


function match(player1, player2, gameboard) {
    let matchEnd = false;
    let turnCounter = 1;
    let playerSelection = "";

    const possibleMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    while (matchEnd === false) {
        
        playerSelection = Number(getInput(possibleMoves));

        if (checkAvailability(possibleMoves, playerSelection) === true) {
            gameboard.board[playerSelection] = turn % 2 != 0 ? "X" : "O";
            possibleMoves[playerSelection] = "";
        }

        else {
            continue;
        }
        
        if (turnCounter >= 5) {
            matchEnd = checkWin(gameboard.board);

            // logic for awarding player win/loss/draw
            // add logic for draw
        }

        turnCounter++;
    }

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

function checkWin(gb) {
    // return true;

    // return false;
}

match("a", "b", gameboard);