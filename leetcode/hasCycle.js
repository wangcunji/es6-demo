/**
 * 141. 环形链表
 * 给定一个链表， 判断链表中是否有环。
 * https: //leetcode-cn.com/problems/linked-list-cycle/
 */

/**
 * @param {*} head 
 */
var hasCycle = function(head) {
    while(head){
        if (head.isVisit) {
            return true;
        } else {
            head.isVisit = true;
        };
        head = head.next;
    };
    return false;
};



