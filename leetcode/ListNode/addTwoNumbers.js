/**
 * 2. 两数相加
 * https: //leetcode-cn.com/problems/add-two-numbers/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode(0);
    let result0 = result;
    let val1 = l1;
    let val2 = l2;
    let sum = 0;
    let remainder = 0;
    while (val1 || val2 || remainder == 1) {
        if (!val1) val1 = new ListNode(0);
        if (!val2) val2 = new ListNode(0);
        sum = val1.val + val2.val + remainder;
        if (sum > 9) {
            remainder = 1;
            sum = sum - 10;
        } else {
            remainder = 0;
        }
        result0.next = new ListNode(sum);
        val1 = val1.next;
        val2 = val2.next;
        result0 = result0.next;
    }
    return result.next
};
