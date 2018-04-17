//  3的幂 
// 给出一个整数，写一个函数来确定这个数是不是3的一个幂。
var isPowerOfThree = function(n) {
    if(n<0) return false;
    let count = Math.pow(3,19);
    // for(let i=30;i>=0;){
    //     if(Math.pow(3,i)>Math.pow(2,31)-1){
    //         i--
    //     } else {
    //         console.log(i)
    //         count = Math.pow(3,i);
    //         break;
    //     }
    // };
    if(count % n===0){
        return true
    } else {
        return false
    }
};

console.log(isPowerOfThree(36))

