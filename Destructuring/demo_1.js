/**
 * Created by Administrator on 2017/9/12.
 */
let [a, b, c] = [1, 2, 3];
//a:1,b:2,c:3
let [head, ...tail] = [1, 2, 3, 4];
//head:1,tail:[2,3,4]
let [x,[y,[z]],[v]] = [1,[2,[3]],[4]]
console.log(x,y,z,v)
//一一对应  模式不匹配会报错

/*不完全解构*/
let [e,f] = [1]
//f为undefined
let [g,h,i] = [1,2,3,4]
//g:1,h:2,i:3