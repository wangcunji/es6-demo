var firstUniqChar = function(s) {
    let len = s.length,word;
    for(let i=0;i<len;i++){
        word = s.charAt(i);
        if(s.substring(0,i).indexOf(word)===-1&&s.substring(i+1).indexOf(word)===-1){
            return i;
        }
    };
    return -1;
};