var moveZeroes = function(nums) {
    let len = nums.length;
    for(let i=0;i<len;){
        if(nums[i]===0){
            nums.push(nums.splice(i,1)[0]);
            len--;
        } else {
            i++;
        }
    }
};

let arr = [0,0,1];

moveZeroes(arr)

console.log(arr);

