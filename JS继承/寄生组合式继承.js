
// 寄生组合式继承  通过借用构造函数来继承属性，通过原型链的混成形式来继承方法

function object (o){
    function F(){};
    F.prototype = o;
    return new F();
}
// 本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型
function inheritPrototype(subType,superType){
    var prototype = object(superType.prototype);//创建对象
    prototype.constructor = subType;//增强对象
    subType.prototype = prototype;//指定对象
}

// 示例

function SuperType(name) {
    this.name = name;
    this.colors = ["red","blue","green"];
}


SuperType.prototype.sayName = function () {
    console.log(this.name);
}

function SubType(name,age){
    SuperType.call(this,name);
    this.age = age;
}

inheritPrototype(SubType,SuperType);//减少一次超类型构造函数调用

SubType.prototype.sayAge = function () {
    console.log(this.age);
}

// 寄生组合式继承是引用类型最理想的继承范式

