var intersect = function(nums1, nums2) {
    let len1 = nums1.length,len2 = nums2.length;
    let obj = {},result = [];
    nums1.forEach(element => {
        if(obj[element]){
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    });
    nums2.forEach(element => {
        if(obj[element]&&obj[element]>=1){
            result.push(element);
            obj[element]--;
        }
    });
    return result;
};

let arr1 = [1, 2, 2, 1],arr2 = [2, 2];

console.log(intersect(arr1,arr2))