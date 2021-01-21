import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = () => import('../components/home');
const HomeNews = () => import('../components/homenews');
const HomeMessage = () => import('../components/homemessage');

const Info = () => import('../components/info');
const User = () => import('../components/user');

const routes = [
  {
    path: '',
    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/info',
    component: Info
  },
  {
    path: '/user/:userId',
    component: User
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

export default router;
