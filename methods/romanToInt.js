var romanToInt = function(s) {
    let romanPieces = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    };
    let str = s,len = s.length,nums = [],result = 0;
    for(let i=0;i<len;i++){
        console.log(str.charAt(i))
        nums.push(romanPieces[str.charAt(i)])
    };
    for(let x=0;x<nums.length;x++){
        if(nums[x]<nums[x+1]){
            result-=nums[x];
        } else {
            result+=nums[x];
        }
    };
    return result
};
console.log(romanToInt('MDCCCXCIX'))