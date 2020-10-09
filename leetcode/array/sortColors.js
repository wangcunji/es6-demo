/**
 * 75. 颜色分类
 * https: //leetcode-cn.com/problems/sort-colors/
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const len = nums.length;
    let count = 0;
    const swap = (a, b) => {
        let temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            swap(count, i);
            count++;
        }
    }
    for (let i = count; i < len; i++) {
        if (nums[i] === 1) {
            swap(count, i);
            count++;
        }
    }
    console.log(nums);
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
