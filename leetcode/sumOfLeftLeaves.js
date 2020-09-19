/**
 * 404. 左叶子之和
 * https: //leetcode-cn.com/problems/sum-of-left-leaves/
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
var sumOfLeftLeaves = function (root) {
    let result = 0;
    if (!root) return result;
    const help = (tree, direction) => {
        if (direction === 'left' && !tree.left && !tree.right) {
            result += tree.val;
        }
        if (tree.left) {
            help(tree.left, 'left');
        }
        if (tree.right) {
            help(tree.right, 'right');
        }
    }
    help(root, '');
    return result;
};