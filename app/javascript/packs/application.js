import Vue from 'vue';
import App from './app.vue';
import VueResource from 'vue-resource';
import TurbolinksAdapter from 'vue-turbolinks';


Vue.use(VueResource);
Vue.use(TurbolinksAdapter);

document.addEventListener('turbolinks:load', () => {
  if (document.getElementById("root")) {
    const app = new Vue({
      el: '#root',
      render: h => h(App)
    })
  }
});