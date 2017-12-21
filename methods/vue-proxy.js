var VM = {
    data(){
        return {
            name:'test'
        }
    },
    el:'#id'
}

function proxy(VM,key) {
    Object.defineProperty(VM,key,{
        configurable: true,
        enumerable: true,
        get:function () {
            return VM._data[key]
        },
        set:function (value) {
            VM._data[key] = value;
        }
    })
}
if(VM['data']){
    let data_ = VM['data']()
    VM['_data'] = data_
    // console.log(data_)
    for(var key in VM['_data']){
        proxy(VM,key)
    }
} else {
    throw new Error('this is undefined')
}
console.log(VM.name)
VM.name = 'newValue'
console.log(VM.name)
