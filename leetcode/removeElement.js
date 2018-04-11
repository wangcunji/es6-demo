var removeElement = function(nums, val) {
    let len = nums.length;
    for(let i=0;i<len;){
        if(nums[i]===val){
            nums.splice(i,1);
            len--;
        } else {
            i++
        }
    };
    return len
};

console.log(removeElement(arr,val))