/**
 * 防抖(函数在特定的时间内不被再调用后执行)
 * @param fn
 * @param delay
 * @returns {Function}
 */
function debounce(fn, delay) {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context,args)
        },delay)
    }
}
/**
 * 节流（在让函数在特定的时间内只执行一次）
 * @param fn
 * @param delay
 * @returns {Function}
 */
const throttle = function(fn,delay) {
    let timer = null;
    return function() {
        let context = this
        let args = arguments
        if(!timer) {
            timer = setTimeout(()=> {
                fn.apply(context,args)
                clearTimeout(timer)
                timer = null;
        },delay)
        }
    }
}