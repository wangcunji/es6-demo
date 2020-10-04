/**
 * 771. 宝石与石头
 * https: //leetcode-cn.com/problems/jewels-and-stones/
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let len = J.length;
    let num = 0;
    for (let i = 0; i < len; i++) {
        let item = J[i];
        let tempAr = S.split(item);
        num += tempAr.length - 1;
    }
    return num;
};
