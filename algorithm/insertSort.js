let sarr = [5,4,3,8,6,45,8,1,85,23,34];
function insertSort(arr){

    var key;

    for(let j = 1; j < arr.length ; j++){
        
        var i = j - 1;

        key = arr[j];
        
        while(i >= 0 && arr[i] > key){
          
            arr[i+1] = arr[i];
            i --;
        };
        arr[i + 1] = key;
    }

    return arr;
}

console.log(insertSort(num));

