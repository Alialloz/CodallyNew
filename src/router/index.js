import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/pages/Home.vue';
import Services from '../views/pages/Services.vue';
import OurTeam from '../views/pages/OurTeam.vue';
import OurProjects from '../views/pages/OurProjects.vue';
import ContactUs from '../views/pages/ContactUs.vue';
import News from '../views/pages/News.vue';
import Career from '../views/pages/Career.vue';
import NotFound from '../views/pages/NotFound.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: 'Codally',
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
    path: '/news',
    name: 'News',
    component: News,
    meta: {
      title: 'News',
    },
  },
  {
    path: '/career',
    name: 'Career',
    component: Career,
    meta: {
      title: 'Career',
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
];


const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } 
  
  if (to.hash) {
    const offset = 230;
    const element = document.querySelector(to.hash);
    
    if (element) {
      return window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  }
  
  return { 
    top: 0, 
    behavior: 'smooth' 
  };
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title;
  }
});

export default router;