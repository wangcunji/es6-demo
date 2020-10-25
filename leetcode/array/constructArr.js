//对称遍历
var constructArr = function(a) {
    let left = [];
    let right = [];
    let len = a.length;
    for(let i = 0;i < len; i++){
        let j = en-i-1;
        if(i === 0){
            left[i] = a[i];
            right[j] = a[j];
        }else{
            left[i] = left[i-1] * a[i];
            right[j] = right[j+1] * a[j]; 
        }
       
    }
    // console.log(left);
    // console.log(right);

    let b = [];
    for(let i = 0; i < len; i++){
        if(i === 0) b[i] = right[i+1];
        else if(i === len-1) b[i] = left[i-1];
        else b[i] = left[i-1] * right[i+1];
    }
    return b;
};
