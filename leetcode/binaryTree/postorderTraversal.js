/**
 * 二叉树的后序遍历
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
var postorderTraversal = function (root) {
    const result = [];
    const helper = (tree) => {
        if (tree === null) return;
        helper(tree.left);
        helper(tree.right);
        result.push(tree.val);
    }
    helper(root);
    return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 迭代
 */
var postorderTraversalIteration = function (root) {
    const result = [];
    const stacks = [];
    let tree = root;
    if (tree) stacks.push(tree);
    while (stack.length) {
        tree = stack.pop();
        if (tree) {
            stack.push(tree);
            stack.push(null);
            tree.right && stack.push(tree.right);
            tree.left && stack.push(tree.left);
        } else {
            result.push(stack.pop().val);
        }
    }
    return result;
};
