var letterCombinations = function(digits) {
    let obj = {
        1:"",
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz'
    },result = [];
    if(digits==='') return result;
    result.push('');
    for(let i=0;i<digits.length;i++){
        let str = obj[digits.charAt(i)];
        let len = result.length;
        if(result[0].length===digits.length){
            return result
        }
        for(let x=0;x<len;x++){
            for(let y=0;y<str.length;y++ ){
                let orginstr = result[x];
                result.push(orginstr+=str.charAt(y));
            } 
        }
        result.splice(0,len);
    }
    return result
};

console.log(letterCombinations("234"))
