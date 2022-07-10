import { getSetting } from "@/api/setting"
import TitleControl from "@/utils/TitleControl"
export default {
    namespaced: true,
    state: {
        loading: false,
        data: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },

        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async loadSetting(ctx) {
            ctx.commit("setLoading", true);
            let resp = await getSetting();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
            if (resp.favicon) {
                // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
                let link = document.querySelector("link[ref='shortcut icon']");
                if (link) {
                    return;
                }
                link = document.createElement("link");
                link.rel = "shortcut icon";
                link.type = "images/x-icon";
                link.href = resp.favicon;
                document.querySelector("head").appendChild(link);
            }
            if(resp.siteTitle) {
                TitleControl.setSiteTitle(resp.siteTitle)
            }
        }
    }
}