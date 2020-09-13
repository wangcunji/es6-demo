class myPromise {
    constructor(fn) {
        this.state = 'Pending';
        this.value = '';
        this.reason = '';
        this.resolveFn = [];
        this.rejectFn = [];
        fn(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(value) {
        this.state = 'Fulfilled';
        this.value = value;
        setTimeout(() => {
            this.resolveFn.forEach((fn) => {
                fn(value);
            });
        })
    }
    reject(reason) {
        this.state = 'Rejected';
        this.reason = reason;
        this.rejectFn.forEach((fn) => {
            fn(reason);
        })
    }
    then(onFulfilled, onRejected) {
        console.log('this.state', this.state);
        switch (this.state) {
            case 'Pending':
                if (typeof onFulfilled === 'function') {
                    this.resolveFn.push(onFulfilled);
                }
                if (typeof onRejected === 'function') {
                    this.rejectFn.push(onRejected);
                }
                break;
            case 'Fulfilled':
                onFulfilled();
                break;
            case 'Rejected':
                onRejected();
                break;
        }
        return this;
    }
}

let p = new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('timer');
    }, 100);
});

p.then((res) => {
    console.log(res);
}).then((res) => {
    console.log('..', res);
})

