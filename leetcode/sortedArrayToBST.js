//  将有序数组转换为二叉搜索树

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
    let len = nums.length;
    if(!len) return null;
    let centerIndex = Math.floor(len / 2);
    let root = new TreeNode(nums[centerIndex]);
    let i = centerIndex - 2;
    let j = centerIndex + 2;
    let leftNode = root;
    let rightNode = root;
    while(i >= 0 || j < len){
        if (i >= 0) {
            leftNode.left = createTree(nums, i);
            leftNode = leftNode.left.left;
            i -= 2;
        }
        if (j < len) {
            rightNode.right = createTree(nums, j);
            rightNode = rightNode.right.right;
            j += 2;
        }
    };
    if (centerIndex < 2 && centerIndex > 0) {
        leftNode.left = new TreeNode(nums[centerIndex - 1]);
    }
    return root;
};

function createTree(nums, i) {
    let node = new TreeNode(nums[i]);
    if (i > 0) {
        node.left = new TreeNode(nums[i - 1]);
    }
    if (i < nums.length - 1) {
        node.right = new TreeNode(nums[i + 1]);
    }
    return node;
};

let arr = [-2,-1,0,1,2,3,4,5,6,7,8,9,10,11]

console.log(sortedArrayToBST(arr))

