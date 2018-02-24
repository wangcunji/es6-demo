var reverse = function(x) {
    let int = x,signed='',result;
    let arr = int.toString().split('');
    if(arr[0]===0){
        arr = arr.splice(1,arr.length-1)
    };
    if(!parseInt(arr[0])){
        signed = arr[0];
        arr = arr.splice(1,arr.length-1)
    };
    result = signed+arr.reverse().join('');
    result = parseInt(result);
    if(result>Math.pow(2,31)-1||result<-Math.pow(2,31)) result=0;
    return result;
};
let intt = 123
// console.log(intt.toString().split(''))
console.log(reverse(123))
// console.log(Math.pow(2,3))
