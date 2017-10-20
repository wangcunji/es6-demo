/**
 * Created by Administrator on 2017/3/20.
 */
var selfConlist  =[
    {
        "name":"张三的啊",
        "mobile":"18369785526"
    },
    {
        "name":"数艘蝴蝶",
        "mobile":"18369798252"
    },
    {
        "name":"放哪得是",
        "mobile":"18369798590"
    }
];
var data = {
    "personName":"票数",
    "personPhone":"18369798590"
};

var obj = {};
var ary = [];
selfConlist.push({
    "name": data.personName,
    "mobile": data.personPhone,
});
for(var i=0;i<selfConlist.length;i++){
    if(!obj[selfConlist[i]]){
        obj[selfConlist[i].mobile] = true;
    }
};
console.log(obj);
// selfConlist = ary;
console.log(selfConlist);