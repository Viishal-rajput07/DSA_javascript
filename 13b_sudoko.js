// We can use another approach to solve the Sudoku Solver question. Notice that here, we are using 
// hashmaps (objects in JavaScript) to store the values in each row, column and box respectively.

var solveSudoku = function(board) {
    const boxes = Array.from({ length: 9 }, () => ({}));
    const rows = Array.from({ length: 9 }, () => ({}));
    const cols = Array.from({ length: 9 }, () => ({}));
 
    function getBox(row, col) {
        const newC = Math.floor(col / 3);
        const newR = Math.floor(row / 3) * 3;
        return newC + newR;
    }
 
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                const value = board[i][j];
                const x = getBox(i, j);
                boxes[x][value] = true;
                rows[i][value] = true;
                cols[j][value] = true;
            }
        }
    }
 
    function isValid(box, row, col, num) {
        return !(num in box || num in row || num in col);
    }
 
    function solveBacktrack(board, boxes, rows, cols, r, c) {
        if (r === 9) {
            return true;
        }
        if (board[r][c] === '.') {
            const boxId = getBox(r, c);
            for (let num = 1; num <= 9; num++) { // Corrected the range to stop at 9
                const numVal = String(num);
                const box = boxes[boxId];
                const row = rows[r];
                const col = cols[c];
                if (isValid(box, row, col, numVal)) {
                    board[r][c] = numVal;
                    box[numVal] = true;
                    row[numVal] = true;
                    col[numVal] = true;
                    if (c === 8) {
                        if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) return true;
                    } else {
                        if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) return true;
                    }
                    // backtrack
                    delete box[numVal];
                    delete row[numVal];
                    delete col[numVal];
                    board[r][c] = '.';
                }
            }
            return false;
        } else {
            if (c === 8) {
                return solveBacktrack(board, boxes, rows, cols, r + 1, 0);
            } else {
                return solveBacktrack(board, boxes, rows, cols, r, c + 1);
            }
        }
    }
 
    solveBacktrack(board, boxes, rows, cols, 0, 0);
    return board
};

let board = [
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
console.log(solveSudoku(board))