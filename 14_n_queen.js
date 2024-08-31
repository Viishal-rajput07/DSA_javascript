/*Coding Exercise: N Queen
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens 
attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in 
any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' 
both indicate a queen and an empty space, respectively.

Time complexity = 0(n!)
space complexity = 0(n ^2)
 */
let queens = function (n) {

    let res = []

    // create intitial board setup with all cells empty ('.)
    let board = new Array(n).fill().map(() => new Array(n).fill('.'))

    // converts the board array of array into an array of strings
    function convertBoard(board) {
        return board.map(row => row.join(''));
    }

    // check if it's a valid to palce a queen at board[row][col]
    function isValid(row, col, board) {
        // check if there is a queen in the same column
        for (let x = 0; x < row; x++) {
            if (board[x][col] === 'Q') {
                return false
            }
        }

            //check the top-left diagonal
            for (let r = row, c = col; r >= 0 && c >= 0; r--, c--) {
                if (board[r][c] === 'Q') {
                    return false
                }
            }
            // check the top-right diagonal
            for (let r = row, c = col; r >= 0 && c < n; r--, c++) {
                if (board[r][c] === 'Q') {
                    return false
                }
            }
        
        return true
    }

    function backtrack(board, row) {
        // base case if all queens are placed
        if (row === n) {
            res.push(convertBoard(board))
            return
        }

        //try placing a queen in each column of the current row
        for (let col = 0; col < n; col++) {
            if (isValid(row, col, board)) {
                board[row][col] = 'Q'    //place the queen
                backtrack(board, row + 1)   // move to the next row
                board[row][col] = '.'      // backtrack, remove the queen
            }
        }
    }
    backtrack(board, 0)
    return res
}

console.log(queens(4))