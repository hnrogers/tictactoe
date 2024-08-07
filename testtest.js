let nowPlaying = false;
let turnCount = 0;

document.getElementById("thetable").addEventListener("click", function(e) {
    
    if (nowPlaying === true) {

        let cell = e.target.closest('td');
        let row = cell.parentElement;
        let arrElement = "";

        switch (row.rowIndex) {
            case 0:
                arrElement = cell.cellIndex;
                break;
            case 1:
                arrElement = cell.cellIndex + 3;
                break;
            case 2:
                arrElement = cell.cellIndex + 6;
                break;
        }

        // cell.innerText = "X";
        if (cell.innerText !== "X" && cell.innerText !== "O") {
            cell.innerText = turnCount % 2 === 0 ? "O" : "X";
            turnCount++;
        }
    }
    
})

document.getElementById("startMatch").addEventListener("click", () => { // start match stuff
    nowPlaying = true;
    turnCount = 1;
    document.getElementById("startMatch").disabled = true;
    alert(nowPlaying);
})


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