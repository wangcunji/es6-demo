/**
 * Created by Administrator on 2017/10/11.
 */
//设置默认值
function log(x, y = 'World') {
    console.log(x, y);
}
//参数变量是默认声明的，所以不能用let或const再次声明。
//使用参数默认值时，函数不能有同名参数。
//参数默认值是惰性求值的。
log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

//与解构赋值结合使用

function foo({f,l=1}) {
    console.log(f,l)
}
foo({f:2,l:3})//2,3

function fetch(url, { body = '', method = 'GET', headers = {} }) {
    console.log(method);
}
fetch('http://example.com', {})
// "GET"

// fetch('http://example.com')
// 报错  第二个参数无默认值
function fetch1(url, { body = '', method = 'GET', headers = {} }={}) {
    console.log(method);
}
fetch1('http://example.com')
// "GET"

function m1({x = 0, y = 0} = {}) {
    return [x, y];
}
function m2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
console.log(m1({x:1}))//[1,0]
console.log(m2({x:1}))//[1,undefined]

//函数的 length 属性
//函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
//如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
// (function (a, b, c = 5) {}).length // 2
// (function (a = 0, b, c) {}).length // 0
// (function (a, b = 1, c) {}).length // 1

//作用域
var s = 1;

function f(s, y = s) {
    console.log(y);
}

f(2) // 2

var x = 1;
function foo(x, y = function() { x = 2; }) {
    var x = 3;
    y();
    console.log(x);
}

foo() // 3
x // 1

//rest参数
function add(...values) {
    let sum = 0;
    
    for (var val of values) {
        sum += val;
    }
    
    return sum;
}

add(2, 5, 3) // 10
//其后不能加任何参数

//ES6严格模式不能再在函数内部声明，函数内部和参数都遵从相同的模式，无参数函数内部可声明严格模式

//函数name属性
function foo1() {

}
foo1.name //foo1

var f = function () {};

// ES5
f.name // ""

// ES6
f.name // "f"

//箭头函数
var f = v => v;
//等同于
var f = function(v) {
    return v;
};

var f1 = ()=>'a'
console.log(f1())//a
//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
// 报错
// let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem = id => ({ id: id, name: "Temp" });

//箭头函数可以让setTimeout里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42、
//箭头函数没有this,也不存在arguments、super、new.target。

let insert = (value)=>({into:(array)=>({after:(afterValue)=>{array.splice(array.indexOf(afterValue) + 1, 0, value);return array;}})})
console.log(insert(2).into([1, 3]).after(1)); //[1, 2, 3]
//注意返回对象用（）
//原函数
function insert(value) {
    return {into: function (array) {
        return {after: function (afterValue) {
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }};
    }};
}

//绑定this
//函数绑定运算符::
foo::bar;
// 等同于
bar.bind(foo);