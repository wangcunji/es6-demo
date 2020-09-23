/**
 * 538. 把二叉搜索树转换为累加树
 * 给定一个二叉搜索树（ Binary Search Tree）， 
 * 把它转换成为累加树（ Greater Tree)， 
 * 使得每个节点的值是原来的节点值加上所有大于它的节点值之和。
 * https: //leetcode-cn.com/problems/convert-bst-to-greater-tree/
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let num = 0
    const helper = (tree) => {
        if (!tree) return;
        helper(tree.right); // 二叉搜索树，右边的总比当前的大，先递归右子树
        num += tree.val; // num加上当前的值，当右子树遍历完时，已加上了所有右子树的值
        tree.val = num; // 当前节点赋值
        helper(tree.left); // 遍历右子树，此时num已加上了所有右子树的值以及当前节点的值
    }
    helper(root);
    return root;
};
