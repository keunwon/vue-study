import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
    },
    {
      path: '/aboute',
      component: () => import('@/components/About.vue'),
    },
  ],
});

export default router;
