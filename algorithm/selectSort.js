function selectSort(arr) {
    var len = arr.length;
    var temp,minIndex;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
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
