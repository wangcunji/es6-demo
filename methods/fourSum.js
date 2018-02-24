var fourSum = function(nums, target) {
    let len = nums.length,result = [];
    if(len<4) return result;
    nums.sort(function (a,b) {
        return a-b
    });
    console.log(nums)
    for(let x=0,y=len-1;x<y;){
        let t = y;
        while(x<y&&nums[x]===nums[x-1]&&x+1!==y){
            x++;
        }
        while(x<y&&nums[y]===nums[y+1]&&y-1!==x){
            y--;
        };
        // if(x===y){
        //     x=0;
        //     y--;
        // };
        for(let j=x+1,k=y-1;j<k;){
            console.log(x,y,j,k)
            if(nums[x]+nums[y]+nums[k]+nums[j]===target){
                console.log(x,y,j,k,nums[x],nums[y],nums[j],nums[k])
                result.push([nums[x],nums[y],nums[j],nums[k]]);
                j++;
                k--;
            } else if(nums[x]+nums[y]+nums[k]+nums[j]>target){
                k--;
            } else {
                j++;
            }
            while(j<k&&nums[j]===nums[j-1]&&j-1!==x){
                j++;
            };
            while(j<k&&nums[k]===nums[k+1]&&k+1!==y){
                k--;
            };
        }
        x++;
        if(x===y){
            x=0;
            y--;
        };
    }
    return result
};

let arr = [-3,-2,-1,0,0,1,2,3];//0
let arr1 = [0,0,0,0];//0
let arr2 = [5,5,3,5,1,-5,1,-2];//4
let arr3 = [1,-2,-5,-4,-3,3,3,5];//
let arr4=[0,1,5,0,1,5,5,-4];//
let tle = [-497,-473,-465,-462,-450,-445,-411,-398,-398,-392,-382,-376,-361,-359,-353,-347,-329,-328,-317,-307,-273,-230,-228,-227,-217,-199,-190,-175,-155,-151,-122,-102,-97,-96,-95,-87,-85,-84,-73,-71,-51,-50,-39,-24,-19,-1,-1,7,22,25,27,37,40,43,45,51,72,91,97,108,119,121,122,123,127,156,166,171,175,180,203,211,217,218,224,231,245,293,297,299,300,318,326,336,353,358,376,391,405,423,445,451,459,464,471,486,487,488]
//2251
let aa = [-3,-1,0,2,4,5]//2
console.log(fourSum(aa,2));