/**
 * 925. 长按键入
 * https://leetcode-cn.com/problems/long-pressed-name/
 */
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let nameObj = {};
    let typedObj = {};
    const helper = (str) => {
        const obj = {};
        const len = str.length;
        let prev = '';
        let key = '';
        for (let i = 0; i < len; i++) {
            let word = str[i];
            if (word === prev) {
                obj[key]++;
            } else {
                key = `${word}${i}`;
                obj[key] = 1;
            }
            prev = word;
        }
        return obj;
    };
    nameObj = helper(name);
    typedObj = helper(typed);
    console.log(nameObj);
    console.log(typedObj);
    const nameKeys = Object.keys(nameObj);
    const typedKeys = Object.keys(typedObj);
    const nameKeysLen = nameKeys.length;
    const typedKeysLen = typedKeys.length;
    if (nameKeysLen !== typedKeysLen) {
        return false;
    }
    for (let j = 0; j < nameKeysLen; j++) {
        let namekey = nameKeys[j];
        let typedkey = typedKeys[j];
        if (namekey[0] !== typedkey[0]) {
            return false;
        }
        if (!typedObj[typedkey] || typedObj[typedkey] < nameObj[namekey]) {
            return false;
        }
    }
    return true;
};

var isLongPressedName1 = function(name, typed) {
    const nameLen = name.length;
    const typedLen = typed.length;
    if(nameLen > typedLen){
        return false;
    }
    let i = 0;
    let j = 0;
    while(i < nameLen && j < typedLen) {
        if (name[i] === typed[j]) {
            i++;
            j++;
        } else if (j > 0 && typed[j] === typed[j - 1]) {
            j++;
        } else {
            return false;
        }
    }
    return i === nameLen;
}
