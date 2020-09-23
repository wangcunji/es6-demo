/**
 * 617. 合并二叉树
 * https: //leetcode-cn.com/problems/merge-two-binary-trees/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    const result = new TreeNode(0);
    const helper = (t, t1, t2) => {
        t.val = isNullReZero(t1) + isNullReZero(t2);
        let t1Left = t1 ? t1.left : null;
        let t2Left = t2 ? t2.left : null;
        let t1Right = t1 ? t1.right : null;
        let t2Right = t2 ? t2.right : null;
        if (t1Left || t2Left) {
            t.left = new TreeNode(0);
            helper(t.left, t1Left, t2Left);
        }
        if (t1Right || t2Right) {
            t.right = new TreeNode(0);
            helper(t.right, t1Right, t2Right);
        }
    }
    const isNullReZero = (node) => {
        return node !== null ? node.val : 0;
    }
    helper(result, t1, t2);
    return result;
};
/**
 * 优化方法
 */

var mergeTrees = function (t1, t2) {
    if (!t1 || !t2) {
        return t1 || t2
    }
    t1.val += t2.val
    t1.left = mergeTrees(t1.left, t2.left)
    t1.right = mergeTrees(t1.right, t2.right)
    return t1
};
