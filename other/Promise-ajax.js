export class passData {
    constructor() {}
    sayName() {
        console.log('pop')
    }
    postData(url, data) {
        return new Promise(function(resolve, reject) {
            $.ajax({
                url: url,
                method: 'POST',
                headers: {
                    ClientType: "Web",
                    Equipment: "Web",
                    ClientSystem: "Web",
                    baseuserid: "b18fd6e8-0b7a-420e-b8cd-913a9b727954",
                    baseEntId: "59dea301-a9c1-4511-bb0e-d801af7aa2df"
                },
                data: data,
                success: res => {
                    resolve(res)
                },
                error: err => {
                    reject(err);
                }
            })
        })
    }

};