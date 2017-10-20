let str = 'loppkdasauuuqsseqwes', value,strObj = {}

let len = str.length

for(let i=0;i<len;i++){
    value = str.charAt(i)
    
    if(strObj[value]&&strObj[value].value===value){
        strObj[value].count=++strObj[value].count
    } else {
        strObj[value] = {}
        strObj[value].value = value
        strObj[value].count = 1
    }
}
console.log(strObj)
for( key in strObj){
    console.log(`${strObj[key].value}:${strObj[key].count}`)
}