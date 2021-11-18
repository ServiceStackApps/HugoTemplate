import Vue from "vue"
declare global {
    interface Window { Vue: Vue; }
}
export = Vue;
export as namespace Vue;