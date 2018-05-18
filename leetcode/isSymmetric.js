
// 给定一个二叉树，检查它是否是镜像对称的。
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var isSymmetric = function(root) {
    if(!root){
        return true
    };
    let tempRoot = root.left;
    let tempArr = [],nodeArr = [],tempVal;
    while(tempRoot){
        if(!tempRoot.visited){
            tempArr.push(tempRoot.val);
            tempRoot.visited = true;
            nodeArr.push(tempRoot);
        }    
        if(tempRoot.left||tempRoot.right){
            if(!tempRoot.left&&tempRoot.visited){
                tempArr.push("空");
            };
            if(tempRoot.left&&!tempRoot.left.visited){
                tempRoot = tempRoot.left;
            } else {
                tempRoot = tempRoot.right;
            }
        } else {
            if(nodeArr.length===0){
                tempRoot = false;
            } else {
                tempRoot = nodeArr.pop();
            }
        }
    };
    tempRoot = root.right;
    nodeArr = [];
    console.log(tempArr)
    while(tempRoot){
        if(!tempRoot.visited){
            tempVal = tempArr.shift()
            if(tempRoot.val!==tempVal){
                return false;
            };
            tempRoot.visited = true;
            nodeArr.push(tempRoot);
        }    
        if(tempRoot.left||tempRoot.right){
            if(!tempRoot.right&&tempRoot.visited){
                console.log(tempArr.shift());
            };
            if(tempRoot.right&&!tempRoot.right.visited){
                tempRoot = tempRoot.right;
            } else {
                tempRoot = tempRoot.left;
            }
        } else {
            if(nodeArr.length===0){
                tempRoot = false;
            } else {
                tempRoot = nodeArr.pop();
            }
        }
    };
    return true&&tempArr.length===0
};
var node = new TreeNode(1)

node.left = new TreeNode(2);
node.right = new TreeNode(2);

node.left.left = new TreeNode(3);
node.left.right = new TreeNode(2);
node.right.left = new TreeNode(2);
// node.right.right = new TreeNode(3);

// node.left.left.left = new TreeNode(-1)
// node.left.left.right = new TreeNode(1)
// node.left.right.left = new TreeNode(3)
// node.left.right.right = new TreeNode(4)

console.log(isSymmetric(node))

