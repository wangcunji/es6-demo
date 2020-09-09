function throttl(wait, func) {
    let previous = 0;
    let timer = null;
    let remaining = 0;
    return function anonymous(...arg) {
        let now = new Date().getTime();
        remaining = wait - (now - previous)
        if (remaining <= 0) {
            clearTimeout(timer);
            timer = null;
            previous = new Date().getTime();
            func.call(this, ...arg);
        } else if (!timer) {
            timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null;
                previous = new Date().getTime();
                func.call(this, ...arg);
            }, remaining);
        }
    }
}
