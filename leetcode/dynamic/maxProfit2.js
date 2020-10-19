/**
 * 122. 买卖股票的最佳时机 II
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/ 
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length;
    if (!len) return 0;
    let min = prices[0];
    let price = prices[0];
    let next = 0;
    const dp = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        price = prices[i];
        next = prices[i + 1];
        min = Math.min(min, price);
        if ((next && next < price) || !next) {
            dp[i] = price - min;
            min = price;
        }
    }
    return dp.reduce((p, item) => p += item, 0);
};

/**
 * @param {number[]} prices
 * @return {number}
 * 贪心算法 只要比前一天大就卖出
 */
var maxProfit1 = function(prices) {
    let profit = 0
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            profit += prices[i + 1] - prices[i]
        }
    }
    return profit
};

