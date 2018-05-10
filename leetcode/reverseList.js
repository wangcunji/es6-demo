/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }  反串列表
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var reverseList = function (head) {
    let node = new ListNode(0),
        headNode = head;
    let tempNode;
    while (headNode) {
        tempNode = node.next;
        node.next = new ListNode(headNode.val);
        node.next.next = tempNode;
        headNode = headNode.next;
    };
    return node.next
};

var head = new ListNode(1);
head.next = new ListNode(2);


console.log(reverseList(head))