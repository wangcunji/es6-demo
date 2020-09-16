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