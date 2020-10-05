/**
 * 字符串的排列
 * 给定两个字符串 s1 和 s2， 写一个函数来判断 s2 是否包含 s1 的排列。
 * https: //leetcode-cn.com/explore/interview/card/bytedance/242/string/1016/
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion1 = function (s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;
    if (len1 > len2) return false;
    const helper = (index) => {
        if (index > len1) return false;
        const word = s1[index];
        console.log(word);
        let strAr = s1.split('');
        let s2Idx = s2.indexOf(word);
        if (s2Idx > -1) {
            for (let i = s2Idx; i < s2.length; i++) {
                let item = s2[i];
                let _index = strAr.indexOf(item);
                if (_index > -1) {
                    strAr.splice(_index, 1);
                } else {
                    strAr = s1.split('');
                    s2Idx++;
                    i = s2Idx;
                }
                if (strAr.length === 0) {
                    return true;
                }
            }
            return strAr.length === 0 || helper(index + 1);
        } else {
            return false;
        }
    }
    return helper(0);
};

/**
 * 滑窗算法
 * @param {string} s1 
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let left = 0;
    let right = 0;
    let len1 = s1.length;
    let len2 = s2.length;
    let window = {};
    let needs = {};
    for (let i = 0; i < len1; i++) {
        needs[s1[i]] ? needs[s1[i]]++ : needs[s1[i]] = 1;
    }
    let wordNum = Object.keys(needs).length;
    let vails = 0;
    while (right < len2) {
        let word = s2[right];
        if (needs[word]) {
            window[word] ? window[word]++ : window[word] = 1;
            if (needs[word] === window[word]) {
                vails++;
            }
        }
        right++;
        while (vails === wordNum) {
            if (right - left === len1) {
                return true
            }
            let lWord = s2[left];
            if (needs[lWord]) {
                if (needs[lWord] === window[lWord]) {
                    vails--;
                }
                window[lWord]--;
            }
            left++;
        }
    }
    return false;
};
console.log(checkInclusion("ab", "eidbaooo"));
