var plusOne = function(digits) {
    let len = digits.length;
    let num = 1;
    for(let i=len-1;i>=0;i--){
        let count = digits[i]+num;
        if(count===10){
            digits[i] = 0;
            num = 1;
        } else {
            digits[i] = count;
            num = 0;
        };
    };
    if(digits[len-1] === 0){
        digits.unshift(1)
    };
    return digits;
};