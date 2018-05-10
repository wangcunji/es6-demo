var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    let len = s.length, obj = {},word;
    for(let i=0;i<len;i++){
        word = s.charAt(i);
        if(typeof obj[word] !== 'undefined'){
            obj[word]++;
        } else {
            obj[word] = 1;
        }
    };
    for(let j=0;j<len;j++){
        word = t.charAt(j);
        if(typeof obj[word] !== 'undefined'){
            obj[word]--;
        } else {
            return false;
        }
    };
    for(let key in obj){
        if(obj[key]!==0){
            return false;
        }
    };
    return true;
};

let s = "anagram",t = "nagaram";

console.log(isAnagram(s,t))
