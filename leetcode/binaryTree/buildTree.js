/**
 * 106. 从中序与后序遍历序列构造二叉树
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    let rootIndex;
    const indexMap = new Map();
    const helper = (inLeft, inRight) => {
        // 如果这里没有节点构造二叉树了，就结束
        if (inLeft > inRight) {
            return null;
        }

        // 选择 post_idx 位置的元素作为当前子树根节点
        const rootVal = postorder[rootIndex];
        const root = new TreeNode(rootVal);

        // 根据 root 所在位置分成左右两棵子树
        const index = indexMap.get(rootVal);

        // 下标减一
        rootIndex--;
        // 构造右子树
        root.right = helper(index + 1, inRight);
        // 构造左子树
        root.left = helper(inLeft, index - 1);
        return root;
    }

    // 从后序遍历的最后一个元素开始
    rootIndex = postorder.length - 1;

    // 建立（元素，下标）键值对的哈希表
    let idx = 0;
    inorder.forEach((val, idx) => {
        indexMap.set(val, idx);
    });
    return helper(0, inorder.length - 1);
};
