/**
 * 844. 比较含退格的字符串
 * https://leetcode-cn.com/problems/backspace-string-compare/
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const helper = (str) => {
        const strList = str.split('#');
        const len = strList.length;
        for (let i = 0; i < len - 1; i++) {
            let snippetLen = strList[i].length;
            if (snippetLen !== 0) {
                strList[i] = strList[i].substr(0, snippetLen - 1);
            } else {
                let j = i - 1;
                while(j > -1) {
                    snippetLen = strList[j].length;
                    if (snippetLen !== 0) {
                        strList[j] = strList[j].substr(0, snippetLen - 1);
                        break;
                    }
                    j--;
                }
            }
        }
        return strList.join('');
    }
    return helper(S) === helper(T);
};

/**
 * 正则解法
 * @param {*} S 
 * @param {*} T 
 */
var backspaceCompareReg = function(S, T) {
    const helper = (str) => {
        while(str.indexOf('#') > -1) {
            str = str.replace(/(\w{0,1}\#{1})/, '');
        }
        return str;
    }
    return helper(S) === helper(T);
}

console.log(backspaceCompareReg('#ab#c', '#ad#c'));
