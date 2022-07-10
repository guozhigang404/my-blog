import Vuex from "vuex";
import Vue from "vue";
import banner from './banner'
import setting from "./setting"
import project from "./project"

if(!window.Vuex) {
    Vue.use(Vuex);
}


const store = new Vuex.Store({
    strict: true,
    modules: {
        banner,
        setting,
        project
    }
})

export default store;
