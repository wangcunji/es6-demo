function f (name){
    this.name = name;
    this.sayName = function (){
        console.log(this.name)
    }
}

var bf = new f('王');
bf.sayName();
console.log(Object.prototype.toString.call(bf))
console.log(bf);

function f1(name){
    f1.prototype.__proto__ = f.prototype;
    f.apply(this,[name])
};

// f1.prototype.__proto__ = bf

var bf1 = new f1('刘')
console.log(bf1)
bf1.sayName();

console.log(f.prototype.__proto__===Object.prototype)//true __proto__指向该对象的构造函数的原型对象
console.log(bf.__proto__===f.prototype)//true





