/**
 * 18. 四数之和
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，
 * 判断 nums 中是否存在四个元素 a， b， c 和 d，
 * 使得 a + b + c + d 的值与 target 相等？
 * 找出所有满足条件且不重复的四元组。
 * https: //leetcode-cn.com/problems/4sum/
 * 回溯法 --
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let result = [];
    nums.sort((a, b) => a - b);
    const set = new Set();
    const helper = (count, index, path) => {
        if (path.length === 4 && count === target) {
            result.push(path.slice());
            return;
        }
        if (path.length > 4) {
            return;
        }
        for (let i = index; i < nums.length; i++) {
            const nextSum = count + nums[i];
            if (nextSum > 0 && nextSum > target) {
                break;
            }
            path.push(nums[i]);
            if (path.length === 4) {
                if (nextSum === target) {
                    const pathStr = path.join('-');
                    if (!set.has(pathStr)) {
                        result.push(path.slice());
                        set.add(pathStr);
                    }
                }
            } else {
                helper(nextSum, i + 1, path);
            }
            path.pop();
        }
    }
    helper(0, 0, []);
    return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// [[-2,-1,1,2],[-1,-1,1,1]]