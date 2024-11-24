export const debounce = (func: Function , duration:number)=>{
    let timeout: null|number
    return function (...args) {
        const effect = () => {
            timeout = null
            return func.apply(this, args)
        }
        if(timeout)
        window.clearTimeout(timeout)
        timeout = window.setTimeout(effect, duration)

    }
}