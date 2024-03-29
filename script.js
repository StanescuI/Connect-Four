let playerTurn = 1;
let scoreBoard = [];
for (let i = 0; i < 42; ++i) {
    scoreBoard[i] = 0;
}

function markToken(columnIndex) {
    for (let i = 5; i >= 0; --i) {
        if (scoreBoard[columnIndex - 1 + 7 * i] === 0) {
            scoreBoard[columnIndex - 1 + 7 * i] = playerTurn;
            let buttonColor = document.getElementById(`${columnIndex + 7 * i}`);
            if (playerTurn === 1) {
                buttonColor.style.backgroundColor = "red";
                playerTurn = 2;
            } else {
                buttonColor.style.backgroundColor = "blue";
                playerTurn = 1;
            }
            break;
        }
    }
}

