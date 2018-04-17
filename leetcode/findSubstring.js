var findSubstring = function(s, words) {
    let result = [],len = words.length,obj = {};
    if(len===0||s.length<len) return result;
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
    };
    if(count===len) return result;
    let hasObj = {};
    for(let x=0;x<len;x++){
        let indexArr = findStrIndex(s,words[x],len,obj,strLen,1,0,[]);
        if(!hasObj[words[x]]){
            hasObj[words[x]] = indexArr;
            result = result.concat(indexArr);
        }
    };
    return result
};
var findStrIndex = function (s,word,len,obj,strLen,subCount,lastIndex,preResult) {
    let index = s.indexOf(word),str,initStr = s,objStr,lastStr = word,renum = 1,isRe = false,result=[];
    let strIndex = index;
    if(index===-1) return result.concat(preResult);
    str = s.substring(strIndex);
    while (str.indexOf(word)!==-1||subCount<len){
        str = s.substring(strIndex+strLen);
        objStr = str.substring(0,strLen);
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
        if(!obj[objStr]||isRe){
            return findStrIndex(str,word,len,obj,strLen,1,strIndex+strLen+lastIndex,result)
        };
        lastStr = objStr;
        subCount++;
        strIndex+=strLen;
        if(subCount===len){
            result.push(index+lastIndex);
            subCount = 0;
            index = str.indexOf(word)+strIndex;
        }
    };
    console.log('返回数据',result);
    result = result.concat(preResult);
    return result
}
// console.log('barfoothefoobarman'.substring(3))
// let obj = {a:'1',b:'2'};
// delete obj['a'];
// console.log(obj)"barfoofoobarthefoobarman"
let intstr = 'barfoothefoobarman'
let str  ="barfoofoobarthefoobarman",arr  =["bar","foo","the"];
let tr = "wordgoodgoodgoodbestword",ar=["word","good","best","good"];
let ntr = "foobarfoobar",nar = ["foo","bar"]
console.log(findSubstring(ntr,nar))

// console.log([].concat([4,5]))