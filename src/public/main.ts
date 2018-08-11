import BootstrapVue from "bootstrap-vue";
import Vue from "vue";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

import navComponent from "./components/nav.vue";
import router from "./router";

Vue.use(BootstrapVue);
const app = new Vue({
    router,
    // tslint:disable-next-line:object-literal-sort-keys
    components: { "app-nav": navComponent },
    data: {
        balance: 0,
    },
    methods: {
    },
}).$mount("#app");
