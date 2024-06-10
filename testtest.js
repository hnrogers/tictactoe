document.getElementById("thetable").addEventListener("click", function(e) {
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

    cell.innerText = "X";
    alert(arrElement);
})