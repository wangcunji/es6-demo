/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let len = pushed.length;
    if (len === 0) return true;
    let stacks = [];
    let index = 0;
    for (let i = 0; i < len; i++) {
        stacks.push(pushed[i]);
        let sLen = stacks.length;
        while(stacks.length > 0 && stacks[sLen - 1] ===  popped[index]) {
            stack.pop();
            index++;
        }
    }
    return stacks.length === 0;
};
