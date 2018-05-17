
function object (o){
    function F(){};
    F.prototype = o;
    return new F();
}

// 从本质上来讲，object()对传入其中的对象执行了一次浅复制

var person = {
    name:"Nicholas",
    friends:["Shelby","Court","Van"]
};

// var anotherPerson = object(person);
var anotherPerson = Object.create(person);

anotherPerson.name = "Greg";

anotherPerson.friends.push("Rob");

// var yetAnotherPerson = object(person);
var yetAnotherPerson = Object.create(person);

yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.log(person.friends);//["Shelby", "Court", "Van", "Rob", "Barbie"]

// ECMAScript5通过新增Object.create()方法规范了原型式继承


// 缺点：包含引用类型值的属性始终都会共享相应的值，就像使用原型模式一样
