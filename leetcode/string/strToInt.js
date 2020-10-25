/**
 * 剑指 Offer 67. 把字符串转换成整数
 * https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/
 */

/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    let res = str.match(/^\s*[+-]?\d+/);
    if(!res) return 0;

    res = str.match(/^\s*[+-]?\d+/)[0].trim();
    if(res >= Math.pow(2,31)) {
        return Math.pow(2,31) - 1;
    } else if (res <= Math.pow(-2,31)) {
        return  Math.pow(-2,31)
    } else {
        return  res;
    }
};
