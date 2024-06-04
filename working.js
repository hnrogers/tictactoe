

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
    //const reset = board.forEach((data, index) => board[index] = "");
    return { board };
})();


function match(player1, player2, gameboard) {
    let matchEnd = false;
    let turnCounter = 1;
    let playerSelection = "";

    const possibleMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    while (matchEnd === false) {
        console.log(turnCounter);
        playerSelection = getInput(possibleMoves);
        possibleMoves[playerSelection] = "";
        console.log("/n");
        turnCounter++;

        if (turnCounter >= 4) {
            matchEnd = true;
        }
        




        /*
        if (possibleMoves.includes(playerSelection)) {      // step 2
            gameboard[playerSelection] = turn % 2 != 0 ? "X" : "O";     // step 3
            possibleMoves[playerSelection] = "";


            turnCounter++;

            if (turnCounter >= 6) {
                matchEnd = true;
            }
        }
        
        else {
            continue;
        }
        */

        /*
        1 - get playerSelection
        2 - check if playerSelection is available in possibleMoves
        3 - set gameboard[playerSelection] = X or O depending on the turn
        4 - IF turn >= 5, check win, matchEnd = checkWin();
        5 - IF there's no win, increment turnCounter
        */

    }
}

function getInput(possibleMoves) {
    console.log("Available moves:")
    console.log(possibleMoves);
    const prompt = require('prompt-sync')();
    let ps = prompt("Select a space");
    return ps;
}

match("a", "b", gameboard.board);