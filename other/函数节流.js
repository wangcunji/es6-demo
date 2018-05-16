var processor = {
    timeoutId:null,
    // 实际进行处理的方法
    perfprmProcessing: function(){
        // 实际执行代码
    },

    // 初始处理调用的方法
    process:function(){
        clearTimeout(this.timeoutId);

        var that = this;
        this.timeoutId = setTimeout(function(){
            that.perfprmProcessing();
        },100);
    }
}
// 尝试执行
processor.process();


// 此模式可以用throttle函数简化
function throttle(method,context){
    clearTimeout(method.tid);
    method.tid = setTimeout(function(){
        method.call(context);
    },100);
}
// 接收两个参数：要执行的函数以及在哪个作用域执行。

function foo (){
    this.name = "milk";
    this.sayName = function () {
        console.log(this.name);
    }
};

var obj = {
    name:'john'
};

var instance = new foo();

instance.sayName();

instance.sayName.call(obj);

// instance.sayName();



