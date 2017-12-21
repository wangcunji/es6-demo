/**
 * Created by Administrator on 2016/10/28.
 */
var str = ['d','f','g','k','l','o','p'];
var first,last = str.length-1;
var length = str.length/2;
for(var i=0;i<length;i++){
    first = str[i];
    str[i]=str[last-i];
    str[last-i] = first;
}
console.log(str);


let t = "%E5%89%91%E4%B8%89%E7%8E%B2%E7%8F%91%E9%94%81|react|%E5%89%91%E4%B8%89%E5%AE%89%E5%85%A8|npm%20run%20build|polaris|%E7%BE%8E%E5%9B%BD%E9%81%93%E5%AF%8C%20%E6%9D%AD%E5%B7%9E|es6%20class|webpack"