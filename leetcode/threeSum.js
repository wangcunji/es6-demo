var threeSum = function(nums) {
    if(!Array.isArray(nums)) return;
    let len = nums.length,result = [];
    nums.sort(function (a,b) {
        return a-b;
    });
    for(let i=0;i<len-2;i++){
        if(nums[i]>0){
            return result
        };
        if(nums[i]===nums[i-1]){
            continue;
        };
        for(let x=i+1,y=len-1;x<y;){
            if(nums[i]+nums[x]+nums[y]===0){
                result.push(
                    [nums[i],nums[x],nums[y]]
                );
                x++;
                y--;
                while (x<y && nums[x]===nums[x-1]){
                    x++
                };
                while (x<y && nums[y]===nums[y+1]){
                    y--
                };
            } else if(nums[i]+nums[x]+nums[y]>0){
                y--
            } else {
                x++
            }
        }
    };
    return result
};
let nums = [-1, 0];
// [-1, 0, 1, 2, -1, -4].forEach(function (item,index) {
//
// });
console.log(threeSum(nums))