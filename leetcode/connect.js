/**
 * 117. 填充每个节点的下一个右侧节点指针 II
 * https: //leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/
 */
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) return null;
    const stacks = [root];
    while (stacks.length) {
        const len = stacks.length;
        let last = null;
        for (let i = 1; i <= len; ++i) {
            let tree = stacks.shift();
            tree.left && stacks.push(tree.left);
            tree.right && stacks.push(tree.right);
            if (i !== 1) {
                last.next = tree;
            }
            last = tree;
        }
    }
    return root;
}
