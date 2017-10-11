/**
 * Created by Administrator on 2017/9/12.
 */
let [a, b, c] = [1, 2, 3];
//a:1,b:2,c:3
let [head, ...tail] = [1, 2, 3, 4];
//head:1,tail:[2,3,4]
let [x,[y,[z]],[v]] = [1,[2,[3]],[4]]
//x:1,y:2,z:3,v:4
//一一对应  模式不匹配会报错

/*不完全解构*/
let [e,f] = [1]
//f为undefined
let [g,h,i] = [1,2,3,4]
//g:1,h:2,i:3

let [foo] = 'a'//转为对象后具备Iterator接口
//以下报错
/*
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] ={};
*/
//默认值
let [bar = 'a'] = []
//bar:a

let [bat = 1] = [undefined]
//x:1
let[baf = 1] = [null]
//baf:null
//使用严格相等运算符（===）判断是否为undefined