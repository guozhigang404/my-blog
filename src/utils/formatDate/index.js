export default function (timestamp, showTime = false) {
    const date = new Date(+timestamp);
    const year = date.getFullYear();
    const mouth = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    if(showTime) {
        const h = date.getHours();
        const m = date.getMinutes().toString().padStart(2, "0");
        const s = date.getSeconds().toString().padStart(2, "0");
        return `${year}-${mouth}-${day} ${h}:${m}:${s}`;
    }
    return `${year}-${mouth}-${day}`
}