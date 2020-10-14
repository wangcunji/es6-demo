/**
 * 416. 分割等和子集
 * https: //leetcode-cn.com/problems/partition-equal-subset-sum/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const count = nums.reduce((prev, num) => prev += num);
    const target = count / 2;
    const len = nums.length;
    if (target !== Math.floor(target)) {
        return false;
    }
    const memo = new Map();
    const helper = (total, index) => {
        const key = total + '&' + index;
        if (memo.has(key)) { // 如果memo中有对应的缓存值，直接使用
            return memo.get(key);
        }
        if (index > len - 1 || total > target) {
            return false;
        }
        if (total === target) {
            return true;
        }
        const res = helper(total + nums[index], index + 1) || helper(total, index + 1);
        memo.set(key, res);
        return res;
    }
    return helper(0, 0);
};
