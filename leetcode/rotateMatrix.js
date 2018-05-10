var rotate = function(matrix) {
    let len = matrix.length;
    for(let i=0;i<len;i++){
        matrix.push([]);
        for(let j=0;j<len;j++){
            matrix[len+i].unshift(matrix[j][i]);
        };
    };
    matrix.splice(0,len);
};

let arr = [[1,2,3],[4,5,6],[7,8,9]];

rotate(arr)

console.log(arr[0])




