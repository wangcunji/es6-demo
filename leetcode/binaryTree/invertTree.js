/**
 * 226. 翻转二叉树
 * 翻转一棵二叉树
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    // if (root === null) return null;
    // const result = new TreeNode(root.val);
    // const queue = [];
    // queue.push(root.left);
    // queue.push(root.right);
    // const invertQueue = [];
    // invertQueue.push(result);
    // while (queue.length) {
    //     const len = queue.length;
    //     let invert = null;
    //     for (let i = 0; i < len; i++) {
    //         const tree = queue.shift();
    //         const newTree = tree ? new TreeNode(tree.val) : null;
    //         if (i % 2 === 0) {
    //             invert = invertQueue.shift();
    //             invert.right = newTree;
    //         } else {
    //             invert.left = newTree;
    //         }
    //         if (tree) {
    //             invertQueue.push(newTree);
    //             queue.push(tree.left);
    //             queue.push(tree.right);
    //         }
    //     }
    // }
    // return result;
    if (root == null) {
        return root;
    }
    const queue = []; // 维护一个队列
    queue.push(root); // 初始推入第一层的root

    while (queue.length) {
        const cur = queue.shift(); // 出列的节点

        const temp = cur.left; // 交换出列节点的左右子树
        cur.left = cur.right;
        cur.right = temp;

        if (cur.left) { // 入列考察，因为要继续翻转它们
            queue.push(cur.left);
        }
        if (cur.right) {
            queue.push(cur.right);
        }
    }

    return root;
};

/****** 递归 *******/
var invertTree1 = function (root) {
    if (root === null) {
        return null;
    }
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);
[4, 2, 7, 1, 3, 6, 9]
console.log(invertTree(root));
