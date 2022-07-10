let routerTitle = null;
let siteTitle = null;

function setTitle() {
    if(!routerTitle && !siteTitle) {
        document.title = "加载中..."
    } else if(routerTitle && !siteTitle) {
        document.title = routerTitle + "";
    } else if(!routerTitle && siteTitle) {
        document.title = siteTitle + ""
    } else {
        document.title = `${siteTitle}-${routerTitle}`
    }
}

export default {
    setRouterTitle(title) {
        routerTitle = title;
        setTitle();
    },
    setSiteTitle(title) {
        siteTitle = title;
        setTitle();
    }
}