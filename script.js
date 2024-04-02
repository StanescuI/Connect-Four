let playerTurn = 1;
let scoreBoard = [];
let result = document.getElementById("result");
let totalMoves = 0;
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
                result.innerText = "Player 2 turn"
                ++totalMoves;
                checkWinner();
                playerTurn = 2;
            } else {
                buttonColor.style.backgroundColor = "blue";
                result.innerText = "Player 1 turn"
                ++totalMoves;
                checkWinner();
                playerTurn = 1;
            }
            break;
        }
    }
}

function checkWinner() {
    for (let i = 0; i < 36;i += 7) {
        for (let j = 0; j < 4; ++j) {
            if (scoreBoard[j + i] !== 0 && scoreBoard[j + i] === scoreBoard[j + i + 1] &&
            scoreBoard[j + i] === scoreBoard[j + i + 2] && scoreBoard[j + i] === scoreBoard[j + i + 3]) {
                result.innerText = `Player ${playerTurn} won`;
                gameOver();
            }
        }
    }
    for (let i = 0; i < 22; i += 7) {
        for (let j = 0; j < 8; ++j) {
            if (scoreBoard[j + i] !== 0 && scoreBoard[j + i] === scoreBoard[j + i + 7] &&
            scoreBoard[j + i] === scoreBoard[j + i + 14] && scoreBoard[j + i] === scoreBoard[j + i + 21]) {
                result.innerText = `Player ${playerTurn} won`;
                gameOver();
            }
        }
    }
    for (let i = 0; i < 27;i += 7) {
        for (let j = 0; j < 4; ++j) {
            if (scoreBoard[j + i] !== 0 && scoreBoard[j + i] === scoreBoard[j + i + 8] &&
            scoreBoard[j + i] === scoreBoard[j + i + 16] && scoreBoard[j + i] === scoreBoard[j + i + 24]) {
                result.innerText = `Player ${playerTurn} won`;
                gameOver();
            }
        }
    }
    for (let i = 0; i < 27;i += 7) {
        for (let j = 0; j < 8; ++j) {
            if (scoreBoard[j + i] !== 0 && scoreBoard[j + i] === scoreBoard[j + i + 6] &&
            scoreBoard[j + i] === scoreBoard[j + i + 12] && scoreBoard[j + i] === scoreBoard[j + i + 18]) {
                result.innerText = `Player ${playerTurn} won`;
                gameOver();
            }
        }
    }
    if (totalMoves === 42) {
        result.innerText = "The game ended in a tie !"
        gameOver();
    }
}

function gameOver() {
    for (let i = 0; i < 42; ++i) {
        scoreBoard[i] = 3;
    }
}