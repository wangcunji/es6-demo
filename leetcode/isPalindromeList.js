// 判断回文链表

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var isPalindrome = function (head) {
    let node = new ListNode(0),
        headNode = head;
    let tempNode;
    while (headNode) {
        tempNode = node.next;
        node.next = new ListNode(headNode.val);
        node.next.next = tempNode;
        headNode = headNode.next;
    };
    let result = node.next;
    headNode = head;
    while (headNode){
        if(headNode.val!==result.val){
            return false;
        };
        headNode = headNode.next;
        result = result.next;
    };
    return true
};

var head = new ListNode(1);
head.next = new ListNode(2);

console.log(isPalindrome(head))


