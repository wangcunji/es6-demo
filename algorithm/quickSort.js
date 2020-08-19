// 快速排序-简单版本
function quickSort(arr){
    if(typeof arr !== 'object') { return };

    if(arr.length <= 1) { return arr };
    
    let index = Math.floor(arr.length / 2);

    let value = arr[index];

    let leftArr = [],rightArr = [];
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]<value){
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);

        }
    };
    return [...quickSort(leftArr),value,...quickSort(rightArr)];
}

let sortarr = [13,43,23,41,53,64,23,5,53,23,54,21,87,65,56,85];

let newArr = quickSort(sortarr)

console.log(newArr)

// in-place版本
function quickSort(arr) {
    // 交换
    function swap(arr, a, b) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    // 分区
    function partition(arr, left, right) {
        var pivot = arr[right];
        var storeIndex = left;
        for (var i = left; i < right; i++) {
            if (arr[i] < pivot) {
                /**
                 * 将小于pivot的值放在左边，同时storeIndex+1
                 */
                swap(arr, storeIndex, i);
                storeIndex++;
            }
        }
        /**
         * 此时storeIndex左边的值小于pivot，右边的值大于pivot
         * pivot放到storeIndex处
         */ 
        swap(arr, right, storeIndex);
        return storeIndex;
    }

    function sort(arr, left, right) {
        if (left > right) return;
        var storeIndex = partition(arr, left, right);
        // 继续排序子序列
        sort(arr, left, storeIndex - 1);
        sort(arr, storeIndex + 1, right);
    }

    sort(arr, 0, arr.length - 1);
    return arr;
}
