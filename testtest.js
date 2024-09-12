const logic = (function() { // win conditions
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

const gameboard = (function() { // gameboard + related properties / methods
    let board = ["", "", "", "", "", "", "", "", ""];
    let turnCount = 0;
    let nowPlaying = false;
    function reset() {
        board.forEach((data, index) => board[index] = "");
        turnCount = 0;
        document.getElementById("startMatch").disabled = false;
    } 
    return { board, reset, turnCount, nowPlaying };
})();

document.getElementById("thetable").addEventListener("click", function(e) { // take turns
    
    let arrElement = 0;

    if (gameboard.nowPlaying === true) {

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
            gameboard.turnCount++;
        }
    
        if (gameboard.turnCount - 1 >= 5) {

            switch (arrElement) {
                case 0:
                    gameboard.nowPlaying = checkWin(gameboard, logic.zero);
                    break;
                case 1:
                    gameboard.nowPlaying = checkWin(gameboard, logic.one);    
                    break;
                case 2:
                    gameboard.nowPlaying = checkWin(gameboard, logic.two);    
                    break;
                case 3:
                    gameboard.nowPlaying = checkWin(gameboard, logic.three);    
                    break;
                case 4:
                    gameboard.nowPlaying = checkWin(gameboard, logic.four);    
                    break;
                case 5:
                    gameboard.nowPlaying = checkWin(gameboard, logic.five);    
                    break;
                case 6:
                    gameboard.nowPlaying = checkWin(gameboard, logic.six);    
                    break;
                case 7:
                    gameboard.nowPlaying = checkWin(gameboard, logic.seven);    
                    break;
                case 8:
                    gameboard.nowPlaying = checkWin(gameboard, logic.eight);    
                    break;
            }
        }
    }
});

document.getElementById("startMatch").addEventListener("click", () => { // start match
    gameboard.nowPlaying = true;
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

function checkWin(gb, l) {
    letter = (gb.turnCount - 1) % 2 === 0 ? "O" : "X"; 

    for (let i = 0; i < l.length; i++) {
        if (gb.board[l[i][0]] === letter && 
            gb.board[l[i][1]] === letter && 
            gb.board[l[i][2]] === letter) {
                alert(letter === "X" ? "Player 1 Wins" : "Player 2 Wins");
                gb.reset();
                return false;    // return winner!
        }
    }

    if (gb.turnCount >= 10) {     // draw situation after checking win
        alert("Draw :/");
        gb.reset();
        return false;
    }

    return true;   // the game continues
};