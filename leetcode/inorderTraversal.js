/**
 * 94. 二叉树的中序遍历
 * 给定一个二叉树， 返回它的中序 遍历。
 * 递归算法很简单， 你可以通过迭代算法完成吗？
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const result = [];
    const path = [];
    const tempTree = root;
    while (tempTree !== null || path.length !== 0) {
        while (tempTree !== null) {
            path.push(tempTree);
            tempTree = tempTree.left;
        }
        if (path.length !== 0) {
            tempTree = path.pop();
            result.push(tempTree.val);
            tempTree = tempTree.right;
        }
    }
    return result;
};
