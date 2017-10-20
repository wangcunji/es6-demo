/**
 * Created by Administrator on 2016/10/28.
 */
var num = [8,94,15,88,55,76,21,39];
let sortarr = [13,43,23,41,53,64,23,53,5,23,54,21,87,65,56,85]
function  Bubble(num){
    var first;
    
    for(var i=0;i<num.length;i++){
        
        for(var m=0;m<num.length-1;m++){
            
            if(num[i]<num[m]&&i>m){
                
                first = num[i];
                
                num[i] = num[m];
                
                num[m] = first;
                
            }
        }
    }
    return num
}
console.log(Bubble(num));
let sarr = [5,4,3]
function insertSort(arr){

    var key;

    for(let j = 1; j < arr.length ; j++){
        

        var i = j - 1;

        key = arr[j];
        
        while(i >= 0 && arr[i] > key){
          
            arr[i+1] = arr[i];
            console.log(arr)
            i --;

        }
        arr[i + 1] = key;
    }

    return arr;

}
console.log(insertSort(sarr));
let o=3
while (o>0){
    console.log(o)
    o--
}