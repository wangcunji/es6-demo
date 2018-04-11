var isValidSudoku = function(board) {
    let tempArr = [],tempArr1 = [],tempArr2 = [],tempArr3 = [],listArr = [];
    for(let i=0;i<9;i++){
        listArr = [];
        tempArr = [];
        cubeArr = [];
        for(let j=0;j<9;j++){
            if(listArr.indexOf(board[i][j])>-1&&board[i][j]!=='.') return false;
            listArr.push(board[i][j]);
            if(tempArr.indexOf(board[j][i])>-1&&board[j][i]!=='.') return false;
            tempArr.push(board[j][i]);
            var row = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            var col = i % 3 * 3 + j % 3;
            ch = board[row][col];
            if(cubeArr.indexOf(ch)>-1&&ch!=='.') return false;
            cubeArr.push(ch);
        };
    };
    return true;
};


let arr = [[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".","3",".","."],
[".",".",".","1","8",".",".",".","."],
[".",".",".","7",".",".",".",".","."],
[".",".",".",".","1",".","9","7","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".","3","6",".","1",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".","2","."]];

console.log(isValidSudoku(arr));

let arr1 = [".", ".", ".", "5", ".", "7", "5", "."];

// console.log(validSudoku(arr1));

