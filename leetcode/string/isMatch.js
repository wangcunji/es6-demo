/**
 * 10. 正则表达式匹配
 * https: //leetcode-cn.com/problems/regular-expression-matching/
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (p === '') {
        if (s === '') {
            return true;
        } else {
            return false;
        }
    }
    const vali = '.*';
    let prev = '';
    const helper = (s, i) => {
        if (i > p.length - 1) return true;
        const word = p[i];
        if (vali.indexOf(word) !== -1) {
            return helper(s, i + 1);
        } else {
            let index = s.indexOf(word);
            if (index !== -1) {
                
            }
        }
    }
};
