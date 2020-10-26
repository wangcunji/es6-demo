/**
 * 1365. 有多少小于当前数字的数字
 * https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    let obj = {};
    let sortNums = JSON.parse(JSON.stringify(nums));
    sortNums.sort((a, b) => a - b);
    const len = nums.length;
    sortNums.forEach((item, index) => {
        if (!Object.hasOwnProperty.call(obj, item)) {
            obj[item] = index;
        }
    });
    for (let i = 0; i < len; i++) {
        result.push(obj[nums[i]]);
    }
    return result; 
};

/**
 * 更好的解法
 */
var smallerNumbersThanCurrent1 = function(nums) {
    const newNums = new Array(101).fill(0);
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        newNums[nums[i]] += 1;
    }
    for (let i = 1; i <= 100; ++i) {
        newNums[i] += newNums[i - 1];
    }
    const ret = [];
    for (let i = 0; i < n; ++i) {
        ret.push(nums[i] ? cnt[nums[i] - 1] : 0);
    }
    return ret;
}
