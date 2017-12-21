var obj = {
    name:'test',
    age:14,
    addr:'杭州市',
    showInfo(){
        console.log(this.name)
    }
};
Object.defineProperty(obj,'name',{
    enumerable:true,
    configurable:true,
    // writable:true,
    // value:'default',
    get:function (value) {
        console.log('tt',value)
        console.log('获取数据')
    },
    set:function (value) {
        console.log(value)
        console.log('数据变化')
        return value
    }
})
// console.log(getter());
let proper = Object.getOwnPropertyDescriptor(obj,'age')
// console.log(proper)
var arrayMethod = Object.create(Array.prototype);
['push','shift'].forEach(function(method){
    Object.defineProperty(arrayMethod,method,{
        value:function(){
            console.log(arguments)
            var i = arguments.length
            var args = new Array(i)
            while (i--) {
                args[i] = arguments[i]
            }
            console.log(args)
            var original = Array.prototype[method];
            var result = original.apply(this,args);
            console.log("已经控制了，哈哈");
            return result;
        },
        enumerable: true,
        writable: true,
        configurable: true
    })
})
var bar = [1,2];
bar.__proto__ = arrayMethod;
bar.push(3,4);//控制台会打印出 “已经控制了，哈哈”;并且bar里面已经成功的添加了成员 ‘3’
var onj = {'a':1,'b':2} 
Array.prototype.push.call(onj,5)
console.log(bar)
console.log(onj)
console.log(Object.keys(onj))
