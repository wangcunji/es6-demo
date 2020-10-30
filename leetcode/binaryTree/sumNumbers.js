/**
 * 129. 求根到叶子节点数字之和
 * https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/ 
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
var sumNumbers = function(root) {
    let result = [];
    const helper = (tree, path) => {
        path += tree.val.toString();
        if (!tree.left && !tree.right) {
            result.push(path);
            return;
        }
        tree.left && helper(tree.left, path);
        tree.right && helper(tree.right, path);
    }
    return result.reduce((prev, item) => prev + +item, 0);
};
