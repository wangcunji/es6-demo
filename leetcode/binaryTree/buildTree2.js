/**
 * 剑指 Offer 07. 重建二叉树
 * https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) return null;
    let i = 0;
    const helper = (treeVals) => {
        const rootVal = preorder[i];
        const index = treeVals.indexOf(root);
        const left = treeVals.slice(0, index);
        const right = treeVals.slice(index + 1);
        const root = new TreeNode(rootVal);
        if (left.length > 0) {
            i++;
            root.left = helper(left);
        } else {
            root.left = null;
        }
        if (right.length > 0) {
            i++;
            root.right = helper(right);
        } else {
            root.right = null;
        }
        return root;
    }
    return helper(inorder);
};
