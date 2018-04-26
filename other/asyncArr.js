var arr = ['a','b','c']

for(let i=0;i<arr.length;i++){
    setTimeout(function(){
        console.log(i)
        console.log(arr[i]);
    },2000);
};