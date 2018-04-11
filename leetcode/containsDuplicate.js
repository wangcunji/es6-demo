var containsDuplicate = function(nums) {
    let len = nums.length,obj = {};
    for(let i=0;i<len;i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1;
        } else {
            return true
        }
    };
    return false;
};