// 二叉树的前序遍历
var preorderTraversal = function(root) {
    let result = [];
    if(root.left){
        result.push(traversalTree(root.left));
    } else if(root.right) {
        result.push(traversalTree(root.right));
    } else {
        return result
    }
};

var traversalTree = function(tree){
    return tree.val
}


