/**
 * 二叉树的层次遍历 -- bfs
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
  * @return {number[][]}
  * 递归
  */
var levelOrder = function (root) {
    const result = [];
    if (root === null) return result;
    /**
     * @param {*} tree 当前节点
     * @param {number} level 当前节点的层次
     */
    const helper = (tree, level) => {
        if (tree === null) return;
        // result的长度不到当前节点，增加长度
        if (result.length <= level) {
            result.push([]);
        }
        // result的每一项的索引代表节点的层次
        result[level].push(tree.val);
        helper(tree.left, level + 1);
        helper(tree.right, level + 1);
    }
    helper(root, 0);
    return result;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 迭代
 */
var levelOrderIteration = function (root) {
    const result = [];
    const stacks = [];
    if (root === null) return result;
    stacks.push(root);
    // 传入null作为一个层级结束的标志，此时将该层级的数据放入result；
    stacks.push(null);
    let tree;
    let levelVals = [];
    while (stacks.length !== 0) {
        tree = stacks.shift();
        if (tree) {
            levelVals.push(tree.val);
            tree.left && stacks.push(tree.left);
            tree.right && stacks.push(tree.right);
        } else {
            // 将该层的数据传入result，同时levelVals置空
            result.push(levelVals.splice(0)); 
            // 当stacks的长度为零时表明到最后一层，此时不用传入null，否则传入null，类似封口
            stacks.length > 0 && stacks.push(null);
        }
    }
    return result;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(levelOrder(root));
