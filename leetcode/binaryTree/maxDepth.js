/**
 * 二叉树的最大深度
 * https: //leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoh1zg/
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
 * 递归
 */
var maxDepth = function (root) {
    const helper = (tree, level) => {
        if (tree === null) return 0;
        if (tree.left || tree.right) {
            return Math.max(helper(tree.left, level + 1), helper(tree.right, level + 1));
        } else {
            return level;
        }
    }
    return helper(root, 1);
};

/**
 * @param {TreeNode} root
 * @return {number}
 * 迭代 --- 解释见levelOrder
 */
var maxDepthIteration = function (root) {
    let num = 0;
    const stacks = [];
    if (root === null) return num;
    stacks.push(root);
    stacks.push(null);
    let tree;
    while (stacks.length !== 0) {
        tree = stacks.shift();
        if (tree) {
            tree.left && stacks.push(tree.left);
            tree.right && stacks.push(tree.right);
        } else {
            num++;
            // 当stacks的长度为零时表明到最后一层，此时不用传入null，否则传入null，类似封口
            stacks.length > 0 && stacks.push(null);
        }
    }
    return num;
};
