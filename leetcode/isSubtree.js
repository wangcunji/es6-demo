/**
 *  给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。
 *  s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    let result = false;
    let nodes = [];
    childNode(s, nodes);
    let i = 0;
    while(!result && i < nodes.length) {
        result = valiSame(nodes[i], t);
        console.log(nodes[i], t, result);
        i++;
    }
    return result;
};

/**
 * DFS（深度优先遍历）获取所有子树
 * @param {*} tree 
 * @param {*} nodes 
 */

function childNode(tree, nodes) {
    if (tree) {
        nodes.push(tree);
        childNode(tree.left, nodes);
        childNode(tree.right, nodes);
    }
}

/**
 * BFS（广度优先遍历）获取所有子树
 * @param {*} tree 
 * @param {*} nodes 
 */
let stack = [];
function BFSchildNode(tree, nodes) {
    if (tree) {
        nodes.push(tree);
        if (tree.left) {
            stack.push(tree.left);
        }
        if (tree.right) {
            stack.push(tree.right);
        }
        let nextNode = stack.shift();
        BFSchildNode(nextNode, nodes);
    }
}

function valiSame(a, b) {
    if (a === b) return true;
    if ((!a && b) || (a && !b)) return false
    return a.val === b.val && valiSame(a.left, b.left) && valiSame(a.right, b.right);
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var node = new TreeNode(3);

node.left = new TreeNode(4);
node.right = new TreeNode(5);

node.left.left = new TreeNode(1);
node.left.right = new TreeNode(2);
node.left.left.left = new TreeNode(6);
node.left.right.left = new TreeNode(7);


var t = new TreeNode(4);

t.left = new TreeNode(1);
t.right = new TreeNode(2);
t.left.left = new TreeNode(6);
t.right.left = new TreeNode(7);
let nodes = [];
BFSchildNode(node, nodes);
console.log(nodes, stack)
