
// 给定一个二叉树，检查它是否是镜像对称的。
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


// var isSymmetric = function(root) {
//     if(!root){
//         return true
//     };
//     let tempRoot = root.left;
//     let tempArr = [],nodeArr = [],tempVal;
//     while(tempRoot){
//         if(!tempRoot.visited){
//             tempArr.push(tempRoot.val);
//             tempRoot.visited = true;
//             nodeArr.push(tempRoot);
//         }
//         if((tempRoot.left&&!tempRoot.left.visited)||(tempRoot.right&&!tempRoot.right.visited)){
//             if(tempRoot.left){
//                 if(!tempRoot.left.visited){
//                     tempRoot = tempRoot.left;
//                 } else {
//                     tempRoot = tempRoot.right;
//                 }
//             } else {
//                 tempArr.push("空");
//                 tempRoot = tempRoot.right;
//             }
//         } else {
//             if(nodeArr.length===0){
//                 tempRoot = false;
//             } else {
//                 tempRoot = nodeArr.pop();
//             }
//         }
//     };
//     tempRoot = root.right;
//     nodeArr = [];
//     console.log(tempArr)
//     while(tempRoot){
//         if(!tempRoot.visited){
//             tempVal = tempArr.shift()
//             if(tempRoot.val!==tempVal){
//                 return false;
//             };
//             tempRoot.visited = true;
//             nodeArr.push(tempRoot);
//         }    
//         if((tempRoot.left&&!tempRoot.left.visited)||(tempRoot.right&&!tempRoot.right.visited)){
//             if(tempRoot.right){
//                 if(!tempRoot.right.visited){
//                     tempRoot = tempRoot.right;
//                 } else {
//                     tempRoot = tempRoot.left;
//                 }
//             } else {
//                 var isnullVal = tempArr.shift();
//                 if(isnullVal!=="空"){
//                     return false;
//                 };
//                 tempRoot = tempRoot.left;
//             }
//         } else {
//             if(nodeArr.length===0){
//                 tempRoot = false;
//             } else {
//                 tempRoot = nodeArr.pop();
//             }
//         }
//     };
//     return true&&tempArr.length===0
// };
var node = new TreeNode(1)

node.left = new TreeNode(2);
node.right = new TreeNode(2);

// node.left.left = new TreeNode(3);
node.left.right = new TreeNode(4);
node.right.left = new TreeNode(4);
// node.right.right = new TreeNode(3);

// node.left.left.left = new TreeNode(18)
// node.left.right.right = new TreeNode(12)
// node.right.left.right = new TreeNode(12)
// node.right.right.right = new TreeNode(18)



// 递归实现

var isSymmetric = function(root){
    return isSymmetricUtil(root,root)
};

var isSymmetricUtil = function(left,right){
    if(left===null&&right===null) return true;
    if(left===null||right===null) return false;
    return (left.val===right.val) && isSymmetricUtil(left.left,right.right) && isSymmetricUtil(left.right,right.left);
};
console.log(isSymmetric(node))



