let nowPlaying = false;
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
            cell.innerText = gameboard.turnCount % 2 === 0 ? "O" : "X";
            gameboard.board[arrElement] = gameboard.turnCount % 2 === 0 ? "O" : "X";
            console.log(gameboard.board[arrElement]);
        }
    
        if (gameboard.turnCount >= 5) {

            switch (arrElement) {
                case 0:
                    nowPlaying = checkWin(gameboard, logic.zero, gameboard.turnCount);
                    break;
                case 1:
                    nowPlaying = checkWin(gameboard, logic.one, gameboard.turnCount);    
                    break;
                case 2:
                    nowPlaying = checkWin(gameboard, logic.two, gameboard.turnCount);    
                    break;
                case 3:
                    nowPlaying = checkWin(gameboard, logic.three, gameboard.turnCount);    
                    break;
                case 4:
                    nowPlaying = checkWin(gameboard, logic.four, gameboard.turnCount);    
                    break;
                case 5:
                    nowPlaying = checkWin(gameboard, logic.five, gameboard.turnCount);    
                    break;
                case 6:
                    nowPlaying = checkWin(gameboard, logic.six, gameboard.turnCount);    
                    break;
                case 7:
                    nowPlaying = checkWin(gameboard, logic.seven, gameboard.turnCount);    
                    break;
                case 8:
                    nowPlaying = checkWin(gameboard, logic.eight, gameboard.turnCount);    
                    break;
            }
        }
        tempStop();
        gameboard.turnCount++;
    }
});

document.getElementById("startMatch").addEventListener("click", () => { // start match stuff
    nowPlaying = true;
    gameboard.turnCount = 1;
    document.getElementById("startMatch").disabled = true;
    
    // make this prettier?
    document.getElementById("zero").innerText = " ";
    document.getElementById("one").innerText = " ";
    document.getElementById("two").innerText = " ";
    document.getElementById("three").innerText = " ";
    document.getElementById("four").innerText = " ";
    document.getElementById("five").innerText = " ";
    document.getElementById("six").innerText = " ";
    document.getElementById("seven").innerText = " ";
    document.getElementById("eight").innerText = " ";
});


////////////////////////////////////////////////////////

function checkWin(gb, l, tc) {
    letter = tc % 2 === 0 ? "O" : "X"; 

    for (let i = 0; i < l.length; i++) {

        if (gb.board[l[i][0]] === letter && 
            gb.board[l[i][1]] === letter && 
            gb.board[l[i][2]] === letter) {
                alert(letter === "X" ? "Player 1 Wins" : "Player 2 Wins");
                return false;    // return winner!
        }
    }
    return true;   // the game continues
}



function tempStop() { // TEMPORARY
    if (gameboard.turnCount >= 9 || nowPlaying === false) {
        gameboard.reset();
        gameboard.turnCount = 0;
        document.getElementById("startMatch").disabled = false;
        nowPlaying = false;
    }
}


// hold
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
    let turnCount = 0;
    function reset() {
        board.forEach((data, index) => board[index] = "");
    } 
    return { board, reset, turnCount };
})();