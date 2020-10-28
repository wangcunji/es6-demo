/**
 * 1207. 独一无二的出现次数
 * https://leetcode-cn.com/problems/unique-number-of-occurrences/
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const len = arr.length;
    arr.sort((a, b) => a - b);
    const nums = [];
    let n = 0;
    for (let i = 0; i < len; i++) {
        if (arr[i] === arr[i + 1]) {
            n++;
        } else if (nums.includes(n)) {
            return false;
        } else {
            nums.push(n);
            n = 0;
        }
    }
    return true;
};
