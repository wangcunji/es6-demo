function selectSort(arr) {
    var len = arr.length;
    var temp;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[i]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }

    }
    return arr;
}

let newa = selectSort([14, 2, 6, 3, 1, 4, 9, 53, 9])
console.log(newa)