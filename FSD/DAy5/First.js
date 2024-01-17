const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let currentPlayer = 'X';

function displayBoard() {
    console.log('-------------');
    for (let i = 0; i < 3; i++) {
        process.stdout.write('| ');
        for (let j = 0; j < 3; j++) {
            process.stdout.write(board[i][j] + ' | ');
        }
        console.log('\n-------------');
    }
}

function playGame() {
    let gameWon = false;
    let moves = 0;

    rl.setPrompt(`Player ${currentPlayer}, enter your move (row and column): `);
    rl.prompt();

    rl.on('line', (input) => {
        const [row, col] = input.split(' ').map(Number);

        if (isValidMove(row, col)) {
            board[row][col] = currentPlayer;
            displayBoard();
            gameWon = checkWinner(row, col);
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            moves++;

            if (gameWon || moves === 9) {
                endGame(gameWon);
                rl.close();
            } else {
                rl.prompt();
            }
        } else {
            console.log('Invalid move. Try again.');
            rl.prompt();
        }
    });
}

function isValidMove(row, col) {
    return row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] === ' ';
}

function checkWinner(row, col) {
    return checkRow(row) || checkColumn(col) || checkDiagonals(row, col);
}

function checkRow(row) {
    return board[row][0] === currentPlayer && board[row][1] === currentPlayer && board[row][2] === currentPlayer;
}

function checkColumn(col) {
    return board[0][col] === currentPlayer && board[1][col] === currentPlayer && board[2][col] === currentPlayer;
}

function checkDiagonals(row, col) {
    return checkMainDiagonal() || checkAntiDiagonal();
}

function checkMainDiagonal() {
    return board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer;
}

function checkAntiDiagonal() {
    return board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer;
}

function endGame(gameWon) {
    if (gameWon) {
        console.log(`Player ${currentPlayer} wins!`);
    } else {
        console.log('It\'s a draw!');
    }
}

displayBoard();
playGame();
