/**
 * Created by Administrator on 2016/10/27.
 */
//var num = ['1','2','3','4','5'];
//var total,first=num[0];
//for(var i=1;i<num.length;i++){
//    total = first*num[i];
//    first = total;
//}
//console.log(total);
function count(num){
    var total=num,length = num;
    for(var i=0;i<length;i++){
        if(num>1){
            total = total*(num-1);
            num=num-1;
        }
    }
    return total;
}
console.log(count(10));