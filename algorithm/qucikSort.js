//快速排序
function quickSort(arr){
    if(typeof arr !== 'object') { return };

    if(arr.length <= 1) { return arr };
    
    let index = Math.floor(arr.length / 2);

    let value = arr.splice(index,1)[0];

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










