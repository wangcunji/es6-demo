/**
 * 1002. 查找常用字符
 * https://leetcode-cn.com/problems/find-common-characters/
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let result = [];
    const len = A.length;
    let obj = {};
    const str = A[0];
    const helper = (w) => {
        let num = Infinity;
        for (let i = 0; i < len; i++) {
            num = Math.min(num, A[i].split(w).length);
        }
        result = result.concat(new Array(num - 1).fill(w));
    };
    for (let j = 0; j < str.length; j++) {
        let word = str[j];
        if (!obj.hasOwnProperty(word)) {
            obj[word] = true;
            helper(word);
        }
    }
    return result;
};
