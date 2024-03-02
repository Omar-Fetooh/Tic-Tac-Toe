function gameBoard() {
    const rows = 3, cols = 3;
    const board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    /*
     should be a 2d array ...
     - - -
     - - -
     - - -
     */
    let winner = 0;
    const play = () => {
        printBoard();
        currentPlayer = player1;
        while (winner === 0) {
            console.log(`it's player ${currentPlayer.name} turn , enter number from 1 to 9 :`);
            let inp = prompt("Enter your number: ");

            inp--;
            let row = parseInt(inp / 3);
            let col = inp % 3;
            if (board[row][col] == 'X' || board[row][col] == 'O') {
                console.log("You entered a invalid number");
            }
            else {

                board[row][col] = currentPlayer.mark;
                winner = checkFinish();
                currentPlayer = (currentPlayer === player1) ? player2 : player1;
                printBoard();
            }
        }
        if (winner === 'D') {
            console.log("It's a draw ");
        }
        else {
            console.log(`player  ${winner} won the game `);
        }
    }

    const getBoard = () => board;

    // print the board
    const printBoard = () => {
        for (let i = 0; i < rows; i++) {
            console.log(board[i]);
        }
    }

    // check if one of the player won 
    const checkFinish = () => {
        //checks row by row
        for (let i = 0; i < rows; i++) {
            let j = 0;
            //checks row by row
            if (board[i][j] === board[i][j + 1] && board[i][j + 1] === board[i][j + 2]) {
                return board[i][j];
            }
            //checks col by col
            if (board[j][i] === board[j + 1][i] && board[j + 1][i] === board[j + 2][i]) {
                return board[i][j];
            }
            // check for main diagonal ...
            if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
                return board[0][0];
            }
            if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
                return board[0][2];
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] != 'X' && board[i][j] != 'O') {
                    return 0;
                }
            }
        }
        return 'D';
    }
    return {
        getBoard,
        printBoard,
        checkFinish,
        play
    }
}

function player(name, mark) {
    return { name, mark };
}
const player1 = player("one", 'X');
const player2 = player("two", 'O');
