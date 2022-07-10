export default function (fun,duration = 60) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun(...args)
        }, duration)
    }
}