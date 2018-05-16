var foo = {name:1};
var bar = foo;
// foo.x = foo = {name:2};
foo.x = {name:2};
foo = {name:2};
console.log(foo,bar,foo.x,bar.x);

var a = 1;
b = a = 2;
console.log(a,b)

var t = 20, r=10,str = '30';
console.log(t+r+str)

var f1 = "Hellow";
(function(){
    var f2 = "World";
    console.log(f1+f2);
})()

// console.log(f1+f2)

for (let elem of ['a', 'b']) {
    setTimeout(function(){
        console.log(elem);
    },2000)
}

function source(){
    this.name = "Job";
    this.sayName = function (){
        console.log(this.name);
    }
};

var exp = new source();

console.dir(exp);



