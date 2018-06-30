import Vue from 'vue';
import VueRouter from 'vue-router';
import mainComponent from './components/main.vue';
import page2Component from './components/page2.vue';

Vue.use(VueRouter);
var routes: any = [
    { path: '/', redirect: '/main'},
    { path: '/main', component: mainComponent },
    { path: '/page2', component: page2Component },
];

export default new VueRouter({ routes: routes });
