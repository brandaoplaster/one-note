// require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();

import Vue from 'vue';
import App from './app.vue';
import VueResource from 'vue-resource';
import TurbolinksAdapter from 'vue-turbolinks';
import Vuetify from 'vuetify';
import router from './router';
import './vuetify';

Vue.use(VueResource);
Vue.use(TurbolinksAdapter);

document.addEventListener('turbolinks:load', () => {
  if (document.getElementById("root")) {
    const app = new Vue({
      render: h => h(App),
      router,
      vuetify: new Vuetify(),
    }).$mount('#root');
  }
});