/**
 * 123. 买卖股票的最佳时机 III
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    const len = prices.length;
    let priceSnippet = [];
    const allDp = new Array(len).fill(0);
    let outMin = prices[0];
    let price = prices[0];
    const getOnceProfit = (priceSnippet) => {
        const subLen = priceSnippet.length;
        const dp = new Array(subLen).fill(0);
        let min = priceSnippet[0];
        for (let i = 1; i < subLen; i++) {
            min = Math.min(min, priceSnippet[i]);
            dp[i] = Math.max(dp[i - 1], priceSnippet[i] - min);
        }
        return dp[subLen - 1];
    }
    for (let j = 1; j < len - 2; j++) {
        price = prices[j];
        outMin = Math.min(outMin, price);
        allDp[j] = Math.max(allDp[j - 1], price - outMin);
        priceSnippet = prices.sblice(j + 1);
        result = Math.max(allDp + getOnceProfit(priceSnippet), result);
    }
    return result;
};
