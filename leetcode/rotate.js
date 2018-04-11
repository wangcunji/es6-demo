var rotate = function(nums, k) {
    let len = nums.length;
    for(let i=0;i<k;i++){
        nums.unshift(nums.pop())
    };
    return nums;
};

let arr = [1]

console.log(rotate(arr,0))
