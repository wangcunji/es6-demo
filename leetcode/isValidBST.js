//  验证二叉搜索树

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isValidBST = function(root) {
    return ReisValidBST(root,-Infinity,Infinity);
};

var ReisValidBST = function(node,minVal,maxVal){
    if(!node){
        return true;
    };
    if(minVal<node.val&&node.val<maxVal){
        return ReisValidBST(node.left,minVal,node.val)&&ReisValidBST(node.right,node.val,maxVal)
    } else {
        return false;
    }
}


var node = new TreeNode(3)

node.isN = true;
node.left = new TreeNode(1);
node.right = new TreeNode(5);

// node.left.left = new TreeNode(0);
// node.left.right = new TreeNode(2);
// node.right.left = new TreeNode(2);
// node.right.right = new TreeNode(6);


console.log(node)


