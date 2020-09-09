
function person() {}

// 寄生式继承是和原型式继承紧密相关的思路

function object (o){
    function F(){};
    F.prototype = o;
    return new F();
}

function createAnother(original){
    var clone = object(original); //通过调用函数创建一个新对象
    clone.sayHi = function () { //以某种方式来增强这个对象
        console.log("Hi");
    };
    return clone;   //返回这个对象
}

var anotherPerson = createAnother(person);

anotherPerson.sayHi();

// 存在的问题：使用寄生式继承来为对象添加函数，会由于不能做到函数复用而降低效率；这一点与构造函数模式类似
