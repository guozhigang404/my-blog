import styles from "./index.module.less"
import imgSrc from "@/assets/loading.svg"
// * 父级容器的position是否改变过
let isChange = true;
let curImg = null;

function getLoadingImg(el) {
    return el.querySelector("img[data-loading=true]");
}

function createImg() {
    const img = document.createElement("img");
    img.dataset.loading = "true";
    img.src = imgSrc;
    img.classList.add(styles.loading);
    return img;
}

function loading(el, binding) {
    curImg = getLoadingImg(el);
    if(binding.value) {
        if( getComputedStyle(el).position === "static" ) {
            isChange = false;
            el.style.position = "relative";
        }
        if(!curImg) {
            const img = createImg();
            el.appendChild(img);
        }
    } else {
        // 不需要显示。移除img
        if(curImg) {
            curImg.remove();
            if(!isChange) {
                el.style.position = "static";
                isChange = true;
            }
        }
    }
}


export default {
    inserted(el, binding) {
       loading(el, binding)
    },
    update(el, binding) {
        loading(el, binding)
    }
}
/*
export default function (el, binding) {
    const curImg = getLoadingImg(el);
    if(binding.value) {
        //  需要显示，创建 img
        if(!curImg) {
            const img = createImg();
            el.appendChild(img);
        }
    } else {
        // 不需要显示。移除img
        if(curImg) {
            curImg.remove();
        }
    }
}
*/
