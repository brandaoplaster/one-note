import Vue from 'vue';
import Router from 'vue-router'
import Home from '../views/home';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/api/v1/dashboard',
      component: Home,
    }
  ]
});

export default router;