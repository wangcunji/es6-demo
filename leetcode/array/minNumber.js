/**
 * 剑指 Offer 45. 把数组排成最小的数
 * https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    return nums.sort((a,b) => ('' + a + b) - ('' + b + a)).join('');
};
