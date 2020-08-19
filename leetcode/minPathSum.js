/**
 * 64.最小路径和
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小
 * 说明：每次只能向下或者向右移动一步。
 * https://leetcode-cn.com/problems/minimum-path-sum/
 */

/**
* @param {number[][]} grid
* @return {number}
// 暴力破解法---超出时间限制
let result = Infinity;
var minPathSum = function (grid) {
    const wide = grid.length;
    if (wide === 0) return 0;
    const length = grid[0].length;
    result = Infinity;
    calcPath(grid, 0, 0, wide, length, 0);
    return result;
};

function calcPath(grid, x, y, wide, length, count) {
    if (x < length && y < wide) {
        count += grid[y][x];
    }
    if (count < result) {
        if (x === length - 1 && y === wide - 1) {
            result = count;
        }
        if (x < length - 1) {
            calcPath(grid, x + 1, y, wide, length, count);
        }
        if (y < wide - 1) {
            calcPath(grid, x, y + 1, wide, length, count);
        }
    }
}
*/

// 动态规划法
var minPathSum = function (grid) {
    const wide = grid.length;
    const length = grid[0] ? grid[0].length : 0;
    if (wide === 0 || length === 0) return 0;
    let dp = Array.from({ length: wide }, () => new Array(length).fill(Number.MAX_VALUE));

    dp[0][0] = grid[0][0];

    // 补齐首行路径和
    for (let i = 1; i < wide; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }

    // 补齐首列路径和
    for (let j = 1; j < length; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    }

    for (let i = 1; i < wide; i++) {
        for (let j = 1; j < length; j++) {
            // 从路径和较小的地方进入
            let itemMin = Math.min(dp[i - 1][j], dp[i][j - 1])
            dp[i][j] = itemMin + grid[i][j];
        }
    }
    return dp[wide - 1][length - 1];
};


let a = [[7, 1, 3, 5, 8, 9, 9, 2, 1, 9, 0, 8, 3, 1, 6, 6, 9, 5], [9, 5, 9, 4, 0, 4, 8, 8, 9, 5, 7, 3, 6, 6, 6, 9, 1, 6], [8, 2, 9, 1, 3, 1, 9, 7, 2, 5, 3, 1, 2, 4, 8, 2, 8, 8], [6, 7, 9, 8, 4, 8, 3, 0, 4, 0, 9, 6, 6, 0, 0, 5, 1, 4], [7, 1, 3, 1, 8, 8, 3, 1, 2, 1, 5, 0, 2, 1, 9, 1, 1, 4], [9, 5, 4, 3, 5, 6, 1, 3, 6, 4, 9, 7, 0, 8, 0, 3, 9, 9], [1, 4, 2, 5, 8, 7, 7, 0, 0, 7, 1, 2, 1, 2, 7, 7, 7, 4], [3, 9, 7, 9, 5, 8, 9, 5, 6, 9, 8, 8, 0, 1, 4, 2, 8, 2], [1, 5, 2, 2, 2, 5, 6, 3, 9, 3, 1, 7, 9, 6, 8, 6, 8, 3], [5, 7, 8, 3, 8, 8, 3, 9, 9, 8, 1, 9, 2, 5, 4, 7, 7, 7], [2, 3, 2, 4, 8, 5, 1, 7, 2, 9, 5, 2, 4, 2, 9, 2, 8, 7], [0, 1, 6, 1, 1, 0, 0, 6, 5, 4, 3, 4, 3, 7, 9, 6, 1, 9]];
let b = [[1, 3, 1], [1, 5, 1], [4, 2, 1]];
let c = [[1]];
let d = [[3, 8, 6, 0, 5, 9, 9, 6, 3, 4, 0, 5, 7, 3, 9, 3], [0, 9, 2, 5, 5, 4, 9, 1, 4, 6, 9, 5, 6, 7, 3, 2], [8, 2, 2, 3, 3, 3, 1, 6, 9, 1, 1, 6, 6, 2, 1, 9], [1, 3, 6, 9, 9, 5, 0, 3, 4, 9, 1, 0, 9, 6, 2, 7], [8, 6, 2, 2, 1, 3, 0, 0, 7, 2, 7, 5, 4, 8, 4, 8], [4, 1, 9, 5, 8, 9, 9, 2, 0, 2, 5, 1, 8, 7, 0, 9], [6, 2, 1, 7, 8, 1, 8, 5, 5, 7, 0, 2, 5, 7, 2, 1], [8, 1, 7, 6, 2, 8, 1, 2, 2, 6, 4, 0, 5, 4, 1, 3], [9, 2, 1, 7, 6, 1, 4, 3, 8, 6, 5, 5, 3, 9, 7, 3], [0, 6, 0, 2, 4, 3, 7, 6, 1, 3, 8, 6, 9, 0, 0, 8], [4, 3, 7, 2, 4, 3, 6, 4, 0, 3, 9, 5, 3, 6, 9, 3], [2, 1, 8, 8, 4, 5, 6, 5, 8, 7, 3, 7, 7, 5, 8, 3], [0, 7, 6, 6, 1, 2, 0, 3, 5, 0, 8, 0, 8, 7, 4, 3], [0, 4, 3, 4, 9, 0, 1, 9, 7, 7, 8, 6, 4, 6, 9, 5], [6, 5, 1, 9, 9, 2, 2, 7, 4, 2, 7, 2, 2, 3, 7, 2], [7, 1, 9, 6, 1, 2, 7, 0, 9, 6, 6, 4, 4, 5, 1, 0], [3, 4, 9, 2, 8, 3, 1, 2, 6, 9, 7, 0, 2, 4, 2, 0], [5, 1, 8, 8, 4, 6, 8, 5, 2, 4, 1, 6, 2, 2, 9, 7]];
console.log(minPathSum(d)); 
