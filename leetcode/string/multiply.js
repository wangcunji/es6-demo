/**
 * 字符串相乘
 * https: //leetcode-cn.com/explore/interview/card/bytedance/242/string/1015/
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    const len1 = num1.length;
    const len2 = num2.length;
    const vals = new Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        const n1 = +num1[i];
        for (let j = len2 - 1; j >= 0; j--) {
            const n2 = +num2[j];
            const multi = n1 * n2;
            const val = vals[i + j + 1] + multi;

            vals[i + j + 1] = val % 10;
            vals[i + j] += val / 10 | 0;
        }
    }
    while (vals[0] == 0) {
        vals.shift();
    }
    return vals.length ? vals.join('') : '0';
};

console.log(multiply('123456789', '987654321'));
