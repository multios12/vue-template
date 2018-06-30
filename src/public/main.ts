import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import navComponent from './components/nav.vue'
import router from './router';

Vue.use(BootstrapVue);
const app = new Vue({
    router,
    components: { "app-nav": navComponent },
    data: {
        balance: 0
    },
    created: function () {
    },
    methods: {
    }
}).$mount('#app')
