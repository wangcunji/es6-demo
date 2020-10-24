/**
 * 剑指 Offer 47. 礼物的最大价值
 * https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let col = grid.length;
    if (!col) return 0;
    let row = grid[0].length;
    const dp = new Array(col + 1).fill(new Array(row + 1).fill(0));
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]) + grid[i][j];
        }
    }
    return dp[col - 1][row - 1];
};
