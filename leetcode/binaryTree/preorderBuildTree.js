/**
 * 从前序与中序遍历序列构造二叉树
 * https: //leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoei3r/
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
var buildTree = function (preorder, inorder) {
    let indexMap = new Map();
    let rootIndex = 0;
    const helper = (indexLeft, indexRight) => {
        if (indexLeft > indexRight) {
            return null;
        }
        const rootVal = preorder[rootIndex];
        const tree = new TreeNode(rootVal);
        const index = indexMap.get(rootVal);
        rootIndex++;
        tree.left = helper(indexLeft, index - 1);
        tree.right = helper(index + 1, indexRight);
        return tree;
    }
    inorder.forEach((item, index) => {
        indexMap.set(item, index);
    });
    return helper(0, preorder.length - 1);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let a = [3, 9, 20, 15, 7]
let b = [9, 3, 15, 20, 7]

buildTree(a, b);
