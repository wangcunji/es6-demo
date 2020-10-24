/**
 * 763. 划分字母区间
 * https://leetcode-cn.com/problems/partition-labels/
 */
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let len = S.length;
    let obj = {};
    for (let i = 0; i < len; i++) {
        let letter = S[i];
        if (obj[letter]) {
            continue;
        } else {
            let start = S.indexOf(letter);
            let end = S.lastIndexOf(letter);
            obj[letter] = {
                start,
                end
            }
        }
    };
    let result = [];
    const helper = (obj) => {
        let keys = Object.keys(obj);
        let kLen = keys.length;
        let end = obj[keys[0]].end;
        let remainObj = {};
        for (let i = 0; i < kLen; i++) {
            let key = keys[i];
            if (obj[key].start < end && obj[key].end > end) {
                end = obj[key].end;
            } else {
                remainObj[key] = obj[key];
            }
        }
        result.push(end);
        if (JSON.stringify(remainObj) !== '{}') {
            helper(remainObj);
        }
    }
    return result;
};

/**
 * 更好的解法
 */

var partitionLabels = function(S) {
    let len = S.length;
    let obj = {};
    let result = [];
    for (let i = 0; i < len; i++) {
        let letter = S[i];
        obj[letter] = i;
    };
    let start = 0;
    let end = 0;
    for (let j = 0; j < len; j++) {
        end = Math.max(end, obj[S[j]]);
        if (end === j) {
            result.push(end + 1 - start);
            start = i + 1;
        }
    }
    return result;
}
