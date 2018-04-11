var countAndSay = function(n) {
    let result = [],initNum = '1',count = 1,word = "",len,index;
    result.push(initNum);
    for(let i=1;i<n;i++){
        len = initNum.length;
        word = "";
        for(let j=0;j<len;j++){
            word+=initNum[j];
            count = 1;
            while(j<len&&initNum[j]===initNum[j+1]){
                j++;
                count++;
            };
            index = word.length-1>0?word.length-1:0;
            word=word.substring(0,index)+count.toString()+word.substring(index);
        };
        initNum = word;
        result.push(word);
    };
    return result[n-1];
};

countAndSay(5)
