

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
    
    const placeX = function(location) {
        board[location] = "X";
    }
    
    const placeO = function(location) {
        board[location] = "O";
    }

    const reset = board.forEach((data, index) => board[index] = "");

    return { placeX, placeO, reset};
})();

// create match factory function

function createMatch(player1, player2) {
    // game logic - make move, check space, check victory, award victory, accept players
}