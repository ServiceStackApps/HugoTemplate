import {Hello} from "./dtos";
import {client} from "./client";
const { createApp, ref, computed, watch } = Vue;

Vue.createApp({
    setup() {

        const result = ref("")
        const txtName = ref("")

        const update = (val) => {
            if(!val) {
                result.value = "";
                return;
            }
            let req = new Hello()
            req.name = val
            client.get(req).then((res) => {
                result.value = res.result;
            })
        };

        watch(txtName, (newVal) => {
            update(newVal)
        })
        return {
            result,
            txtName
        }
    },
    delimiters: ['[[', ']]'],
}).mount('#hello-api-app');


