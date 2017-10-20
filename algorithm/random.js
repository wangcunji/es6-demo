/**
 * Created by Administrator on 2017/3/12.
 */
Array.prototype.unique = function () {
    var n = {}, r = [];
    for (var i = 0; i < this.length; i++) {
        if (!n[this[i]]) {
            n[this[i]] = true;
            r.push(this[i]);
        }
    }
    return r;
};
var array=[];
function consoleArray(x){
    var n = 30-2-2;
    for(var i=0;i<x;i++){
        array.push(Math.round(Math.random()*n + 3));
    };
    array = array.unique();
    if(array.length<x){
        consoleArray(x-array.length);
    }
    return array
};
console.log(consoleArray(11));
console.log(array.unique());