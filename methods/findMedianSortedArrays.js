var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length,len2 = nums2.length;
    let media1,media2,index1,index2,arr1,arr2,result;
    if(len1 % 2===0){
        media1 = (nums1[len1/2-1]+nums1[len1/2])/2;
        index1 = len1/2;
    } else {
        media1 = nums1[(len1+1)/2-1];
        index1 = (len1+1)/2-1;
    };
    if(len2 % 2===0){
        media2 = (nums2[len2/2-1]+nums2[len2/2])/2;
        index2 = len2/2;
    } else {
        media2 = nums2[(len2+1)/2-1];
        index2 = (len2+1)/2-1;
    };
    if(len1===0) return media2;
    if(len2===0) return media1;
    if(len1===1&&len2===1){
        result = (media1+media2)/2;
        return result;
    };
    if(media1<media2){
        arr1 = nums1.splice(index1);
        // arr2 = nums2.splice(index2);
        console.log(arr1,nums2)
        return findMedianSortedArrays(arr1,nums2)
    } else if(media1>media2){
        // arr1 = nums1.splice(index1);
        arr2 = nums2.splice(index2);
        console.log(nums1,arr2)
        return findMedianSortedArrays(nums1,arr2)
    } else {
        return media1
    }
};
var arr = [1,3];
var ss = arr.splice(arr.length/2,2)
// console.log(ss)
console.log(findMedianSortedArrays([2],[1,3,4]))