let playerTurn = 1;
let colors = ["blue", "red"];
const BOUNDRY = 3;
const ROWS = 6;
const COLUMNS = 7;
const CELLS = 42;
let scoreBoard = [[0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0], 
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0]];
let result = document.getElementById("result");
let totalMoves = 0;

function markToken(columnIndex) {
    for (let i = ROWS - 1; i >= 0; --i) {
        if (scoreBoard[i][columnIndex - 1] === 0) {
            scoreBoard[i][columnIndex - 1] = playerTurn + 1;
            let buttonColor = document.getElementById(`${columnIndex + COLUMNS * i}`);
                buttonColor.style.backgroundColor = `${colors[playerTurn]}`;
                result.innerText = `Player ${playerTurn + 1} turn`
                ++totalMoves;
                checkWinner();
                ++playerTurn;
                playerTurn = playerTurn % colors.length;
            break;
        }
    }
}

function checkWinner() {
    checkRows();
    checkColumns();
    checkMainDiag();
    checkSecDiag();
    if (totalMoves === CELLS) {
        result.innerText = "The game ended in a tie !"
        gameOver();
    }
}

function checkRows() {
    for (let i = 0; i < ROWS; ++i) {
        for (let j = 0; j < COLUMNS - BOUNDRY; ++j) {
            if (scoreBoard[i][j] !== 0 && scoreBoard[i][j] === scoreBoard[i][j + 1] &&
                scoreBoard[i][j] === scoreBoard[i][j + 2] && scoreBoard[i][j] === scoreBoard[i][j + 3]) {
                result.innerText = `Player ${playerTurn + 1} won`;
                gameOver();
            }
        }
    }
}

function checkColumns() {
    for (let i = 0; i < ROWS - BOUNDRY; ++i) {
        for (let j = 0; j < COLUMNS; ++j) {
            if (scoreBoard[i][j] !== 0 &&scoreBoard[i][j] === scoreBoard[i + 1][j] &&
                scoreBoard[i][j] === scoreBoard[i + 2][j] && scoreBoard[i][j] === scoreBoard[i + 3][j]) {
                result.innerText = `Player ${playerTurn + 1} won`;
                gameOver();
            }
        }
    }
}

function checkMainDiag() {
    for (let i = 0; i < ROWS - BOUNDRY; ++i) {
        for (let j = 0; j < COLUMNS - BOUNDRY; ++j) {
            if (scoreBoard[i][j] !== 0 && scoreBoard[i][j] === scoreBoard[i + 1][j + 1] &&
                scoreBoard[i][j] === scoreBoard[i + 2][j + 2] && scoreBoard[i][j] === scoreBoard[i + 3][j + 3]) {
                result.innerText = `Player ${playerTurn + 1} won`;
                gameOver();
            }
        }
    }
}

function checkSecDiag() {
    for (let i = BOUNDRY; i < ROWS; ++i) {
        for (let j = 0; j < COLUMNS - BOUNDRY; ++j) {
            if (scoreBoard[i][j] !== 0 && scoreBoard[i][j] === scoreBoard[i - 1][j + 1] &&
                scoreBoard[i][j] === scoreBoard[i - 2][j + 2] && scoreBoard[i][j] === scoreBoard[i - 3][j + 3]) {
                result.innerText = `Player ${playerTurn + 1} won`;
                gameOver();
            }
        }
    }
}

function gameOver() {
    for (let i = 0; i < ROWS; ++i) {
        for (let j = 0; j < COLUMNS; ++j) {
            scoreBoard[i][j] = null;
        }
    }
}