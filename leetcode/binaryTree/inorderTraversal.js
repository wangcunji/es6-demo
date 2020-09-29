/**
 * 二叉树的中序遍历
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
var inorderTraversal = function (root) {
    const result = [];
    const helper = (tree) => {
        if (tree === null) return;
         helper(tree.left);
         result.push(tree.val);
         helper(tree.right);
    }
    helper(root);
    return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 迭代
 */
var inorderTraversalIteration = function (root) {
    const result = [];
    const stacks = [];
    let tree = root;
    while (tree || stacks.length !== 0) {
        while(tree) {
            stacks.push(tree);
            tree = tree.left;
        }
        tree = stacks.pop();
        result.push(tree.val);
        tree = tree.right;
    }
    return result;
};
