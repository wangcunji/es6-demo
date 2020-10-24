/**
 * 221. 最大正方形
 * https://leetcode-cn.com/problems/maximal-square/
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let col = matrix.length;
    if (!matrix[0]) return 0;
    let row = matrix[0].length;
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (matrix[i][j] === '1') {
                matrix[i][j] = Number(matrix[i][j]);
                if (i !== 0 && j !== 0) {
                    matrix[i][j] = Math.min(matrix[i-1][j], matrix[i-1][j-1], matrix[i][j-1]) + 1;
                }
                maxsqlen = Math.max(maxsqlen, matrix[i][j]);
            }
        }
    }
    return maxsqlen**2;
}
