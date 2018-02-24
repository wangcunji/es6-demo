var maxArea = function(height) {
    let len = height.length,result = 0,volume;
    if(len<2) return 0;
    for(let i=0,j=len-1;i<len;){
        if((j-i)*height[i]>result){
            while (i<j){
                volume = (j-i)*Math.min(height[i],height[j]);
                if(volume>result){
                    result = volume
                }
                j--;
            };
        }
        i++;
        j=len-1;
    };
    return result;
};

console.log(maxArea([1,2,1]));
