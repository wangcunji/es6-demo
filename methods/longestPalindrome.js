var longestPalindrome = function(s) {
    let str = s,result,substr,strlen = [],obj = {},count=0;
    let arr = str.split("");
    let len = arr.length;
    let l = 0,k=0;
    if(len<2) return str;
    for(let i=0;i<len-1;){
        substr = str.substring(l+1);
        k = substr.indexOf(arr[i]);
        console.log(substr)
        if(k!==-1){
            l = k+len-substr.length;
            let str1 = str.substring(i,l+1);
            let str2 = str1.split("").reverse().join("");
            if(str1===str2){
                strlen.push(str1.length);
                if(!obj[str1.length]){
                    obj[str1.length] = str1
                };
            };
        } else {
            i++;
            l=i;
        }
    };
    strlen.sort(function (a,b) {
        return a-b
    });
    console.log(obj)
    if(!obj[strlen[strlen.length-1]]){
        result = str.substring(0,1)
    } else {
        result = obj[strlen[strlen.length-1]]
    }
    return result;
};
let ss = "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"

let tt = "aptionoranynartionsoc"
// console.log('babadadsc'.substring(1,4),'babadadsc'.substring(4))

console.log(longestPalindrome("babad"))