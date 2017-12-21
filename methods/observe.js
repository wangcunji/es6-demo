var model = {}
Object.proxy(model,function (changes) {
    changes.forEach(function (change) {
        console.log(change.type,change.name,change.oldValue)
    })
})

setTimeout(function () {
    model.base = 'addValue'
},1000)
setTimeout(function () {
    model.base = 'ChangeValue'
},2000)