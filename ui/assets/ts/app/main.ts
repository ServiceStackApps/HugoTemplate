/// <reference path="../../../types/env.d.ts" />
const { createApp, ref, computed, watch } = Vue;

Vue.createApp({
    setup() {
        const count = Vue.ref(0);
        const clickMe = () => {
            count.value = count.value + 1;
        }
        return {
            count,
            clickMe
        }
    },
    delimiters: ['[[', ']]'],
}).mount('#hello-world-app');