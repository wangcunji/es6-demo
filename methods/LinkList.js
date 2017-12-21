function LinkedList(){
    /*节点定义*/
    var Node = function(element){
        this.element = element; //存放节点内容
        this.next = null; //指针
    }
    
    var length = 0, //存放链表长度
        head = null; //头指针
    
    this.append = function(element){
        var node = new Node(element),
            current; //操作所用指针
        
        if (!head){
            head = node;
        }else {
            current = head;
            
            while(current.next){
                current = current.next;
            }
            
            current.next = node;
        }
        
        length++;
        return true;
    };
    
    this.insert = function(position, element){
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;
            
            if(position === 0){
                node.next = current;
                head = node;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            
            length++;
            return true;
        }else{
            return false;
        }
    };
    
    this.removeAt = function(position){
        if(position > -1 && position < length){
            var current = head,
                previous,
                index = 0;
            
            if (position === 0) {
                
                head = current.next;
                
            }else{
                
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                
                previous.next = current.next;
            };
            
            length--;
            return current.element;
        }else{
            return null;
        }
    };
    
    this.remove = function(element){
        var current = head,
            previous;
        
        if(element === current.element){
            head = current.next;
            length--;
            return true;
        }
        previous = current;
        current = current.next;
        
        while(current){
            if(element === current.element){
                previous.next = current.next;
                length--;
                return true;
            }else{
                previous = current;
                current = current.next;
            }
        }
        return false;
    };
    
    this.remove = function(){
        if(length < 1){
            return false;
        }
        
        var current = head,
            previous;
        
        if(length == 1){
            head = null;
            length--;
            return current.element;
        }
        
        
        while(current.next !== null){
            previous = current;
            current = current.next;
        }
        
        previous.next = null;
        length--;
        return current.element;
    };
    
    this.indexOf = function(element){
        var current = head,
            index = 0;
        
        while(current){
            if(element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        
        return false;
    };
    
    this.isEmpty = function(){
        return length === 0;
    };
    
    this.size = function(){
        return length;
    };
    
    this.toString = function(){
        var current = head,
            string = '';
        
        while(current){
            string += current.element;
            current = current.next;
        }
        return string;
    };
    
    this.getHead = function(){
        return head;
    }
    
}
var ll = new LinkedList()
ll.append('11')
console.log(ll)