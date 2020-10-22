/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * 快慢指针
 */
var reorderList = function(head) {
    if (!head || !head.next) return;
    let quickNode = head.next;
    let slowNode = head;
    while(quickNode && quickNode.next) {
        slowNode = slowNode.next;
        quickNode = quickNode.next.next;
    };
    const reverseList = (node) => {
        let prev = null;
        while(node) {
            let tempNode = node.next;
            node.next = prev;
            prev = node;
            node = tempNode;
        }
        return prev;
    }
    let later = slowNode.next;
    slowNode.next = null;
    let snippetNode = reverseList(later);
    let node = head;
    while(node && snippetNode) {
        let tempSnippet = snippetNode.next;
        let tempNext = node.next;

        node.next = snippetNode;
        snippetNode.next = tempNext;

        node = tempNext;
        snippetNode = tempSnippet;
    }
};
