//  环形链表 给定一个链表，判断链表中是否有环。


var hasCycle = function(head) {
    let obj= {};
    while(head){
        if(obj[head.val]){
            return true;
        };
        obj[head.val] = true;
        head = head.next;
    };
    return false;
};



