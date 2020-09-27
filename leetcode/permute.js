/**
 * 46. 全排列
 * 给定一个 没有重复 数字的序列， 返回其所有可能的全排列。
 * https: //leetcode-cn.com/problems/permutations/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];
    const numsLen = nums.length;
    const helper = (path) => {
        if (path.length === numsLen) {
            result.push(path.slice());
            return;
        }
        for (let i = 0; i < numsLen; i++) {
            if (!path.includes(nums[i])) {
                path.push(nums[i]);
                helper(path);
                path.pop();
            }
        }
    };
    helper([]);
    return result;
};

console.log(permute([1, 2, 3, 4]));
