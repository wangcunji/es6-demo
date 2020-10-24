/**
 * 剑指 Offer 44. 数字序列中某一位的数字
 * https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/
 */
console.log(10 * 1 + 90 * 2 + 900 * 3 + 9000 * 4)

console.log(488890 / 9)
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let num = n;
    let count = 1;
    while(num > 10) {
        count++;
        num = Math.floor(num / 10);
    }
    let standVal = 0;
    let copy = 0;
    let obj = {};
    while(copy <= count) {
        standVal += (copy * Math.pow(10, copy - 1));
        obj[copy] = standVal * 9 + 1;
        if (n < obj[copy]) {
            break;
        }
        copy++;
    }
    let diff = n - obj[copy - 1];
    let val = Math.ceil(diff / copy) + Math.pow(10, copy - 1) - 1;
    let remain = diff - copy * (Math.ceil(diff / copy) - 1) - 1;
    console.log(val, remain);
    return val.toString()[remain];
};

var findNthDigit1 = function(n) {
    for (let bit = 1; bit < 32; ++bit) {
        const startNum = Math.pow(10, bit - 1);
        const bitSum = 9 * startNum * bit;
        if (n > bitSum) {
            n -= bitSum;
        } else {
            let num = startNum + Math.ceil(n / bit) - 1;
            let pos = n - bit * (num - startNum) - 1;
            console.log(num, pos, n - bit * (num - startNum) - 1);
            return num.toString(10)[pos];
        }
    }
};


