//属性的简洁表示法

let b = 1
let obj = {
    a:1,
    b,
    say(){alert('c')}
}

//属性名表达式

let fo='foo'
let obj1 = {
    [fo]:true,
    ['a'+'bc']:'123'
}
//obj1:{foo:true,abc:'123}

//方法name属性
console.log(obj.say.name)//say
//取值函数（getter）和存值函数（setter）,name属性无法使用

//Object.is()比较两个值是否严格相等
Object.is('foo', 'foo')
// true
Object.is({}, {})
// false
Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

//Object.assign()用于对象的合并
let obj2={a:1,b:2},obj3={c:3}
Object.assign({},obj2,obj3)//{a:1,b:2,c:3}
Object.assign({f:0},obj2,obj3)//{f:0,a:1,b:2,c:3}
Object.assign({a:0},obj2,obj3)//{a:1,b:2,c:3}  会覆盖前一个同名属性的值
//三种类型,number和boolean无影响，string会以字符数组形式
const v1 = 'abc';
const v2 = true;
const v3 = 10;

const obj4 = Object.assign({}, v1, v2, v3);
console.log(obj4); // { "0": "a", "1": "b", "2": "c" }

//四个注意点:=浅拷贝，同名属性替换，数组处理（把数组视为对象）,取值函数的处理(取值函数先取值再复制)

//属性可枚举性和遍历
//Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象

let nobj = {fo:'123'}
Object.getOwnPropertyDescriptor(nobj,'foo')

//  {
//    value: 123,
//    writable: true,
//    enumerable: true,//可枚举性,为false时for...in循环，Object.keys()，JSON.stringify()，Object.assign()会忽视当前属性
//    configurable: true
//  }

//属性遍历的几种方法
let nobj1 = {a:1,b:2,c:3}
for(let k in nobj1){console.log(k)}//a b c

console.log(Object.keys(nobj1))//[a,b,c] (所有可枚举 不含 Symbol 属性)

console.log(Object.getOwnPropertyNames(nobj1))//[a,b,c]（包括不可枚举 不含 Symbol 属性）

console.log(Object.getOwnPropertySymbols(nobj1))//[] (所有 Symbol 属性的键名。)

console.log(Reflect.ownKeys(nobj1))//[a,b,c] (返回所有)

//__proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf() Object.create()

let objf = {
    name:"jack",
    sayName(){
        console.log(this.name)
    }
}
let objf1 = Object.setPrototypeOf(objf,null)//设置原型对象
console.log(objf1)

let objf2 = Object.create(objf)//创建
console.log(Object.getPrototypeOf(objf2))//获取原型对象



