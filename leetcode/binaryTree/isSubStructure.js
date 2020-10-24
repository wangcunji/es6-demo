/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if (!A || !B) return false;
    let rootB = B.val;
    let tree = A;
    const stacks = [tree];
    const helper = (tree1, tree2) => {
        if (!tree1 && tree2) {
            return false;
        }
        if ((!tree1 && !tree2) || (tree1 && !tree2)) {
            return true;
        }
        return tree1.val === tree2.val && helper(tree1.left, tree2.left) && helper(tree1.right, tree2.right);
    }
    while(stacks.length > 0) {
        tree = stacks.shift();
        tree.left && stacks.push(tree.left);
        tree.right && stacks.push(tree.right);
        if (tree.val === rootB) {
            if (helper(tree, B)) {
                return true;
            }
        }
    }
    return false;
};

/**
 * 另一种解法
 */

var isSubStructure1 = function(A, B) {
    if (!A || !B) return false;
    return helper(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
function helper (tree1, tree2) {
    if (!tree1 && tree2) {
        return false;
    }
    if ((!tree1 && !tree2) || (tree1 && !tree2)) {
        return true;
    }
    return tree1.val === tree2.val && helper(tree1.left, tree2.left) && helper(tree1.right, tree2.right);
}
