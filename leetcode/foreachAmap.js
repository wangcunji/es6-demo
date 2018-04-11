let arr = [
    {
        name:'John',
        age:12
    },
    {
        name:'Milk',
        age:14
    },
    {
        name:'Jerry',
        age:15
    }
];

//foreach
// var str = arr.forEach(function (item) {
//     if (item.age===14){
//         item.addr="where"
//     }
//     console.log(item)
// })

//map

var strr = arr.map(function (item) {
    if (item.age===15){
        item.addr="where"
    }
    console.log(item)
})
// console.log(str)
console.log(arr)