/*jshint esversion: 6 */

console.log(a)

var a = 'qwe';

console.log(a)

console.log(b);

var b = '123';

console.log(b)

// console.log(c);

// const c = 2;

// let 关于变量提升的思考  https://www.jianshu.com/p/0f49c88cf169


x = "global";
// function scope:
(function() {
    x; // not "global"
    // console.log(x)
    let x;
}());
// block scope (not for `var`s):
{
    x; // not "global"
    console.log(x)

    let x;
}




