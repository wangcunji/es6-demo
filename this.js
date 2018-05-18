let name
function f1() {
    let name = 'John'
    console.log(this)
    function sayName () {
        let name = 'Milk'
        console.log(name)
    }
};
f1.prototype.sayName()

console.log(name)


