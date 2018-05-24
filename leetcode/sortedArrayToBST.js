//  将有序数组转换为二叉搜索树

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
    let len = nums.length;
    if(!len) return [];
    let rootVal,isodd;
    if(len % 2 === 0){
        rootVal = len / 2;
        isodd = false;
    } else {
        rootVal = Math.floor(len / 2);
        isodd = true;
    };
    let root = new TreeNode(nums[rootVal]);
    let i = rootVal-1,j = rootVal+1,leftNode = rightNode = root;
    while(i>=0||j<len){
        if(i>=0){
            leftNode.left = new TreeNode(nums[i]);
            console.log(isodd,j,i)
            if(!isodd&&j===len-1&&i!==0){ 
                leftNode.right = new TreeNode(nums[0]);
                console.log(leftNode,leftNode.left.val,leftNode.right.val);
            };
            leftNode = leftNode.left;
            i--;
        };
        if(j<len) {
            rightNode.right = new TreeNode(nums[j]);
            rightNode = rightNode.right;
            j++;
        }
    };
    return root;
};

let arr = [0,1,2,3,4,5]

console.log(sortedArrayToBST(arr))

