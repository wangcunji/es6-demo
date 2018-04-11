var convert = function(s, numRows) {
    let str = s,listLen = 2*numRows-2,result = "",j;
    let len = str.length;
    if(len<=numRows||numRows===1) return str;
    j = Math.ceil(len / listLen);
    console.log(listLen)
    for(let x=1;x<=numRows;x++){
        for(let i=0;i<j;i++){
            let index = x-1+i*listLen;
            if(x===1||x===numRows){
                // console.log(index)
                result+=str.charAt(index)?str.charAt(index):"";
            } else {
                // console.log(str.charAt(numRows-1+i*listLen+x-1))
                result+=str.charAt(index)?str.charAt(index):"";
                result+=str.charAt(index+2*(numRows-x))?str.charAt(index+2*(numRows-x)):"";
            }
        }
    }
    return result
};
var ss = "PAYPALISHIRING";
var err = "ABCDEF";
// console.log(ss.length)

console.log(convert(err,4))

// 1   7
// 2 6 8
// 3 5 9
// 4   10