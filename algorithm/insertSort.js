let sarr = [5,4,3,8,6,45,8,1,85,23,34];
function insertSort(arr){

    var key;

    for(let i = 1; i < arr.length ; i++){
        
        var j = i - 1;

        key = arr[i];
        
        while(j >= 0 && arr[j] > key){
          
            arr[j+1] = arr[j];
            j --;
        };
        arr[j + 1] = key;
    }

    return arr;
}

console.log(insertSort(num));

