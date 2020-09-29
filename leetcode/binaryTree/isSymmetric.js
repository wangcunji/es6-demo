/**
 * 对称二叉树
 * https: //leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoxzgv/
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
 * @return {boolean}
 * 递归
 */
var isSymmetric = function (root) {
    if (root === null) return true;
    const helper = (leftTree, rightTree) => {
        if (!leftTree && !rightTree) return true;
        if ((!leftTree && rightTree) || (leftTree && !rightTree)) return false;
        return leftTree.val === rightTree.val && helper(leftTree.left, rightTree.right) && helper(leftTree.right, rightTree.left);
    }
    return helper(root.left, root.right);
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * 迭代 -- bfs
 */
var isSymmetricIteration = function (root) {
    if (root == null) return true;

    const leftStack = [root.left]; // 队列存放左子树
    const rightStack = [root.right]; // 队列存放右子树

    while (leftStack.length && rightStack.length) {
        const left = leftStack.shift();
        const right = rightStack.shift();
        // 左右子树都为空，没有子节点可入列，continue
        if (left == null && right == null) {
            continue;
        }
        if ((left == null && right) || (left && right == null)) {
            return false;
        }
        if (left.val != right.val) {
            return false;
        }
        leftStack.push(left.left);
        rightStack.push(right.right);
        leftStack.push(left.right);
        rightStack.push(right.left);
    }
    // 其中一个子树还有节点没遍历，说明不对称
    if (leftStack.length || leftStack.length) {
        return false;
    } else {
        return true;
    }
};

// [1,2,2,3,4,4,3,5,6,null,7,7,null,6,5]
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(3);

console.log(isSymmetricIteration(root));

