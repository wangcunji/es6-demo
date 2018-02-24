var isValid = function(s) {
    let str = s,result = [];
    let arr = str.split('');
    for(let i=0;i<arr.length;i++){
        switch (arr[i]){
            case '(':
                result.push(')');
                break;
            case '{':
                result.push('}');
                break;
            case '[':
                result.push(']');
                break;
            default:
                if(arr[i]!==result.pop()){
                    return false
                }
        }
    }
    return result.length===0
};
let st = "(([]{}){})";
let i = st.indexOf('d');
// console.log('asdf'.split(''));
// console.log(isValid(st));
let arr = [1,2,3,4];
console.log(arr.pop(),arr)
