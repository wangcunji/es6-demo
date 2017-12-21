function type(data){
    
    return Object.prototype.toString.call(data).match(/.*\s(.*)]/)[1].toLowerCase();
    
};

var aa = {a1:"a1",b2:{b3:"b3",b4:{b5:"b5"}},c2:"c2"};
// console.log(aa.b2.b3)
var bb = {}
console.log(Object.keys(aa))
function copyObj(obj) {
    var result = {};
    if(type(obj)==="object"){
        var keyList = Object.keys(obj)
        for(var i=0;i<keyList.length;i++){
            var key = keyList[i];
            var value = obj[key]
            // console.log(value)
            result[key] = copyObj(value)
        }
    } else {
        result = obj
    }
    return result
}

function equaldata(obj1,obj2) {
    var result = false;
    if(type(obj1)===type(obj2)){
        if(type(obj1)==="string"){
            if(obj1===obj2){
                result = true;
            }
        };
        if(type(obj1)==="object"){
            let keyList1 = Object.keys(obj1),
                keyList2 = Object.keys(obj2);
            if(keyList1.length===keyList2.length){
                for(let i=0;i<keyList1.length;i++){
            
                }
            }
        };
        if(type(obj1)==="array"){
        
        }
    }
}

bb = copyObj(aa)
console.log(bb)
bb.b2.b3 = "haha"
console.log(bb.b2.b3 )
console.log(aa.b2.b3)