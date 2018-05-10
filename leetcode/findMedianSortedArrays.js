var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length,len2 = nums2.length;
    let k = Math.floor((len1+len2)/2);
    if((len1+len2) % 2===0){
        return (findMval(nums1,nums2,0,0,len1,len2,k)+findMval(nums1,nums2,0,0,len1,len2,k+1))/2
    } else {
        return findMval(nums1,nums2,0,0,len1,len2,k+1)
    }
};
var findMval = function (arr1,arr2,index2,index1,len1,len2,k) {
    if(len1>len2){
        return findMval(arr2,arr1,index2,index1,len2,len1,k)
    };
    if(len1===0){
        return arr2[k+index2-1]
    };
    if(k===1){
        return Math.min(arr1[index1],arr2[index2])
    };
    let l1 = Math.min(Math.floor(k/2),len1);
    let l2 = k - l1;
    console.log(l1,l2)
    if(arr1[index1+l1-1]<arr2[index2+l2-1]){
        return findMval(arr1,arr2,index1+l1,index2, len1-l1,len2,k-l1)
    } else if(arr1[index1+l1-1]>arr2[index2+l2-1]){
        return findMval(arr1,arr2,index1,index2+l2, len1,len2-l2,k-l2)
    } else {
        console.log(index1+l1-1)
        return arr1[index1+l1-1]
    }
};
var arr = [1,3];
var ss = arr.splice(arr.length/2,2)
// console.log(ss)
console.log(findMedianSortedArrays([1,3,4,5],[1,2,6,7]))