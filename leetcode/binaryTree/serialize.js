/**
 * 二叉树的序列化
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const stacks = [root];
    const result = [];
    if (root === null) return '[]';
    let tree = null;
    const notAllNull = (array) => {
        return array.some((item) => {
            return item !== null;
        });
    };
    while (stacks.length) {
        tree = stacks.shift();
        if (tree) {
            result.push(tree.val);
            stacks.push(tree.left);
            stacks.push(tree.right);
        } else if (notAllNull(stacks)) {
            result.push(null);
        }
    }
    return result.join(',');
};

const notAllNull = (array) => {
    return array.some((item) => {
        return item !== null;
    });
};

console.log(notAllNull([null, null, null]))
