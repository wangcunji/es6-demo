function EventTarget(){
    this.handlers = {};
};

EventTarget.prototype = {
    constructor:EventTarget,
    // 添加事件
    addHandler: function(type,handler){
        // 如果事件不存在，先初始化
        if(typeof this.handlers[type] == 'underfined'){
            this.handlers[type] = [];
        };
        this.handlers[type].push(handler);
    },
    // 触发事件
    fire: function(event){
        if(!event.target){
            event.target = this;
        };
        if(this.handlers[event.type] instanceof Array){
            var handlers = this.handlers[event.type];
            for(var i=0,len = handlers.length;i<len;i++){
                handlers[i](event);
            }
        }
    },

// 移除事件
    removeHandler:function(type,handler){
        if(this.handlers[type] instanceof Array){
            var handlers = this.handlers[type];
            for(var i=0,len=handlers.length;i<len;i++){
                if(handlers[i] === handler){
                    break;
                }
            };

            handlers.splice(i,1);
        }
    }
}

// 使用
function handleMessage(event){
    alert("Message received:"+ event.message);
}

// 创建一个新对象
var target = new EventTarget();
// 添加一个事件处理程序
target.addHandler("message",handleMessage);
// 触发事件
target.fire({
    type:"message",
    message:"Hello world!"
});
// 删除事件处理程序
target.removeHandler("message",handleMessage);
// 再次触发，应该没有处理程序
target.fire({
    type:"message",
    message:"Hello world!"
});

