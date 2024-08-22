import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/pages/Home.vue';
import Services from '../views/pages/Services.vue';
import Contact from '../views/pages/Contact.vue';
import AboutUs from '../views/pages/AboutUs.vue';
import RequestForDemo from '../views/pages/RequestForDemo.vue';
import NotFound from '../views/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home',
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
      meta: {
        title: 'Services',
      },
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'Contact',
      },
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs,
      meta: {
        title: 'About Us',
      },
    },
    {
      path: '/request-for-demo',
      name: 'RequestForDemo',
      component: RequestForDemo,
      meta: {
        title: 'Request For Demo - Software & IT Solutions Vue Template',
      },
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: 'Not Found',
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      const offset = 230; 
      const element = document.querySelector(to.hash);

      if (element) {
        return window.scrollTo({
          top: element.offsetTop - offset,
          behavior: 'smooth',
        });
      }
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title + ' – Software & IT Solutions Vue Template';
  }
});

export default router;