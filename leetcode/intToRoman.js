/**
 * 12. 整数转罗马数字
 * https: //leetcode-cn.com/problems/integer-to-roman/
 */
/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
    const romans = ['', 'I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const nums = ['', 1, 10, 100, 1000];
    let i = nums.length - 1; // 1-12  2-34 3-56 4-7
    let temp = num;
    let romanStr = '';
    while (i > 0 && temp > 0) {
        console.log(temp);
        if (temp >= nums[i]) {
            let divisor = Math.floor(temp / nums[i]);
            let double = 2 * i;
            if (divisor >= 9) {
                romanStr += `${romans[double - 1]}${romans[double + 1]}`;
                divisor -= 9;
            } else if (divisor >= 5) {
                romanStr += romans[double];
                divisor -= 5;
            } else if (divisor >= 4) {
                romanStr += `${romans[double - 1]}${romans[double]}`;
                divisor -= 4;
            }
            romanStr += romans[double - 1].repeat(divisor);
        }
        temp = temp % nums[i];
        i--;
    }
    return romanStr;
};

console.log(intToRoman(58)); //MCMXCIV
