/**
 * 剑指 Offer 32 - I. 从上到下打印二叉树
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
var levelOrder = function(root) {
    if (!root) return [];
    const stacks = [root];
    const result = [];
    let tree = root;
    while(stacks.length > 0) {
        tree = stacks.shift();
        tree.left && stacks.push(tree.left);
        tree.right && stacks.push(tree.right);
        result.push(tree.val);
    }
    return result;
};
