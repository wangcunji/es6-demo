/**
 * 977. 有序数组的平方
 * https://leetcode-cn.com/problems/squares-of-a-sorted-array/
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    // return A.map(item => Math.pow(item, 2)).sort((a, b) => a - b);
    const len = A.length;
    let i = 0;
    let j = len - 1;
    let k = len - 1;
    let result = new Array(len);
    while(i <= j) {
        let powi = Math.pow(A[i], 2);
        let powj = Math.pow(A[j], 2);
        if (powi >= powj) {
            result[k] = powi;
            i++;
        } else {
            result[k] = powj;
            j--;
        }
        k--;
    }
    return result;
};
