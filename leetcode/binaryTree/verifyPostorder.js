/**
 * 剑指 Offer 33. 二叉搜索树的后序遍历序列
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
 */
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    const helper = (postorder) => {
        const len = postorder.length;
        if (!len) return true;
        const rootVal = postorder[len - 1];
        let left = [];
        let right = [];
        let start = 0;
        let end = 0;
        for (let i = 0; i < len - 1; i++) {
            let val = postorder[i];
            if (val < rootVal) {
                left.push(val);
                start = i;
            } else {
                if (right.length === 0) {
                    end = i;
                }
                right.push(val);
            }
        }
        return start < end && helper(left) && helper(right);
    }
    return helper(postorder);
};

/**
 * 更好的解法
 */

var verifyPostorder1 = function(postorder) {
    const helper = (postorder) => {
        const len = postorder.length;
        if (!len) return true;
        const rootVal = postorder[len - 1];
        let index = 0;
        while(index < len && postorder[index] < rootVal) {
            index++;
        }
        for (let i = index; i < len; i++){
            if (postorder[i] < rootVal) {
                return false
            }
        }
        return helper(postorder.slice(0, index)) && helper(postorder.slice(index));
    }
    return helper(postorder);
};
