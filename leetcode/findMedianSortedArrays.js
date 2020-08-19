/**
 * 4. 寻找两个正序数组的中位数
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 两个数组合并成一个，然后求该数组的中位数
// var findMedianSortedArrays = function(nums1, nums2) {
//     const arr = [...nums1, ...nums2].sort((a, b) => a - b);
//     const length  = arr.length;
//     return length % 2 !== 0 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2;
// };
var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    const allLen = len1 + len2;
};

let nums1 = [3];
let nums2 = [1, 9];

// console.log(findMedianSortedArrays([1,3,4,5],[1,2,6,7]))
console.log(findMedianSortedArrays(nums1, nums2));
