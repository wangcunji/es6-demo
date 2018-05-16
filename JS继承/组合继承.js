

// 组合继承又叫伪经典继承，指的是将原型链和借用构造函数的技术组合到一块，从而发挥二者之长的一种继承模式
// 使用原型链实现对原型对象和方法的继承，而通过借用构造函数来实现对实例属性的继承

function SuperType(name){
    this.name = name;
    this.colors = ["red","blue","green"];
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
}

function SubType(name,age){
    SuperType.call(this,name);//第二次调用超类型构造函数
    this.age = age;
}

// 继承方法

SubType.prototype = new SuperType();//第一次调用超类型构造函数

SubType.prototype.constructor = SubType;

SubType.prototype.sayAge = function(){
    console.log(this.age);
};

var instance1 = new SubType("Milk",25);

instance1.colors.push("black");

console.log(instance1.colors);//["red", "blue", "green", "black"]

instance1.sayName();//Milk
instance1.sayAge();//25

var instance2 = new SubType("Gred",30);

console.log(instance2.colors);//["red", "blue", "green"]

instance2.sayName();//Gred

instance2.sayAge();//30

// instanceof和isPrototypeOf()都能够用于识别基于组合继承创建的对象
console.log(instance1 instanceof SubType)//true
console.log(instance1 instanceof SuperType)//true


// 存在问题：组合继承可以说是JavaScript最常用的继承模式，不过也有不足，最大的问题是无论什么情况，都会调用两次超类型构造函数
// 一次是在创建子类型原型的时候，另一次是在子类型构造函数内部

