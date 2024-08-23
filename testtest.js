let nowPlaying = false;
let turnCount = 0;
let matchEnd = true;

document.getElementById("thetable").addEventListener("click", function(e) {
    
    let arrElement = 0;

    if (nowPlaying === true) {

        let cell = e.target.closest('td');
        let row = cell.parentElement;

        switch (row.rowIndex) {
            case 0:
                arrElement += cell.cellIndex;
                break;
            case 1:
                arrElement += cell.cellIndex + 3;
                break;
            case 2:
                arrElement += cell.cellIndex + 6;
                break;
        }

        if (cell.innerText !== "X" && cell.innerText !== "O") {
            cell.innerText = turnCount % 2 === 0 ? "O" : "X";
            gameboard.board[arrElement] = turnCount % 2 === 0 ? "O" : "X";
            console.log(gameboard.board[arrElement]);
        }

        if (turnCount >= 5) {
            nowPlaying = checkWin(gameboard.board, logic.zero, turnCount);
        }
        
        turnCount++;
        tempStop();
    }

    
    /*
    if (turnCount >= 5) {

        switch (arrElement) {
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
    }
    */
    
})

document.getElementById("startMatch").addEventListener("click", () => { // start match stuff
    nowPlaying = true;
    turnCount = 1;
    document.getElementById("startMatch").disabled = true;
})


////////////////////////////////////////////////////////

function checkWin() {
    letter = turnCount % 2 === 0 ? "O" : "X"; 

    if (gameboard.board[logic.zero[0][0]] === letter && 
        gameboard.board[logic.zero[0][1]] === letter && 
        gameboard.board[logic.zero[0][2]] === letter) {
            alert(letter === "X" ? "Player 1 Wins" : "Player 2 Wins");
            return false;    // return winner!
        }
    return true;   // the game continues
}


function tempStop() { // TEMPORARY
    if (turnCount >= 9 || nowPlaying === false) {
        gameboard.reset();
        turnCount = 0;
        document.getElementById("startMatch").disabled = false;
        nowPlaying = false;

        // make this prettier?
        document.getElementById("zero").innerText = "";
        document.getElementById("one").innerText = "";
        document.getElementById("two").innerText = "";
        document.getElementById("three").innerText = "";
        document.getElementById("four").innerText = "";
        document.getElementById("five").innerText = "";
        document.getElementById("six").innerText = "";
        document.getElementById("seven").innerText = "";
        document.getElementById("eight").innerText = "";
    }
}

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

const gameboard = (function() {
    let board = ["", "", "", "", "", "", "", "", ""];
    function reset() {
        board.forEach((data, index) => board[index] = "");
    } 
    return { board, reset };
})();