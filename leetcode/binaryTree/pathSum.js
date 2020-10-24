/**
 * 剑指 Offer 34. 二叉树中和为某一值的路径
 * https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/ 
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) return [];
    const result = [];
    const helper = (tree, count, path) => {
        count += tree.val;
        path.push(tree.val);
        if (count > sum) {
            return;
        }
        if (count === sum && !tree.left && !tree.right) {
            result.push(path.slice());
            return;
        }
        if (tree.left) {
            helper(tree.left, count, path.slice());
        }
        if (tree.right) {
            helper(tree.right, count, path.slice());
        }
    };
    helper(root, 0, []);
    return result;
};
