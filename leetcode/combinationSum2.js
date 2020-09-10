/**
 * 40. 组合总和 II
 * 给定一个数组 candidates 和一个目标数 target，
 * 找出 candidates中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用一次。
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let result = [];
    const len = candidates.length;
    let sortCandidates = candidates.sort((a, b) =>  a - b);
    let prev = 0;
    const helper = (num, path, index) => {
        if (num === 0) {
            result.push(path.slice());
            return;
        }
        if (num < 0) {
            return;
        }
        if (num === target) {
            prev = 0;
        }
        for (let i = index; i < len; i++) {
            if (sortCandidates[i] !== prev) {
                path.push(sortCandidates[i]);
                helper(num - sortCandidates[i], path, i + 1);
                prev = path.pop();
            }
        }
    }
    helper(target, [], 0);
    return result;
};

console.log(combinationSum2([1, 1, 2, 5, 6, 7, 10], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
