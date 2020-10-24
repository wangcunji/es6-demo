/**
 * 47. 全排列 II
 * https: //leetcode-cn.com/problems/permutations-ii/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const result = [];
    const numsLen = nums.length;
    const indexs = new Array(nums.length).fill(false);
    const helper = (path) => {
        if (path.length === numsLen) {
            result.push(path.slice());
            return;
        }
        for (let i = 0; i < numsLen; i++) {
            const item = nums[i];
            if (indexs[i] || (i > 0 && item === nums[i - 1] && !indexs[i - 1])) {
                continue;
            }
            path.push(item);
            indexs[i] = true;
            helper(path);
            indexs[i] = false;
            path.pop();
        }
    };
    nums.sort((x, y) => x - y);
    helper([]);
    return result;
};

console.log(permuteUnique([1, 1, 3]));
