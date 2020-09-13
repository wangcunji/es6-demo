
var twoSum = function(nums, target) {
    let len = nums.length;
    let obj = {};
    for(let i = 0;i < len; i++){
        let num = target - nums[i];
        if(obj[num] !== undefined){
            return [obj[num], i];
        } else {
            obj[nums[i]] = i;
        }
    };
    return [];
};
let nums = [2,3,5,6,3,8,4],target = 6;
console.log(twoSum(nums,target))