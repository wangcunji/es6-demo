function orderArr (len) {
    let Fs = new Array()
    for(let i=0;i<len;i++){
        if(i<2){
            Fs.push(i)
        } else {
            Fs.push(Fs[i-1]+Fs[i-2])
        }
    }
    return Fs
}

let orderList = orderArr(12);

console.log(orderList)