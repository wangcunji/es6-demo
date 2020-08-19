// 二叉树的前序遍历
var preorderTraversal = function(root) {
    if (root !== null) {
        console.log(root.val);
        preorderTraversal(root.left);
        preorderTraversal(root.right);
    }
};



