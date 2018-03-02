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
    get(target,key,receiver) {
        if(key[0]==='_'){
            throw new Error("this is a private variable");
        }
        return target[key];
    },
    set(target,key,value,receiver) {
        console.log(target);
        console.log(key);
        console.log(value);
        target[key] = value;
    }
};

let testObj = {
    name: 'Job'
};

let proxyObj = new Proxy(new getArea(10,10),HandleObj);

var areaCalc = new Proxy(new getArea(10,10),HandleObj);
console.log(areaCalc.muliCalc);
console.log(JSON.stringify(areaCalc));



