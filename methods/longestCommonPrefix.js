var longestCommonPrefix = function(strs) {
    let str = strs[0],len = strs.length,result = "";
    if(len===0) return result;
    let slen = str.length;
    for(let i=0;i<slen;i++){
        let x=1;
        while (x<len&&str.charAt(i)===strs[x].charAt(i)){
            x++;
        };
        if(x===len){
            result+=str.charAt(i)
        } else {
            return result
        }
    };
    return result
};
let arrs = ['acc','bcc']
console.log(longestCommonPrefix(arrs))