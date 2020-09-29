/**
 * 路径总和
 * https: //leetcode-cn.com/leetbook/read/data-structure-binary-tree/xo566j/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    let result = false;
    if (root === null) return false;
    const helper = (tree, count) => {
        count += tree.val;
        if (count === sum && !tree.left && !tree.right) {
            result = true;
            return;
        }
        tree.left && helper(tree.left, count);
        tree.right && helper(tree.right, count);
    }
    helper(root, 0);
    return result;
};
// [5,4,8,11,null,13,4,7,2,null,null,null,1]
// 22
