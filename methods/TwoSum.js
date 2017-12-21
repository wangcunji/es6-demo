
var twoSum = function(nums, target) {
    if(!Array.isArray(nums)) return;
    if(typeof target!=='number') return;
    let len = nums.length,result = [];
    nums.forEach(function (item,index) {
        for(let i=index+1;i<len;i++){
            if(item+nums[i]===target){
                result = [index,i];
            }
        }
    })
    return result
};
let nums = [3,3],target = 6;
console.log(twoSum(nums,target))