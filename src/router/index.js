import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/pages/Home.vue';
import Services from '../views/pages/Services.vue';
import OurTeam from '../views/pages/OurTeam.vue';
import OurProjects from '../views/pages/OurProjects.vue';
import ContactUs from '../views/pages/ContactUs.vue';
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
      path: '/our-team',
      name: 'OurTeam',
      component: OurTeam,
      meta: {
        title: 'OurTeam',
      },
    },
    {
      path: '/our-projects',
      name: 'OurProjects',
      component: OurProjects,
      meta: {
        title: 'Our Projects',
      },
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs,
      meta: {
        title: 'ContactUs',
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