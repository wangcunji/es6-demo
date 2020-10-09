/**
 * 344. 反转字符串
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let len = s.length - 1;
    const swap = (i) => {
        let temp = s[i];
        if (len - i > i) {
            s[i] = s[len - i];
            s[len - i] = temp;
        }
    }
    let m = Math.ceil(len / 2);
    for (let i = 0; i < m; i++) {
        swap(i);
    }
    console.log(s);
};

reverseString(["H", "a", "n", "n", "a", "h"]);
