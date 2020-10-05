/**
 * 76. 最小覆盖子串
 * 给你一个字符串 S、 一个字符串 T。 请你设计一种算法，
 * 可以在 O(n) 的时间复杂度内，
 * 从字符串 S 里面找出： 包含 T 所有字符的最小子串。
 * 滑窗法 -- 经典解法
 * https: //leetcode-cn.com/problems/minimum-window-substring/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let left = 0;
    let right = 0;
    let len1 = s.length;
    let len2 = t.length;
    let window = {};
    let needs = {};
    for (let i = 0; i < len2; i++) {
        needs[t[i]] ? needs[t[i]]++ : needs[t[i]] = 1;
    }
    let wordNum = Object.keys(needs).length;
    let vails = 0;
    let start = 0;
    let len = Infinity;
    while (right < len1) {
        let word = s[right];
        if (needs[word]) {
            window[word] ? window[word]++ : window[word] = 1;
            if (needs[word] === window[word]) {
                vails++;
            }
        }
        right++;
        while (vails === wordNum) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            let lWord = s[left];
            if (needs[lWord]) {
                if (needs[lWord] === window[lWord]) {
                    vails--;
                }
                window[lWord]--;
            }
            left++;
        }
    }
    return len === Infinity ? '' : s.substr(start, len);
};
