var singleNumber = function(nums) {
    let len = nums.length,obj = {};
    for(let i=0;i<len;i++){
        if(obj[nums[i]]){
            obj[nums[i]]++;
        } else{
            obj[nums[i]] = 1;
        }
    };
    for(let key in obj){
        if(obj[key]===1){
            return parseInt(key)
        }
    }
};

let arr = [1,2,3,4,4,2,1,5,5];

console.log(singleNumber(arr))
