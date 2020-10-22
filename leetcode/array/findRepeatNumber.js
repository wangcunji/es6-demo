/**
 * 剑指 Offer 03. 数组中重复的数字
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(nums[i])) {
            return nums[i];
        } else {
            obj[nums[i]]= true;
        }
    }
    return;
};
