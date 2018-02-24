var search = function(nums, target) {
    let len = nums.length,mid;
    let left = 0,right = len-1;
    if(len===0) return -1;
    while (left<=right){
        mid = parseInt((left+right+1)/2);
        if(nums[mid]===target) return mid;
        if(nums[mid]<=nums[right]){
            if(target>=nums[mid]&&target<=nums[right]){
                left = mid+1;
            } else {
                right = mid-1;
            }
        } else {
            if(target>=nums[left]&&target<=nums[mid]){
                right = mid-1;
            } else {
                left = mid+1;
            }
        }
    };
    return -1
};

let ex = [4,3,1,2],ex1 = [4,5,6,7,0,1,2];

console.log(search(ex,1))