/**
 * 114. 二叉树展开为链表
给定一个二叉树，原地将它展开为一个单链表。
 */

/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var flatten = function (root) {
    buildLinkList(root);
};

function buildLinkList(node) {
    let temp = null;
    let right;
    if (node === null) return null;
    if (node.right) {
        temp = node.right;
    }
    if (node.left) {
        node.right = buildLinkList(node.left);
        rightLast = node.right;
        while (rightLast.right) {
            rightLast = rightLast.right;
        }
        rightLast.right = temp;
        node.left = null;
    }
    return node;
}

// function buildLinkList(node) {
//     if (node === null) return null;
//     if (node.right) {
//         buildLinkList(node.right);
//     }
//     if (node.left) {
//         let left = buildLinkList(node.left);
//         let leftEnd = left;
//         while (leftEnd.right) {
//             leftEnd = leftEnd.right;
//         }
//         leftEnd.right = node.right;
//         node.right = left;
//         node.left = null;
//     }
//     return node;
// }