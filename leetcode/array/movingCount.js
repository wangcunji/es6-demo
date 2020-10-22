/**
 * 剑指 Offer 13. 机器人的运动范围
 * https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let path = 0;
    const visited = new Array(m).fill(new Array(n));
    const getCount = (num) => {
        let answer = 0;
        while(num) {
            answer += num % 10;
            num = Math.floor(num / 10);
        }
        return answer;
    }
    const helper = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n) {
            return;
        }
        const count = getCount(i) + getCount(j);
        if (count <= k && !visited[i][j]) {
            visited[i][j] = true;
            path++;
            helper(i - 1, j);
            helper(i + 1, j);
            helper(i, j - 1);
            helper(i, j + 1);
        }
    }
    console.log(visited);
    helper(0, 0);
    return path;
};
