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