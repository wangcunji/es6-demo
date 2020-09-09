/**
 * 77. 组合
 * 给定两个整数 n 和 k， 返回 1...n 中所有可能的 k 个数的组合。
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 回溯
 */
var combine = function (n, k) {
    const res = [];

    const helper = (start, path) => { // start是枚举选择的起点 path是当前构建的路径（组合）
        if (path.length == k) {
            res.push(path.slice()); // 拷贝一份path，推入res
            return; // 结束当前递归
        }
        for (let i = start; i <= n; i++) { // 枚举出所有选择
            path.push(i); // 选择
            helper(i + 1, path); // 向下继续选择，当i超出时，不会再向path添加数据，这时pop出的就是上一个添加的数据
            path.pop(); // 撤销选择--回溯
        }
    };

    helper(1, []); // 递归的入口，从数字1开始选
    return res;
};

console.log(combine(4, 3));

