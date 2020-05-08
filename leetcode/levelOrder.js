// 二叉树的层次遍历
/**
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var levelOrder = function(root) {
    let result = [];
    if(!root) return result;

    let tempNode = root,l = result.length-1;
    while (tempNode){
        let thisNode = tempNode;
        if(!tempNode.visited){
            l++;
            if(!result[l]) result.push([]);
            result[l].push(tempNode.val);
            tempNode.visited = true;
        }
        if(tempNode.left&&!tempNode.left.visited){
            tempNode = tempNode.left;
            tempNode.parent = thisNode;
        } else if(tempNode.right&&!tempNode.right.visited){
            tempNode = tempNode.right;
            tempNode.parent = thisNode;
        } else if(tempNode.parent){
            tempNode = tempNode.parent;
            l--;
        } else {
            tempNode = false;
        }
    };
    return result;
};

var node = new TreeNode(1);

node.left = new TreeNode(2);
node.right = new TreeNode(2);

node.left.left = new TreeNode(3);
node.left.right = new TreeNode(4);
node.right.left = new TreeNode(4);
node.right.right = new TreeNode(3);

node.left.left.left = new TreeNode(18)
node.left.right.right = new TreeNode(12)
node.right.left.right = new TreeNode(12)
node.right.right.right = new TreeNode(18)



// 递归实现
var levelOrder = function (root) {
    let result = [];
    if(!root){
        return result;
    };
    levelOrderUtil(root,result,0);
    function levelOrderUtil(node,result,level){
        if(!node) return;
        let list;
        if (result.length === 0 || result.length - 1 < level) {
            list = [];
            list.push(node.val);
            result.push(list);
        } else {
            list = result[level];
            list.push(node.val);
        };
        levelOrderUtil(node.left,result,level+1);
        levelOrderUtil(node.right,result,level+1);
    };

    return result;
}
let result = levelOrder(node)
console.log(result[0],result[1],result[2],result[3]);

