/**
 * 637. 二叉树的层平均值
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    const result = [root.val];
    let obj = {};
    const helper = (tree, n) => {
        if (!obj.hasOwnProperty(n)) {
            obj[n] = {
                num: 0,
                len: 0
            };
        }
        if (tree.left) {
            obj[n].num += tree.left.val;
            obj[n].len++;
            helper(tree.left, n + 1);
        }
        if (tree.right) {
            obj[n].num += tree.right.val;
            obj[n].len++;
            helper(tree.right, n + 1);
        }
    }
    helper(root, 0);
    for (let key in obj) {
        const num = obj[key].num;
        const len = obj[key].len;
        if (len) {
            const aver = num / len;
            result.push(aver);
        }
    }
    return result;
};

/** 非递归解法 

const averageOfLevels = (root) => {
    const res = [];
    const queue = [];
    queue.push(root);
    while (queue.length) {
        const levelSize = queue.length;
        let levelSum = 0;
        for (let i = 0; i < levelSize; i++) {
            const cur = queue.shift();
            levelSum += cur.val;
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
        res.push(levelSum / levelSize);
    }
    return res;
};
*/

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.left.left = new TreeNode(10);
root.left.right = new TreeNode(8);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(averageOfLevels(root));
