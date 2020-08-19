/**
 * 95. 不同的二叉搜索树 II
 * 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。
 */

/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 * 思路： 从1到n，在中间找一个index，分为左右两部分，index从1到n变化，最后以index为根结点，
 * 将得到的左边和右边的搜索树全部情形分别遍历，即获得以index为根结点的left*right种搜索树
 */
var generateTrees = function (n) {
    if(n === 0) return [];
    function generateTree(start, end) {
        if (start > end) return [null];
        if (start === end) return [new TreeNode(start)];
        const result = [];
        for (let i = start; i <= end; i++) {
            const leftTrees = generateTree(start, i - 1);
            const rightTrees = generateTree(i + 1, end);
            for (let leftTree of leftTrees) {
                for (let rightTree of rightTrees) {
                    const root = new TreeNode(i);
                    root.left = leftTree;
                    root.right = rightTree;
                    result.push(root);
                }
            }
        }
        return result;
    }
    return generateTree(1, n);
};
