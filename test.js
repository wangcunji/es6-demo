function maxMoney(arr) {
    let max = 0;
    const len = arr.length;
    const helper = (index, num) => {
        if (index >= len) {
            return num;
        }
        num += arr[index];
        return Math.max(helper(index + 2, num), helper(index + 3, num));
    };
    max = Math.max(helper(0, 0), helper(1, 0));
    return max;
}

console.log(maxMoney([2, 0, 0, 4, 5, 6]));
// console.log(NaN !== 0);
// console.log(null !== 0);
// console.log(undefined !== 0);
// console.log(NaN + 1);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log(NaN / 1);
// console.log(null / 1);
// console.log(undefined / 1);
// console.log(+0 === - 0);
// console.log(+0 === 0);
// console.log(0 === -0);
// console.log(1 / +0, 1 / -0, 1 / +0 === 1 / -0);
// console.log(0 === -0);
// console.log(Object.is(+0, -0))
console.log(Object.is(NaN, NaN))
console.log(NaN === NaN);
// if (!Object.is) {
//     Object.is = function (x, y) {
//         // SameValue algorithm
//         if (x === y) { // Steps 1-5, 7-10
//             // Steps 6.b-6.e: +0 != -0
//             return x !== 0 || 1 / x === 1 / y;
//         } else {
//             // Step 6.a: NaN == NaN
//             return x !== x && y !== y;
//         }
//     };
// }
