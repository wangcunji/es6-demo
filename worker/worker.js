function add (a, b) {
    return a + b;
}

function count(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result;
}

console.log('worker');

setTimeout(() => {
    console.log('setTimeout');
}, 1000)

onmessage = (e) => {
    console.log('get data', e.data);
    postMessage(count(+e.data));
}
