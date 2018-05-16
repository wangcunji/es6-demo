/**
 * Created by Administrator on 2016/10/28.
 */
var num = [8,94,15,88,55,76,21,39];
let sortarr = [13,43,23,41,53,64,23,53,5,23,54,21,87,65,56,85]
function  Bubble(num){
    var first;

    var len = num.length;

    for(var i=0;i<len-1;i++){
        for(let l=i+1;l<len;l++){
            if(num[i]>num[l]){
                first = num[i];
                num[i] = num[l];
                num[l] = first;
            }
        }
        
    }
    return num
}
// console.log(Bubble(num));


