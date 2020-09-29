/**
 * 二叉树的前序遍历
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
 * @return {number[]}
 * 递归
 */
var preorderTraversal = function (root) {
    const result = [];
    const helper = (tree) => {
        if (tree === null) return;
        result.push(tree.val);
        helper(tree.left);
        helper(tree.right);
    }
    helper(root);
    return result;
};

/**
 * @param {*} root 
 * @return {number[]}
 * 迭代--出入栈
 */
var preorderTraversalIteration = function (root) {
    const stacks = [];
    const result = [];
    let tree = root;
    while (tree || stacks.length !== 0) {
        if (!tree.isView) {
            result.push(tree.val);
            tree.isView = true;
            stacks.push(tree);
            tree = tree.left || stacks.pop();
        } else {
            tree = tree.right || stacks.pop();
        }
    }
    return result;
};

