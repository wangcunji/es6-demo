
/**
 * 39. 组合总和
 * 给定一个无重复元素的数组 candidates 和一个目标数 target， 找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的数字可以无限制重复被选取。
 * 说明：
 * 所有数字（ 包括 target） 都是正整数。
 * 解集不能包含重复的组合。
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    const len = candidates.length;
    const helper = (num, path, index) => {
        if (num === 0) {
            result.push(path.slice());
            return;
        }
        if (num < 0) {
            return;
        }
        for (let i = index; i < len; i++) {
            path.push(candidates[i]);
            helper(num - candidates[i], path, i);
            path.pop();
        }
    }
    helper(target, [], 0);
    return result;
};

console.log(combinationSum([2, 3, 5], 8));
