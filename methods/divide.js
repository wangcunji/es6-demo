var divide = function(dividend, divisor) {
    if (dividend === 0 || divisor === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    let sign = dividend >0 === divisor > 0;
    let result = 0,count = 1,base = divisor;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while (dividend>=divisor){
        count = 1;
        base = divisor;
        while (base <= (dividend>>1)){
            base = base << 1;
            count = count << 1;
        };
        result += count;
        dividend -= base;
    };
    if(!sign) result = -result;
    return result;
};
let i = 11;
console.log(i << 1);
