/**
 * 78. 子集
 * 给定一组不含重复元素的整数数组 nums， 返回该数组所有可能的子集（ 幂集）。
 * 说明： 解集不能包含重复的子集。
 * https: //leetcode-cn.com/problems/subsets/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const t = [];
    const ans = [];
    const len = nums.length;
    const helper = (cur) => {
        if (cur === len) {
            ans.push(t.slice());
            return;
        }
        t.push(nums[cur]);
        helper(cur + 1);
        t.pop(t.length - 1);
        helper(cur + 1);
    }
    helper(0);
    return ans;
};

console.log(subsets([1, 2, 3]));
