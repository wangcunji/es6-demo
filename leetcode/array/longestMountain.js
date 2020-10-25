/**
 * 845. 数组中的最长山脉
 * https://leetcode-cn.com/problems/longest-mountain-in-array/
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    let res = 0;
    for(let i = 1; i < A.length-1; i++) {
        if(A[i] > A[i - 1] && A[i] > A[i + 1]) {
            let len = i;
            let count = 1;
            while(A[len] > A[len - 1] && len > 0) {
                count++;
                len--;
            }
            len = i;
            while(A[len] > A[len + 1] && len < A.length) {
                count++;
                len++;
            }
            res = res > count ? res : count;
        }
    }
    return res;
};
