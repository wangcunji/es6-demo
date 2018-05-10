var foo = Symbol('foo');

var bar = Symbol('bar')

var obj = {
    a:'0',
    [foo]: 1
}

console.log(Object.keys(obj)); //['a']
console.log(Object.getOwnPropertySymbols(obj)) //[Symbol('foo')]
console.log(Reflect.ownKeys(obj))//['a',Symbol('foo')]

// 可用于消除魔术字符串

// Symbol.for 接受一个字符串作为参数，返回以该字符串为名称的Symbol的值，没有则新建一个

var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

console.log(s1 === s2)

// Symbol.hasInstance指向一个内部方法 当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法
class Myclass {
    constructor() {
        this.name = 'John';
    };
    sayName() {
        console.log(this.name)
    };
    [Symbol.hasInstance](arr) {
        return arr instanceof Array
    }
};

var newClass = new Myclass();

console.log(newClass instanceof Myclass, [1, 2, 3] instanceof newClass)

// Symbol.isConcatSpreadable 对象在使用concat方法时是否可以展开
var arr1 = [1, 2, 3];
var arr2 = [4, 5]
var arr3 = arr1.concat(arr2)
console.log(arr3)
arr2[Symbol.isConcatSpreadable] = false; //数组默认展开，设为false时不展开
var arr4 = arr1.concat(arr2);
console.log(arr4)

var obj1 = {
    0: 'c',
    1: 'd',
    length:2
};
var obj2 = ['a','b'].concat(obj1);
console.log(obj2);
obj1[Symbol.isConcatSpreadable] = true;//类数组对象默认不展开，设为true时才会展开
var obj3 = ['a','b'].concat(obj1);
console.log(obj3)

// Symbol.species 指向一个构造函数 Symbol.species的作用在于，实例对象在运行过程中，
// 需要再次调用自身的构造函数时，会调用该属性指定的构造函数。它主要的用途是，有些类库是在基类的基础上修改的，
// 那么子类使用继承的方法时，作者可能希望返回基类的实例，而不是子类的实例。
class myArray extends Array {
    static get[Symbol.species]() { return Array }
};
var a = new myArray(1,2,3)
var b = a.map(x => x);
var c = a.map(x => x > 1);

console.log(b instanceof myArray);
console.log(c instanceof myArray);

// 默认的Symbol.species 为 static get [Symbol.species](){ retutn this }，现做修改

// 对象的Symbol.match属性，指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。
class myMatch {
    constructor(){};
    [Symbol.match](str){
        return str;
    }
}
console.log('say'.match(new myMatch()));

// Symbol.toStringTag  修改Object.prototype.toString.call()返回的第二个类型的值

class StringTag {
    constructor (){};
    get [Symbol.toStringTag](){
        console.log();
        return 'SAR'
    }
};

let tag = new StringTag();

console.log(Object.prototype.toString.call(tag))




