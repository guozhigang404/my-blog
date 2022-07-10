import Vue from "vue";
export default new Vue();


/*
const listeners = {};

export default {
    $on(eventName, handler) {
        if (!listeners[eventName]) {
            listeners[eventName] = new Set();
        }
        listeners[eventName].add(handler);
    },

    $off(eventName, handler) {
        if (!listeners[eventName]) {
            return null;
        }
        listeners[eventName].delete(handler);
    },

    $emit(eventName, ...args) {
        if(!listeners[eventName]) {
            return null;
        }
        for (const fun of listeners[eventName]) {
            fun(...args);
        }
    }
}*/
