function debounce(wait, func, immediate) {
    let timer = null;
    return function anonymous(...arg) {
        timer ? clearTimeout(timer) : null;
        if (immediate) {
            if (!timer) func.call(this, ...arg);
            timer = setTimeout(() => {
                timer = null;
            }, wait);
        } else {
            timer = setTimeout(() => {
                timer = null;
                func.call(this, ...arg);
            }, wait);
        }
    }
}


