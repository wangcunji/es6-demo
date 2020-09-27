/**
 * 235. 二叉搜索树的最近公共祖先
 * https: //leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // const tracks = [];
    // const helper = (tree, val) => {
    //     if (tree === null) return;
    //     tracks.push(tree);
    //     if (tree.val === val) {
    //         return;
    //     }
    //     if (tree.val > val) {
    //         helper(tree.left);
    //     } else if (tree.val < val) {
    //         helper(tree.right);
    //     }
    // }
    // helper(root, p.val);
    // const pTracks = tracks.splice(0);
    // helper(root, q.val);
    // const qTracks = tracks.splice(0);
    // let i = pTracks.length - 1;
    // let j = qTracks.length - 1;
    // for (; i > 0; i--) {
    //     const pItem = pTracks[i];
    //     for (; j > 0; j--) {
    //         const qItem = qTracks[j];
    //         if (pItem.val === qItem.val) {
    //             return pItem.val;
    //         }
    //     }
    // }
    // 更优写法
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};
