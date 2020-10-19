/**
 * 19. 删除链表的倒数第N个节点
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // const stacks = [];
    // let list = head;
    // while(list) {
    //     stacks.push(list.val);
    //     list = list.next;
    // }
    // const len = stacks.length;
    // stacks.splice(len - n, 1);
    // const result = new ListNode(0);
    // let i = 0;
    // let item;
    // list =  result;
    // while ( i < len) {
    //     item = stacks[i];
    //     list.next = new ListNode(item);
    //     list = list.next;
    // }
    // return result.next;
    let lastN = 0;
    const helper = (head) => {
        if (!head) {
            return;
        }
        let next = helper(head.next);
        lastN++;
        // 此时删除倒数节点 -- 1->2>3 ==> 2->3，并返回
        if (lastN === n) {
            head = next;
        }
        // 修正上一个节点指向 此时next经过上一次的修改，跳过了删除节点
        if (lastN === n + 1) {
            head.next = next;
        }
        // 返回节点
        return head;
    }
    return helper(head);
};
