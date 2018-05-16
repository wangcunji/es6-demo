

//！！！！所有引用类型默认都继承了object，这个继承是通过原型链实现的

// 构造函数、原型和实例
function foo (){

};//构造函数

var bar = new foo();//实例

console.log(foo.prototype.constructor===foo)//true  原型的指针指向该构造函数

console.log(bar.__proto__===foo.prototype)//true  实例指向构造函数的原型

function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function (){
    return this.property
}

function SubType(){
    this.subproperty = false;
}

SubType.prototype = new SuperType();

console.log(SubType.prototype.__proto__===SuperType.prototype)//true  SubType的原型指向SuperType的实例，SuperType的实例指向SuperType的原型，即SubType的原型指向SuperType的原型

SubType.prototype.getSubValue = function (){
    return this.subproperty;
}

var instance = new SubType();

console.log(instance.getSuperValue());//true;

console.log(instance.getSubValue());//false

console.log(instance.constructor===SuperType)//true

console.log(SuperType.prototype.__proto__===Object.prototype)//true  照应开头所讲，SubType继承了SuperType，SuperType继承了Object


// 存在的问题：包含引用类型值的原型属性会被所有实例共享  在某个实例中改变原型上的某个值会影响到其他实例
// 在创建子类型的实例时，不能向超类型的构造函数中传参数

