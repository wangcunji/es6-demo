var mergeTwoLists = function(l1, l2) {
    let result = new ListNode(0);
    let result0 = result,val1 = l1,val2 = l2;
    while (val1||val2){
        if(!val2){
            result0.next =  val1;
            val1 = val1.next;
            result0 = result0.next;
            return result.next;
        };
        if(!val1){
            result0.next =  val2;
            val2 = val2.next;
            result0 = result0.next;
            return result.next;
        };
        if(val1&&val2){
            if(val1.val<=val2.val){
                result0.next =  val1;
                val1 = val1.next;
                result0 = result0.next;
            } else {
                result0.next =  val2;
                val2 = val2.next;
                result0 = result0.next;
            }
        }
    };
    return result.next;
};