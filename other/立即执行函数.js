var test = (function(a){
    this.a = a;
    return function(b){
        return this.a + b;
    }
}(function(a,b){return a}(11,47)));
var tr = test(7)
console.log(tr)