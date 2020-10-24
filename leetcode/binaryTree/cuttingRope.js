/**
 * 剑指 Offer 14- I. 剪绳子
 * https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
 */
/**
 * @param {number} n
 * @return {number}
 * 乘3是最大的
 */
var cuttingRope = function(n) {
    if (n <= 3) {
        return n - 1;
    }
    let num = 1;
    while(n > 4) {
        num *= 3;
        n -= 3;
    }
    return num * n;
};

/**
 * @param {number} n
 * @return {number}
 * 动态规划
 */
var cuttingRope = function(n) {
    let dp = new Array(n + 1).fill(1);
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n];
};
