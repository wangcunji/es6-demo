const myWorker = new Worker('./worker.js');

const start = new Date().getTime();
myWorker.postMessage(10000000);

myWorker.onmessage = (e) => {
    const end = new Date().getTime();
    console.log('diff', end - start);
    console.log('get response', e.data);
}
