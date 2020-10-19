/**
 * 121. 买卖股票的最佳时机
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * 动态规划--easy
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) return 0;
    const len = prices.length;
    const dp = new Array(len).fill(0);
    let price = 0;
    let min = price[0];
    for (let i = 0; i < len; i++) {
        price = prices[i];
        min = Math.min(min, price);
        dp[i] = Math.max(dp[i - 1], price - min);
    }
    return dp[len - 1];
};

var maxProfit1 = function(prices) {
    const len = prices.length;
    let result = 0;
    const helper = (index) => {
        const base = prices[index];
        for (let i = index + 1; i < len; i++) {
            result = Math.max(result, prices[i] - base);
        }
    }
    for (let j = 0; j < len - 1; j++) {
        helper(j);
    }
    return result;
};
