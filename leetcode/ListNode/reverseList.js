/**
 * 206. 反转链表
 * https://leetcode-cn.com/problems/reverse-linked-list/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let node = new ListNode(0);
    while(head) {
        let temp = node.next;
        node.next = head;
        node.next.next = temp;
        head = head.next;
    }
    return node.next;
};
