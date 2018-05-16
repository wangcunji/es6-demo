console.log(a);//undefined

var a = function() {
    console.log('a');
}

b();//b

function b() {
    console.log('b');
}
//---------------------------------------------------------------
function f(a, b) {
    console.log(a);//打印出a函数
    console.log(b);//打印出2

    var b = 100;

    function a() {};
}

f(1, 2);
//--------------------------------------------------------------
console.log(foo)//函数foo

var foo = 1

console.log(foo)//1

foo = 2;

console.log(foo);//2

function foo() {
    console.log('foo')
}

console.log(foo);//2
//------------------------------------------------------------------
var a = 1;

function fn() {
    console.log(a);//undefined  此作用域内a尚未定义
    var a = 2;
}
fn();
console.log(a);//1





