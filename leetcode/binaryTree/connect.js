/**
 * 116. 填充每个节点的下一个右侧节点指针
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
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
    if (!root) return root;
    let tree = root;
    const stacks = [tree];
    stacks.push(null);
    let prev = null;
    while (stacks.length) {
        tree = stacks.shift();
        if (prev) {
            prev.next = tree;
        }
        prev = tree;
        if (tree) {
            tree.left && stacks.push(tree.left);
            tree.right && stacks.push(tree.right);
        } else {
            stacks.length && stacks.push(null);
        }
    }
    return tree;
};
