//Set 本身是一个构造函数，用来生成 Set 数据结构。
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
console.log(s)
for (let i of s) {
    console.log(i);
}
// 2 3 5 4  set 结构不会添加重复的值
let array = [
    {
        name:'Jack',
        age:12
    },
    {
        name:'Milk',
        age:13
    },
    {
        name:'Jack',
        age:12
    }
]
let set1 = new Set(array)
console.log(set1)
let set2 = new Set([1,2,3,4,2,4,2])
console.log(set2)
//对象数组无法去重  两个对象总是不相等的

//set实例的属性和方法
set2.size//4
set2.add(5)//[1,2,3,4,5]
set2.delete(1)//true 删除成功
set2.has(2)//true 有该值
set2.clear()//清空
console.log(set2)

//遍历
let set3 = new Set(['a','b','c'])
for(let item of set3.keys()){
    console.log(item)
}
for(let item of set3.values()){
    console.log(item)
}
// a
// b
// c    set结构没有健名，keys()和values()的值一样
for(let item of set3.entries()){
    console.log(item)
}
// [ 'a', 'a' ]
// [ 'b', 'b' ]
// [ 'c', 'c' ]

//WeakSet
//WeakSet 的成员只能是对象
//WeakSet 中的对象都是弱引用  不可遍历






