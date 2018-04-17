// Array.prototype.slice.call(arguments)  常用于将具有length属性的对象转为数组

// 内部实现猜测
// Array.prototype.slice = function(start,end){
//     var result = new Array();
//     start = start || 0;
//     end = end || this.length; //this指向调用的对象，当用了call后，能够改变this的指向，也就是指向传进来的对象，这是关键
//     for(var i = start; i < end; i++){
//          result.push(this[i]);
//     }
//     return result;
// }


var outFn = function(a){
    var kineFn = function(b){
        var result = "";
        if(a===1){
            if(b==='一'){
                result = "这是第一种情况";
            } else if(b==="二"){
                result = "这是第二种情况";
            }
        } else {
            if(b==='一'){
                result = "这是第三种情况";
            } else if(b==="二"){
                result = "这是第四种情况";
            }
        };
        console.log(result);
        return arguments.callee;
    };
    return kineFn;
}

outFn(1)('一')('二');
outFn(2)('一')('二');



