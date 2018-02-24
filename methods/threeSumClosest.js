var threeSumClosest = function(nums, target) {
    let len = nums.length,result= Infinity,num = 0;
    nums.sort(function (a,b) {
        return a-b;
    });
    if(len<2) return result;
    result = nums[0]+nums[1]+nums[2];
    if(result>target){
        return result;
    };
    for(let i=0;i<len-2;i++){
        if(nums[i]===nums[i-1]){
            continue;
        };
        for(let x=i+1,y=len-1;x<y;){
            if(nums[i]+nums[x]+nums[y]>target){
                y--;
                num = nums[i]+nums[x]+nums[y+1];
            } else {
                x++;
                num = nums[i]+nums[x-1]+nums[y];
            };
            if(nums[i]+nums[x]+nums[y]===target||num===target){
                return target
            }
            if(Math.abs(num-target)<Math.abs(result-target)){
                result = num;
            }
        }
    };
    return result;
};

let intarr = [-55,-24,-18,-11,-7,-3,4,5,6,9,11,23,33];
console.log(threeSumClosest(intarr,0));