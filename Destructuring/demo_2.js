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
