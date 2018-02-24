var nextPermutation = function(nums) {
    let len = nums.length,medium,Mindex;
    let sign = nums[len-1];
    for(var i=len-2;i>0;){
        if(nums[i]>=sign){
            sign = nums[i];
            i--;
        } else {
            sign = nums[i];
            break;
        }
        
    }
    if(i===0&&nums[i]>=nums[i+1]){
        nums.reverse();
    } else {
        if(i===0){
            sign = nums[i];
        };
        console.log(sign,i)
        medium = nums[i+1];
        for(let x=i+1;x<len;x++){
            if(nums[x]<=medium&&nums[x]>sign){
                medium = nums[x];
                Mindex = x;
            }
        };
        console.log(medium,Mindex)
        nums[Mindex] = sign;
        nums[i] = medium;
        console.log(nums)
        nums.splice(i+1,0,...nums.slice(i+1).reverse());
        nums.splice(len,len-i-1);
    }
    return nums
};
let arr = [1,5,1];
console.log(nextPermutation(arr))
// console.log(...arr)
// console.log(arr.splice(0,1))