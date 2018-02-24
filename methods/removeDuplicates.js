var removeDuplicates = function(nums) {
    let obj = {},len = nums.length,hasZero = false;
    for(var i=0;i<len;){
        if((!obj[nums[i]]&&nums[i]!==0)||(nums[i]===0&&!hasZero)){
            obj[nums[i]] = nums[i];
            if(nums[i]===0){
                hasZero = true;
            }
            i++;
        } else {
            nums.splice(i,1);
            len--;
        }
    }
    return nums.length
};
let arr = [0,0,1,1,2];
console.log(removeDuplicates(arr));
