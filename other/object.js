// let obj = {name:1};
// let bar = {name:2};
// let foo = obj;

// obj.x = bar = obj = {name:3};

// console.log(obj,bar,foo);

console.log(30 + '30', '30' + 30, '30' == 30)

var arr = [3, 2, 1]
arr.forEach(function (val, index) {
    console.log(index, val)
})

var newobj = {
    name: 'q'
}

Object.defineProperty(newobj, "name", {

    get: function () {
        console.log("get", val);
        return val;
    },

    set: function (newVal) {
        console.log(newVal);
        val = newVal;
    }
});

newobj.name = "什么啊";

console.log(newobj.name)
console.log(newobj.age)

function fb(){
    this.name = "John";
    this.sayName = function (){
        console.log(this.name)
    };
}

var newfb = Object.create(fb.prototype)

console.log(newfb)




