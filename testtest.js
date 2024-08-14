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
            turnCount++;
        }
    }
    tempStop();
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

function tempStop() { // TEMPORARY
    if (turnCount > 9) {
        gameboard.reset();
        turnCount = 0;
        document.getElementById("startMatch").disabled = false;
        document.getElementsById("zero").innerText = "";

        
        /*
        document.getElementsById("zero").innerText = "";
        document.getElementsById("one").innerText = "";
        document.getElementsById("two").innerText = "";
        document.getElementsById("three").innerText = "";
        document.getElementsById("four").innerText = "";
        document.getElementsById("five").innerText = "";
        document.getElementsById("six").innerText = "";
        document.getElementsById("seven").innerText = "";
        document.getElementsById("eight").innerText = "";
        */
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