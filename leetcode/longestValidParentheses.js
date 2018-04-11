var longestValidParentheses = function(s) {
    let arr = s.split(''),narr=[],result=[],result1=[],result2=[],count=0;
    result1 = getParenthesesArr(arr);
    let Rearr = arr.reverse();
    for(let i=0;i<arr.length;i++){
        arr[i]==="("?arr[i]=")":arr[i]="(";
    }
    result2 = getParenthesesArr(Rearr);
    result = result.concat(result1,result2)
    result.sort(function (a,b) {
        return b-a;
    });
    return result[0]*2
};

let getParenthesesArr = function (array) {
    let count = 0,result = [],narr = [];
    for(let i=0;i<array.length;i++){
        if(narr.length===0){
            result.push(count);
        }
        switch (array[i]){
            case '(':
                narr.push(')');
                break;
            default:
                if(array[i]===narr.pop()){
                    count++;
                } else {
                    result.push(count);
                    narr = [];
                    count = 0;
                };
                break;
        }
    };
    console.log(count)
    if(narr.length===0){
        result.push(count);
    };
    console.log(result)
    return result;
}
let str = ")()(((())))(";
console.log(longestValidParentheses(str))





