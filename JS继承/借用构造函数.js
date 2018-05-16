

//！！！其实函数只不过是在特定环境中执行代码的对象

// 在子类型构造函数的内部调用超类型构造函数  --解决了原型链实例共享的问题

function SuperType(name){
    this.colors = ["red","blue","green"];
    this.name = name;
}

function SubType(){
    // 继承了SuperType --可以传递参数
    SuperType.call(this,"Milk");
}

var instance1 = new SubType();

console.log(instance1.name);//Milk

instance1.colors.push("black");//["red", "blue", "green", "black"]

console.log(instance1.colors);

var instance2 = new SubType();

console.log(instance2.colors)//["red", "blue", "green"]

// 存在的问题：每个实例都有自己的实例属性和方法，方法都在构造函数中定义，因此函数复用就无从谈起了。而且，在超类型的原型中定义的方法，对子类型而言是不可见的，结果所有类型都只能使用构造函数模式

