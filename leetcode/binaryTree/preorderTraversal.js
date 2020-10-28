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
    if (!root) return [];
    let stacks = [root];
    let tree = root;
    const result = [];
    while(stacks.length > 0) {
        tree = stacks.pop();
        result.push(tree.val);
        tree.right && stacks.push(tree.right);
        tree.left && stacks.push(tree.left);
    }
    return result;
};
