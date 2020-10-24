/**
 * 剑指 Offer 35. 复杂链表的复制
 * https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/
 */
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return null;
    }
    const map = new Map();
    let node = head; // 当前节点
    const copyHead = new Node(node.val);
    let copyNode = copyHead; // 当前节点的copy
    map.set(node, copyNode);

    while (node.next) {
        copyNode.next = new Node(node.next.val);
        node = node.next;
        copyNode = copyNode.next;
        map.set(node, copyNode);
    }

    copyNode = copyHead;
    node = head;
    while (copyNode) {
        copyNode.random = map.get(node.random);
        copyNode = copyNode.next;
        node = node.next;
    }

    return copyHead;
};
