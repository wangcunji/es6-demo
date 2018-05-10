function ListNode(val) {
    this.val = val;
    this.next = null;
};

var removeNthFromEnd = function(head, n) {
    let result = new ListNode(0);
    let result0 = result;
    let val1 = head,val2 = head,index = 0,i=0;
    while(val1){
        index++;
        val1 = val1.next;
    }
    if(index-n===0){
        return head.next;
    };
    if(n===0){
        return head
    } else {
        while (i<index-n){
            i++;
            result0.next = new ListNode(val2.val);
            val2 = val2.next;
            result0 = result0.next
        }
        result0.next = val2.next;
    }
    return result.next();
};