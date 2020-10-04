/**
 * 701. 二叉搜索树中的插入操作
 * https: //leetcode-cn.com/problems/insert-into-a-binary-search-tree/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (root === null) {
        root = new TreeNode(val);
        return root;
    }
    let tree = root;
    while (tree) {
        if (val > tree.val) {
            if (tree.right) {
                tree = tree.right;
            } else {
                tree.right = new TreeNode(val);
                tree = null;
            }
        } else {
            if (tree.left) {
                tree = tree.left;
            } else {
                tree.left = new TreeNode(val);
                tree = null;
            }
        }
    }
    return root;
};