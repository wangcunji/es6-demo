var strlen = 0,j,k;
var longestPalindrome = function(s) {
    let str = s,str1,str2,maxLen = 0,strlen = 0,j,k,x,y,m,n,start,end;
    let len = str.length;
    if(len<2) return str;
    for(let i=0;i<len;i++){
        x = i;
        y = i;
        while (x>=0&&y<len&&str.charAt(x)===str.charAt(y)){
            x--;
            y++;
        };
        if(str.charAt(i)===str.charAt(i+1)){
            j = i;
            k = i+1;
            while (j>=0&&k<len&&str.charAt(j)===str.charAt(k)){
                j--;
                k++;
            };
        };
        if(k-j>=y-x){
            n = j;
            m = k;
        } else {
            n = x;
            m = y;
        };
        if(strlen<m-n-1){
            start = n+1;
            end = m;
            strlen = m-n-1;
        }
    };
    return str.substring(start,end)
};
let ss = "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"

let tt = "apation"
// console.log('babadadsc'.substring(1,4),'babadadsc'.substring(4))
// console.log(tt.substring(0,3))
console.log(longestPalindrome('cbbbd'))