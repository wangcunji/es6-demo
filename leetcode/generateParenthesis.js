var generateParenthesis = function(n) {
    let result = [];
    addParenthesis(n,'',0,0,result);
    return result
};

var addParenthesis = function (num,str,open,close,result) {
    if(str.length===num*2){
        result.push(str);
        return;
    };
    if(open<num){
        addParenthesis(num,str+'(',open+1,close,result)
    };
    if(close<open){
        addParenthesis(num,str+')',open,close+1,result)
    };
}
console.log(generateParenthesis(3))
// ["((()))","(()())","(())()","()(())","()()()"]
// abccba abbcca abbacc aabccb aabbcc