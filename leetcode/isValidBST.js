//  验证二叉搜索树

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isValidBST = function(root) {
    if(!root){
        return true;
    };
    if(root.left&&root.right){
        if(root.left.val<root.val&&root.right.val>root.val){
            return isValidBST(root.left)&&isValidBST(root.right)
        } else {
            return false;
        };
    } else if(root.left){
        if(root.left.val<root.val){
            return isValidBST(root.left)&&isValidBST(root.right)
        } else {
            return false;
        }
    } else if(root.right){
        if(root.right.val>root.val){
            return isValidBST(root.left)&&isValidBST(root.right)
        } else {
            return false;
        }
    } else {
        return true
    };
};