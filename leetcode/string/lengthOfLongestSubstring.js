/**
 * 无重复字符的最长子串
 * https: //leetcode-cn.com/explore/interview/card/bytedance/242/string/1012/
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let str = '';
    let len = 0;
    if (!s) return 0;
    for(let i = 0; i < s.length; i++) {
        let word = s[i];
        let index = str.indexOf(word);
        if (index !== -1) {
            str = str.substring(index + 1);
        }
        str += word;
        if (str.length > len) {
            len = str.length;
        }
    }
    return len;
};

console.log(lengthOfLongestSubstring('pwwkew'));
