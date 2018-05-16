var merge = function(nums1, m, nums2, n) {
    if(m===0) nums1.splice(0,n,...nums2);
    let j=0;
    for(let i=0;i<m;i++){
        let val = nums1[i+j];
        while(j<n&&val>=nums2[j]){
            console.log(val)
            nums1.splice(i+j,0,nums2[j]);
            nums1.pop();
            j++;
        }
    };
    nums1.splice(m+j,n-j,...nums2.slice(j));
};

console.log(merge([0,0,3,0,0,0,0,0,0],3,[-1,1,1,1,2,3],6))

