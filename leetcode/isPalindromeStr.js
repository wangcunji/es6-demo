var isPalindrome = function(s) {
    let len = s.length;
    if(len<=1) return true;
    let middle = Math.floor(len / 2),Regx = /^[A-Za-z0-9]*$/,firstWord,lastWord;
    for(let i=0,j=len-i-1;i<j;){
        firstWord = s.charAt(i);
        lastWord = s.charAt(j);
        while(!Regx.test(firstWord)){
            firstWord = s.charAt(i+1);
            i++;
        };
        while(!Regx.test(lastWord)){
            lastWord = s.charAt(j-1);
            j--;
        };
        if(firstWord!==lastWord&&firstWord.toUpperCase()!==lastWord.toUpperCase()){
            return false;
        };
        i++;
        j--;
    };
    return true
};

console.log(isPalindrome("ab."))

