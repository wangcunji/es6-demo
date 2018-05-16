class foo {
    constructor (name,age){
        this.name = name;
        this.age = age;
    };
    sayName(){
        console.log(this.name)
    };
    static sayAge(){
        console.log(this.age)
    }
};

let foo1 = new foo('milk',23);

foo1.sayName();
//foo1.sayAge();//静态方法不可被实例继承
foo.sayAge()//可直接被类调用

let foo2 = new foo('john',30);

console.log(foo1.__proto__=== foo2.__proto__)// true 两个实例的原型相同,都指向foo.prototype

class bar extends foo {
    constructor(name,age){
        super(name,age)//继承类  使用super指向父类
    }
}

let bar1 = new bar('王',43);

bar1.sayName()
