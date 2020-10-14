/**
 * 30. 串联所有单词的子串
 * https: //leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
 * 滑窗算法
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const result = [];
    let obj = {};
    for (let i = 0; i < words.length; i++) {
        obj[words[i]] ? obj[words[i]]++ : obj[words[i]] = 1;
    }
    const wordLen = words[0].length;
    let vali = Object.keys(obj).length;
    let num = 0;
    let active = {};
    const len = s.length;
    let left = 0;
    let right = wordLen * words.length;
    while (right <= len) {
        let temp = s.substring(left, right);
        let ar = temp.match(new RegExp(`\\w\{${wordLen}\}`, 'g'));
        for (let j = 0; j < ar.length; j++) {
            active[ar[j]] ? active[ar[j]]++ : active[ar[j]] = 1;
            if (obj[ar[j]] === active[ar[j]]) {
                num++;
            }
        }
        if (num === vali) {
            result.push(left);
        }
        active = {};
        num = 0;
        left++;
        right++;
    }
    return result;
};

let s = 'barfoothefoobarman';
let wordLen = 3;
console.log(s.match(new RegExp(`\\w\{${wordLen}\}`, 'g')));

