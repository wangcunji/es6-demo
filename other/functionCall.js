function foo (){
    this.name = "milk";
    this.sayName = function () {
        console.log(this.name);
    }
};

var obj = {
    name:'john'
};

var instance = new foo();

instance.sayName();

instance.sayName.call(obj);