let str = "pwwke",ss = "sskedacdcptqlmud";
// console.log(str.substring(1,2))
var lengthOfLongestSubstring = function(s) {
    let str = s;
    let strlist = str.split("");
    let len = strlist.length;
    let result = [],substr;
    if(len<2) return len;
    for(let x=0,y=1;x<len-1;){
        substr = str.substring(x,y);
        if(substr.indexOf(strlist[y])===-1&&y<len){
            y++
        } else {
            result.push(substr.length);
            x++;
            y=x+1;
        }
    };
    result.sort(function (a,b) {
        return a-b
    })
    return result[result.length-1]
};
console.log(lengthOfLongestSubstring(ss))
