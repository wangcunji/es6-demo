function merge(left,right){
    var result = [];
    while(left.length>0&&right.length>0){
        if(left[0]<right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    };
    return result.concat(left,right);
}

function mergeSort(arr){
    let len = arr.length;
    if(len<=1) return arr;
    let middle = Math.floor(len / 2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left),mergeSort(right));
}

var num = [8,94,15,88,55,76,21,39,4,109,45];

console.log(mergeSort(num))