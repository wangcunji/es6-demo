//扩展运算符...
var array1 = [1,2,3]
console.log(...array1)//1,2,3

//主要用于函数调用
function add(x,y,z) {
    return x+y+z
}
add(...array1); // 6

//扩展运算符后面还可以放置表达式。
console.log(...[...(1>0?['a']:[]),'b'])//a,b

//扩展运算符应用
let arr = [4,5,6]
//es5
add.apply(null,arr)//15
//es6
add(...arr)//15

//将一个数组添加到另一个数组的尾部。

array1.push(...arr)//[ 1, 2, 3, 4, 5, 6 ]

//复制数组
let arr2 = [...arr]//[4,5,6]

//合并数组
let array2 = [...array1,...arr]//[ 1, 2, 3, 4, 5, 6 ]
//如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错

const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

//const [...rest,first ] = [1, 2, 3, 4, 5];//报错
//字符串
console.log([...'hello'])//[ "h", "e", "l", "l", "o" ]

//具有Iterator 接口的对象，都可以通过...转为真正的数组
// let nodelist = document.querySelectorAll('div')
// let array3 = [...nodelist]

//Map 和 Set 结构，Generator 函数
let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

let arr3 = [...map.keys()]; // [1, 2, 3]

const go = function*(){
    yield 1;
    yield 2;
    yield 3;
};

[...go()] // [1, 2, 3]

//Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。

let likeArray = {
    '0':'a',
    '1':'b',
    '2':'c',
    length:3
}//类数组对象
//es5
var narr = [].slice.call(likeArray);
//es6
let narr1 = Array.from(likeArray)// ['a', 'b', 'c']
Array.from('hello')
// ['h', 'e', 'l', 'l', 'o']
let namesSet = new Set(['a', 'b'])
Array.from(namesSet) // ['a', 'b']

Array.from({ length: 3 });
// [ undefined, undefined, undefined ]

//Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
let arrayLike = [1, 2, 3]

Array.from(arrayLike, x => x * x);

// 等同于
Array.from(arrayLike).map(x => x * x);

Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]

//Array.of方法用于将一组值，转换为数组。
Array.of('a','b','c')//['a','b','c']

//数组实例的 copyWithin()
// 将3号位复制到0号位
    [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

//数组实例的 find() 和 findIndex()
    [1, 5, 10, 15].find(function(value, index, arr) {//value值，index当前位置，arr原数组
    
    return value > 9;
}) // 10  findIndex方法返回位置，为2

//fill方法使用给定值，填充一个数组
    ['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']

//数组实例的 entries()，keys() 和 values()
for (let index of ['a', 'b'].keys()) {
    
    console.log(index);
}//对健名的遍历
// 0
// 1

for (let elem of ['a', 'b'].values()) {
    
    console.log(elem);
}//对键值的遍历
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
    
    console.log(index, elem);
}//对键值对的遍历
// 0 "a"
// 1 "b"

//Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值
array1.includes(1)//true


//ES6 则是明确将空位转为undefined。