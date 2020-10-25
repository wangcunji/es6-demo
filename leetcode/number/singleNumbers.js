/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let map = new Map();
    let key;
    for(let i = 0; i < nums.length; i++){
        key = nums[i];
        if(map.has(key)){
            map.delete(key);
        } else {
            map.set(key, 1);
        }
    }
    return [...map.keys()];
}

