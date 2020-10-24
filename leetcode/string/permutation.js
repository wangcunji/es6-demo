/**
 * 剑指 Offer 38. 字符串的排列
 * https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let sLen = s.length;
    const result = [];
    let visited = {};
    const helper = (path) => {
        if (path.length === sLen) {
            result.push(path);
            return;
        }
        for (let i = index; i < sLen; i++) {
            let item = s[i];
            if (!visited[item]) {
                visited[item] = true;
                helper(path + item);
                visited[item] = false;
            }
        }
    }
    helper('');
    return result;
};
