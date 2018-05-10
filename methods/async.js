const getsomeName = async function (name) {
    let myname = name;
    myname = await changeName();
    return myname
}

async function changeName (){
    let myname = '';
    return await new Promise(resolve => {
        setTimeout(function(){
            myname = 'John'
            resolve(myname)
        },1000)
    })
}

getsomeName('milk').then(res => {
    console.log(res)
})

