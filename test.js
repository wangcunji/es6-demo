// var cat = {
//     say() {
//         console.log("meow~");
//     },
//     jump() {
//         console.log("jump");
//     }
// }
// var tiger = Object.create(cat, {
//     say: {
//         writable: true,
//         configurable: true,
//         enumerable: true,
//         value: function () {
//             console.log("roar!");
//         }
//     }
// }) 

// var anotherCat = Object.create(cat);

// anotherCat.say();

// var anotherTiger = Object.create(tiger);

// anotherTiger.say();

// var o = new Object;
// var n = new Number;
// var s = new String;
// var b = new Boolean;
// var d = new Date;
// var arg = function () {
//     return arguments
// }();
// var r = new RegExp;
// var f = new Function;
// var arr = new Array;
// var e = new Error;
// console.log([o, n, s, b, d, arg, r, f, arr, e].map(v => Object.prototype.toString.call(v)));
console.log([
    [1, 2]
].includes([1, 2]))
console.log([1, 2].includes(2))

