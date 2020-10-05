/**
 * 最长公共前缀
 * https: //leetcode-cn.com/explore/interview/card/bytedance/242/string/1014/   
 */
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

// 更优解法
var longestCommonPrefix = function(strs) {
    if (strs == null || strs.length == 0) return ''

    let same = strs[0]

    for (let i = 1; i < strs.length; i++) {
        const str = strs[i]

        var j = 0
        for (; j < same.length; j++) {
            if (same[j] != str.charAt(j)) {
                break
            }
        }
        same = same.slice(0, j)
    }

    return same
}

