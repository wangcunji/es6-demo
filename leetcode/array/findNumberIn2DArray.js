/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    const len = matrix.length;
    if (!matrix[0]) return false;
    const rowLen = matrix[0].length;
    let i = 0;
    let j = 0;
    if (matrix[i][j] > target) return false;
    while (i < len && j <  rowLen) {
        if (matrix[i][j] === target) {
            return true;
        }
        if (matrix[i][j] < target && matrix[i][rowLen - 1] > target) {
            j++;
        } else if (matrix[i][rowLen - 1] < target) {
            i++;
        } else if (matrix[i][j] > target) {
            return false;
        }
    }
    return false;
};
