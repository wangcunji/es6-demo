let obj = {name:1};
let bar = {name:2};
let foo = obj;

obj.x = bar = obj = {name:3};

console.log(obj,bar,foo);

console.log(30+'30','30'+30,'30'==30)

var arr = [3,2,1]
arr.forEach(function(val,index){
    console.log(index,val)
})
