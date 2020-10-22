/**
 * 剑指 Offer 12. 矩阵中的路径
 * https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const len = word.length;
    const columnLen = board.length;
    if (!board[0]) return false;
    const rowLen = board[0].length;
    /**
     * @param {*} i 列下标
     * @param {*} j 行下标
     * @param {*} n word下标
     */
    const helper = (i, j, n) => {
        const letter = word[n];
        if (i < 0 || j < 0 || i >= columnLen
        || j >= rowLen || n >= len || board[i][j] !== letter ) {
            return false;
        }
        if (n === len - 1) {
            return true;
        }
        board[i][j] = '-';
        if (board[i][j] === letter) {
            path[`${i}${j}`] = true;
            n++;
        } else {
            return false;
        }
        let res = helper(i - 1, j, n + 1) || helper(i + 1, j, n + 1)
            || helper(i, j - 1, n + 1) || helper(i, j + 1, n + 1);
        board[i][j] = letter;
        return res;
    }
    for (let x = 0; x < columnLen; x++) {
        for (let y = 0; y < rowLen; y++) {
            if (helper(x, y, 0)) {
                return true;
            }
        }
    }
    return false;
};
