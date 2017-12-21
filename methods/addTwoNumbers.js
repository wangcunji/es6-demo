var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let val1 = l1,val2 = l2,sum = 0;
    while (val1 || val2){
        if(!val1) val1 = new ListNode(0);
        if(!val2) val2 = new ListNode(0);
        sum = val1.val+val2.val;
        if(sum>9){
            val1.next.val++
            result.next = new ListNode(sum % 10);
        } else {
            result.next = new ListNode(sum);
        }
        val1 = val1.next;
        val2 = val2.next;
        result = result.next;
    }
    return result.next
};

console.log(addTwoNumbers([2,4,3],[5,6,4]))
