import Vue from "vue";

// * 注册，加载中效果指令
import vLoading from "./Loading";
Vue.directive("loading", vLoading);

// * 懒加载指令
import lazy from '@/directives/lazy';
Vue.directive("lazy", lazy)
