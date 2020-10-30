/**
 * 47. 全排列 II
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
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
    // let obj = {};
    const helper = (path) => {
        // let str = path.join('');
        if (path.length === numsLen) {
            result.push(path.slice(0));
            // obj[str] = true;
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
