/**
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const len = matrix.length;
    if (!len) return 0;
    const lineLen = matrix[0].length;
};