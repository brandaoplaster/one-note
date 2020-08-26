import Vue from 'vue';
import App from './app.vue';
import Vuetify from 'vuetify';
import router from './router';
import store from '../store';
import './vuetify';

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#root',
    router,
    store,
    vuetify: new Vuetify(),
    render: h => h(App),
  });
});