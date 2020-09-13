/**
 * 79. 单词搜索
 * 给定一个二维网格和一个单词， 找出该单词是否存在于网格中。
 * 单词必须按照字母顺序， 通过相邻的单元格内的字母构成，
 * 其中“ 相邻” 单元格是那些水平相邻或垂直相邻的单元格。
 * 同一个单元格内的字母不允许被重复使用。
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const n = board.length;
    const m = board[0].length;
    const strLen = word.length;
    const firstWord = word.charAt(0);
    if (n === 0 || m === 0 || !firstWord) {
        return false;
    }
    const used = new Array(n); // 二维矩阵used
    for (let k = 0; k < n; k++) {
        used[k] = new Array(m);
    }
    const helper = (y, x, i) => {
        if (i > strLen - 1) {
            console.log(current, y, x, i, strLen);
            return true;
        }
        if (y >= n || y < 0 || x >= m || x < 0) {
            return false;
        }
        const current = board[y][x];
        const w = word.charAt(i);
        if (used[y][x] || current !== w) {
            return false;
        }
        used[y][x] = true;
        const canFindRest = helper(y - 1, x, i + 1) ||
        helper(y + 1, x, i + 1) ||
        helper(y, x - 1, i + 1) ||
        helper(y, x + 1, i + 1);
        if (canFindRest) {
            return true;
        }
        used[y][x] = false;
        return false;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === firstWord && helper(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

// console.log(exist([
//         ["a", "a", "a", "a"],
//         ["a", "a", "a", "a"],
//         ["a", "a", "a", "a"]
//     ], 'aaaaaaaaaaaaa'))

// console.log(exist([
//         ["C", "A", "A"],
//         ["A", "A", "A"],
//         ["B", "C", "D"]
//     ], "AAB"))

// console.log(exist([
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"]
// ], 'ABCCED'));

console.log(exist([
        ["b"],
        ["a"],
        ["b"]
    ], "bbabab"));