function gameBoard() {
    const rows = 3, cols = 3;
    const board = [];

    /*
     should be a 2d array ...
     - - -
     - - -
     - - -
     */
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            let rnd = Math.random();
            let char;
            if (rnd > .5) char = 'x';
            else char = 'y';

            board[i].push(cell(char));
        }
    }

    const getBoard = () => board;

    // print the board
    const printBoard = () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                console.log(board[i][j], " ")
                checkFinish();
            }
        }
    }

    // check if one of the player won 
    const checkFinish = () => {
        //checks row by row
        for (let i = 0; i < rows; i++) {
            let j = 0;
            //checks row by row
            if (board[i][j] === board[i][j + 1] === board[i][j + 2]) {
                confirm
                return board[i][j];
            }
            //checks col by col
            if (board[j][i] === board[j + 1][i] === board[j + 2][i]) {
                return board[i][j];
            }
            // check for main diagonal ...
            if (board[0][0] === board[1][1] === board[2][2]) {
                return board[0][0];
            }
            if (board[0][2] === board[1][1] === board[2][0]) {
                return board[0][2];
            }
        }
    }
    return {
        getBoard,
        printBoard,
        checkFinish
    }
}


function player(name) {
    return { name };
}


function cell(char) {
    // gameBoard();
    return char;
}

gameBoard();