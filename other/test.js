Array.prototype.myReduce = function (fn, prev) {
    for (let i = 0; i < this.length; i++) {
        if (typeof prev === 'undefined') {
            prev = fn(this[i], this[i + 1]);
            ++i;
        } else {
            prev = fn(prev, this[i]);
        }
    }
    return prev;
}

let sum = [1, 2, 3, 4, 5].myReduce((prev, next) => {
    return prev + next;
})

console.log('sum', sum);
