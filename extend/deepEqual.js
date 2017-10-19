export const type = (data) => {
    
    return Object.prototype.toString.call(data).match(/.*\s(.*)]/)[1].toLowerCase();
    
};

/**
 * deepClone
 */
export const deepClone = (arg) =>  {
    
    let result;
    //undefined null '' 0 false
    if (!arg) { return arg };
    //基础类型判断
    let baseTypeList = ['string', 'number', 'boolen'];
    
    if (baseTypeList.indexOf(typeof arg) !== -1) {
        return arg
    }
    
    //复杂类型判断
    if (type(arg) === 'array') {
        result = [];
        
        arg.forEach((item, index) => {
            result[index] = deepClone(item)
        })
    } else if (type(arg) === 'object') {
        
        result = {};
        
        let keysList = Object.keys(arg);
        for (let i = 0, len = keysList.length; i <= len; i++) {
            
            let key = keysList[i];
            let value = arg[key];
            
            result[key] = deepClone(value);
        }
    } else if (type(arg) === 'date') {
        
        result = new Date(arg);
    } else {
        
        result = arg;
    }
    
    return result;
};
/**
 * deepEqual
 */
export const deepEqual = (arg1, arg2) => {
    if (arg1 === arg2) return true;
    //NaN
    if (typeof arg1 === 'number' && typeof arg2 === 'number' && isNaN(arg1) && isNaN(arg2)) {
        
        return true;
    }
    
    //function
    if (type(arg1) === 'function' && type(arg2) === 'function') {
        
        return arg1.toString() === arg2.toString();
    }
    
    //regexp
    if (type(arg1) === 'regexp' && type(arg2) === 'regexp') {
        
        return arg1.toString() === arg2.toString();
    }
    
    //date
    if (type(arg1) === 'date' && type(arg2) === 'date') {
        
        return arg1.getTime() === arg2.getTime();
    }
    if (type(arg1) === 'object' && type(arg2) === 'object') {
        
        let arg1KeyList = Object.keys(arg1);
        let arg2KeyList = Object.keys(arg2);
        
        if (arg1KeyList.length !== arg2KeyList.length) return false;
        
        let len = arg1KeyList.length;
        
        for (let i = 0; i <= len; i++) {
            
            let arg1Key = arg1KeyList[i],
                arg2Key = arg2KeyList[i];
            
            if (type(arg1Key) !== type(arg2Key)) return false;
            
            if (!deepEqual(arg1Key, arg2Key)) return false;
        }
        
        return true;
    } else if (type(arg1) === 'array' && type(arg2) === 'array') {
        
        let arg1Length = arg1.length;
        let arg2Length = arg2.length;
        //长度判断
        if (arg1Length !== arg2Length) return false;
        
        for (let i = 0; i <= arg1Length; i++) {
            let arg1Key = arg1[i],
                arg2Key = arg1[i];
            
            if (type(arg1Key) !== type(arg2Key)) return false;
            
            if (!deepEqual(arg1Key, arg2Key)) return false;
        }
        
        return true;
    } else {
        
        return false;
    }
};