var removeDuplicates = function(nums) {
    let len = nums.length;
    let obj = {};
    for(let i=0;i<len;){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1;
            i++;
        } else {
            nums.splice(i,1);
            len--;
        }
    };
    return len;
};
let arr = [0,0,1,1,2];
console.log(removeDuplicates(arr));
