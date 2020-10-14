/**
 * 530. 二叉搜索树的最小绝对差
 * https: //leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
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
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let prev = -1;
    let result = Infinity;
    const helper = (tree) => {
        if (tree === null) return;
        helper(tree.left);
        if (prev === -1) {
            prev = tree.val;
        } else {
            result = Math.min(result, tree.val - prev);
            prev = tree.val;
        }
        helper(tree.right);
    }
    helper(root);
    return result;
};
