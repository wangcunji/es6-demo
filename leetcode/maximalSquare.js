/**
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const len = matrix.length;
    if (!len) return 0;
    const lineLen = matrix[0].length;
    let result = 0;
    for (let i = 0; i < lineLen; i++) {
        for (let j = 0; j < len; j++) {
            let diffVal1 = lineLen - i;
            let diffVal2 = len - j;
            let index = 0;
            while(index < Math.min(diffVal1, diffVal2)) {
                result = getChildArrayArea(matrix, [j, i], [j + index, i + index], result);
                index++;
            }
        }
    }
    return result;
};

function getChildArrayArea(matrix, a, b, current) {
    let index = a[0];
    let len = b[0] + 1;
    let start = a[1];
    let end = b[1] + 1;
    let temp = [];
    for (let i = index; i < len; i++) {
        temp = temp.concat(matrix[i].slice(start, end));
    }
    let tempLen = temp.length;
    if (tempLen < current) {
        return current;
    }
    for (let i = 0; i < tempLen; i++) {
        if (+temp[i] !== 1) {
            return current;
        }
    }
    return tempLen;
}

let array = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
let t = [[1,1,0],[1,1,1],[1,0,1]];
let s = [[0, 1, 0]];
console.log(maximalSquare(array));
