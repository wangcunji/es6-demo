var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let result0 = result;
    let val1 = l1,val2 = l2,sum = 0,remainder = 0;
    while (val1 || val2 || remainder==1){
        if(!val1)val1 = new ListNode(0);
        if(!val2)val2 = new ListNode(0);
        sum = val1.val+val2.val+remainder;
        if(sum>9){
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

// console.log(addTwoNumbers([2,4,3],[5,6,4]))
