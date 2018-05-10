var isPalindrome = function(x) {
    let num = x;
    if(x<0){
        return false
    };
    let len = 1;
    while (num /10 >=1){
        len*=10;
        num = parseInt(num/10);
    };
    while (x>0){
        if(Math.floor(x / len)===x % 10){
            console.log(x)
            x = (x%len - x%10)/10;
            len/=100;
        } else {
            return false
        }
    }
    return true
};
console.log(isPalindrome(1012101))
