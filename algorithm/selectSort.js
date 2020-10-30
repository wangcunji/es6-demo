function selectSort(arr) {
    var len = arr.length;
    var temp,minIndex;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        // 从剩余数组中找到最小的
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; //如果当前的值小于之前选择的最小值，将minIndex设为当前索引-j
            }
        };
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

let newa = selectSort([14, 2, 6, 3, 1, 4, 9, 53, 9]);

console.log(selectSort(newa));
