import eventBus from '@/utils/eventBus';
import debounce from '@/utils/debounce';
import defaultImg from "@/assets/default.gif";

let imgs = [];

function setImg(imgObj) {
    imgObj.dom.src = defaultImg;
    const viewportHeight = document.documentElement.clientHeight;
    const rect = imgObj.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= viewportHeight) {
        // * 在视口内
        imgObj.dom.src = imgObj.src;
        imgs = imgs.filter(item => {
            return item !== imgObj
        })
    }
}

function handleImgs() {
    for (let i = 0; i < imgs.length; i++) {
        setImg(imgs[i]);
    }
}


function handleScroll() {
    handleImgs();
}

eventBus.$on("mainScroll", debounce(handleScroll, 60))

export default {
    inserted(el, binding) {
        const imgObj = {
            dom: el,
            src: binding.value
        }
        imgs.push(imgObj);
        handleImgs();
    },
    unbind(el) {
        imgs = imgs.filter((imgObj) => {
            return imgObj.dom !== el;
        })
    }
}


/*
import eventBus from "@/utils/eventBus";
import debounce from "@/utils/debounce";
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
    img.dom.src = defaultGif;
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= clientHeight) {
        img.dom.src = img.src;
        imgs = imgs.filter((i) => i !== img);
    }
}

function setImages() {
    for (const img of imgs) {
        setImage(img);
    }
}

function handleScroll() {
    setImages();
}
eventBus.$on("mainScroll", debounce(handleScroll, 50));
export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src:binding.value,
        };
        imgs.push(img);
        setImage(img)
    },
    unbind(el) {
        imgs = [];
    }
}
*/
