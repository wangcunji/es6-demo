// 二叉树的最大深度   
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}



var maxDepth = function(root) {
    let count = 1,tempRoot = root;
    if(!root) return 0;
    if(tempRoot.left||tempRoot.right){
        return Math.max(count + maxDepth(tempRoot.left), count+ maxDepth(tempRoot.right));
    } else {
        return count;
    }
};


let root = new TreeNode(0)

root.left = new TreeNode(1)
root.right = new TreeNode(2)

root.right.right = new TreeNode(3)

console.log(maxDepth(root))
