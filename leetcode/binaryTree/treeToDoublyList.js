/**
 * 剑指 Offer 36. 二叉搜索树与双向链表
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/
 */
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    const stacks = [root];
    let tree = root;
    let transNode = new Node(0);
    let node = transNode;
    while(stacks.length > 0) {
        while(tree) {
            stacks.push(tree);
            tree = tree.left;
        }
        tree =  stacks.pop();
        node.left = new Node(tree.val);
        node.left.right = node;
        node = node.left;
        tree = tree.right;
    }
    console.log(transNode);
    transNode = transNode.left;
    node.left = transNode;
    transNode.right = node;
    return transNode;
};
