/**
 * 216. 组合总和 III
 * 找出所有相加之和为 n 的 k 个数的组合。
 * 组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];
    const helper = (target, index, path) => {
        if (path.length === k && target === 0) {
            result.push(path.slice());
            return;
        }
        if (path.length >= k && target > 0) {
            return;
        }
        if (target < 0) {
            return;
        }
        for (let i = index; i < 9; i++) {
            const item = arr[i];
            path.push(item);
            helper(target - item, i + 1, path);
            path.pop();
        }
    }
    helper(n, 0, []);
    return result;
};

console.log(combinationSum3(3, 7));

