/**
 * 二叉树的反序列化
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data === null) return null;

    const list = data.split(',');

    const root = new TreeNode(list[0]);
    const queue = [root];
    let cursor = 1;

    while (cursor < list.length) {
        const node = queue.shift();

        const leftVal = list[cursor];
        const rightVal = list[cursor + 1];

        if (leftVal) {
            const leftNode = new TreeNode(leftVal);
            node.left = leftNode;
            queue.push(leftNode);
        }
        if (rightVal) {
            const rightNode = new TreeNode(rightVal);
            node.right = rightNode;
            queue.push(rightNode);
        }
        cursor += 2;
    }
    return root;
};
