/**
 * Created by Administrator on 2017/9/13.
 */
/*对象的解构赋值中，被赋值的是变量，模式未被赋值*/
let {a,b} = {a:1,b:2}
//a:1,b:2 等同于let {b,a} = {a:1,b:2}
//以上形式其实是let {a:a,b:b} = {a:1,b:2}的简写
let { foo: baz } = { foo: "aaa", bar: "bbb" };
//被赋值的是变量baz,模式foo未被赋值

let obj = {
    f:[
        'hellow',
        {l:'world'}
    ]
}

let {f,f:[o,{l}]} = obj
//f:[ 'hellow', { l: 'world' } ];o:'hellow';l:'world'

// 暂时性死区---TDZ 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
var tmp
{
    // TDZ开始
    tmp;
    consooe.log(tmp);
    // TDZ结束
    let tmp = 'tdz';
    
}



