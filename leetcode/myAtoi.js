var myAtoi = function(str) {
    str = str.replace(/\s/g,'');
    if(!(/^[0-9]*$/).test(str.charAt(0))&&str.charAt(0)!=='-'&&str.charAt(0)!=='+') return 0;
    let len = str.length,result = "";
    console.log(str)
    for(let i=0;i<len;i++){
        console.log((/^[0-9]*$/).test(str.charAt(i)),str.charAt(i))
        if(str.charAt(i)==='+'||str.charAt(i)==='-'||(/^[0-9]*$/).test(str.charAt(i))){
            result+=str.charAt(i);
        } else if(result.length!==0){
            break;
        }
    };
    result = parseInt(result);
    console.log(result,typeof result,result=='NaN',result==NaN)
    if(typeof result !=='number'||!result){
        return 0;
    };
    if(result>2147483647){
        return 2147483647;
    };
    if(result<-2147483648){
        return -2147483648;
    };
    return result
};

var str = " arqw ";

str = str.replace(/([^\w]|_)/g,'');
    //   str.replace(/([^\w]|_)/g, '')
console.log(myAtoi("1"))
// console.log(str)
// console.log(str.replace(/\b/g,''))


