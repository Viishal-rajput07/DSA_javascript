/*
Coding Exercise: Sudoku Solver
Write a program to solve a Sudoku puzzle by filling the empty cells.
A sudoku solution must satisfy all of the following rules:
Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

Constraints:
board.length == 9
board[i].length == 9
board[i][j] is a digit between 1 and 9 , inclusive or '.'.
It is guaranteed that the input board has only one solution.

Example: 
board = [
["5", "3", ".", ".", "7", ".", ".", ".", "."],
["6", ".", ".", "1", "9", "5", ".", ".", "."],
[".", "9", "8", ".", ".", ".", ".", "6", "."],
["8", ".", ".", ".", "6", ".", ".", ".", "3"],
["4", ".", ".", "8", ".", "3", ".", ".", "1"],
["7", ".", ".", ".", "2", ".", ".", ".", "6"],
[".", "6", ".", ".", ".", ".", "2", "8", "."],
[".", ".", ".", "4", "1", "9", ".", ".", "5"],
[".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

Output : 
[
["5", "3", "4", "6", "7", "8", "9", "1", "2"],
["6", "7", "2", "1", "9", "5", "3", "4", "8"],
["1", "9", "8", "3", "4", "2", "5", "6", "7"],
["8", "5", "9", "7", "6", "1", "4", "2", "3"],
["4", "2", "6", "8", "5", "3", "7", "9", "1"],
["7", "1", "3", "9", "2", "4", "8", "5", "6"],
["9", "6", "1", "5", "3", "7", "2", "8", "4"],
["2", "8", "7", "4", "1", "9", "6", "3", "5"],
["3", "4", "5", "2", "8", "6", "1", "7", "9"]
]

Time complexity = 0(1)  => upper bound is 0(9 ^emptyCells)
space complexity = 0(1)
*/

let suduko = function (board){

    function isValid(board, row, col, num){
        for(let x=0; x<9; x++ ){
            if(board[row][x] === num || board[x][col]=== num){
                return false
            }
            let r = 3* Math.floor(row/3) + Math.floor(x/3)
            let c = 3* Math.floor(col/3) + x%3
            if(board[r][c]===num){
                return false
            }
        }
        return true
    }
    function helper(board){
        for(let row = 0; row<9; row++){
            for(let col=0; col<9; col++){
                if(board[row][col] === "."){
                    for(let num=1; num <=9; num++){
                        let char = num.toString()
                        if(isValid(board, row, col, char)){
                            board[row][col] = char

                            if(helper(board)){
                                return true
                            }
                            board[row][col] = "."
                        }
                    }
                    return false
                }
            }
        }
        return true
    }

    helper(board)
   
}