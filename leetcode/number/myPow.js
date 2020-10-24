/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if ((x === 0 && 1 / x === 1 / 0) || x === 1) {
        return x;
    }
    if (n < 0) {
       x = 1 / x;
       n = -n;
    }
    let result = 1;
    for (let i = 0; i < n; i++) {
        result = result * x;
    }
    return result;
};

/**
 * 快速幂
 * @param {*} x 
 * @param {*} n 
 */
var myPow = function(x, n) {
    if (n < 0) {
       x = 1 / x;
       n = -n;
    }
    const helper = (x, n) => {
        if (n === 0) return 1;
        if (n % 2 === 0) {
            return helper(x * x, n / 2);
        } else {
            return helper(x * x, parseInt(n / 2)) * x;
        }
    }
    return helper(x, n);
};
