/*jshint esversion: 6 */
class getArea{
    constructor(width,height){
        this._width = width;
        this._height = height;
    }
    get muliCalc(){
        return this._width*this._height;
    }
}

let HandleObj = {
    get(target, key, receiver) {
        if(key[0]==='_'){
            throw new Error("this is a private variable");
        }
        return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
        return Reflect.set(target, key, value, receiver);
    }
};

let testObj = {
    name: 'Job'
};

let proxyObj = new Proxy(new getArea(10,10), HandleObj);

var areaCalc = new Proxy(new getArea(10,10), HandleObj);
console.log(areaCalc.muliCalc);
console.log(JSON.stringify(areaCalc));



