var findSubstring = function(s, words) {
    let result = [],len = words.length,obj = {};
    if(len===0||s.length<len) return result;
    if(len===1){
        if(s===words[0]){
            return [0] 
        } else {
            return [] 
        }
    };
    let count = 0,strLen = words[0].length;
    for(let i=0;i<len;i++){
        if(!obj[words[i]]){
            obj[words[i]] = 1;
        } else {
            obj[words[i]]++
        };
        if(s.indexOf(words[i])===-1){
            count++;
        }
        if(obj[words[i]]===len&&count===0){
            for(let x=0;x<=s.length-len*strLen;x++){
                result.push(x)
            }
            return result;
        }
    };
    if(count===len) return result;
    let hasObj = {};
    for(let x=0;x<len;x++){
        let indexArr = findStrIndex(s,words[x],len,obj,strLen,0,0,[]);
        if(!hasObj[words[x]]){
            hasObj[words[x]] = indexArr;
            result = result.concat(indexArr)
        }
    };
    return result
};
var findStrIndex = function (s,word,len,obj,strLen,subCount,lastIndex,preResult) {
    let index = s.indexOf(word),str,initStr = s,objStr,lastStr = word,renum = 1,isRe = false,result = preResult;
    let newObj = {};
    newObj[word] = 1;
    let strIndex = index;
    if(index===-1) return result;
    while (subCount<len-1){
        str = s.substring(strIndex+strLen);
        objStr = str.substring(0,strLen);
        console.log('循环计数',word,str,objStr)
        if(!newObj[objStr]){
            newObj[objStr] = 1;
        } else {
            newObj[objStr]++;
        };
        if(lastStr === objStr) {
            if(renum<obj[objStr]){
                isRe = false;
                renum++;
            } else {
                isRe = true;
                for(let x=0;x<obj[objStr]-1;x++){
                    str = objStr+str;
                    strIndex-=strLen;
                }
            }
        }
        if(!obj[objStr]||isRe||newObj[objStr]>obj[objStr]){
            return findStrIndex(str,word,len,obj,strLen,0,strIndex+strLen+lastIndex,result)
        }
        lastStr = objStr;
        subCount++;
        strIndex+=strLen;
    };
    console.log('新对象',newObj)
    console.log(index,lastIndex)
    result.push(index+lastIndex)
    console.log(result,str,word,s)
    if(str.indexOf(word)!==-1&&str.length>=strLen*len){
        str = str.substring(strLen);
        strIndex+=strLen;
        console.log('再次循环',str,word,strIndex+lastIndex)
        return findStrIndex(str,word,len,obj,strLen,0,strIndex+2*lastIndex,result)
    } else {
        return result
    }
}
// console.log('barfoothefoobarman'.substring(3))
// let obj = {a:'1',b:'2'};
// delete obj['a'];
// console.log(obj)"barfoofoobarthefoobarman"
let initstr = 'barfoothefoobarman',initarr = ["foo","bar"];
let str  ="barfoofoobarthefoobarman",arr  =["bar","foo","the"];
let tr = "wordgoodgoodgoodbestword",ar=["word","good","best","good"];
let ntr = "foobarfoobar",nar = ["foo","bar"]
let restr = 'abababab',rearr = ["a","b","a"]
    
console.log(findSubstring(restr,rearr))
// console.log([].concat([4,5]))
