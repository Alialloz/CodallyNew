import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/pages/Home.vue';
import Services from '../views/pages/Services.vue';
import OurTeam from '../views/pages/OurTeam.vue';
import OurProjects from '../views/pages/OurProjects.vue';
import ContactUs from '../views/pages/ContactUs.vue';
import News from '../views/pages/News.vue';
import Career from '../views/pages/Career.vue';
import NotFound from '../views/pages/NotFound.vue';

import NewsDetails from '../views/pages/NewsDetails.vue';
import NewsDetails2 from '../views/pages/NewsDetails2.vue';
import NewsDetails3 from '../views/pages/NewsDetails3.vue';
import NewsDetails4 from '../views/pages/NewsDetails4.vue';
import NewsDetails5 from '../views/pages/NewsDetails5.vue';

import CareerSingle from '../views/pages/CareerSingle.vue';
import CareerSingle2 from '../views/pages/CareerSingle2.vue';

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
    path: '/news-details',
    name: 'NewsDetails',
    component: NewsDetails,
    meta: {
      title: 'News Details',
    },
  },
  {
    path: '/news-details2',
    name: 'NewsDetails2',
    component: NewsDetails2,
    meta: {
      title: 'News Details2',
    },
  },
  {
    path: '/news-details3',
    name: 'NewsDetails3',
    component: NewsDetails3,
    meta: {
      title: 'News Details3',
    },
  },
  {
    path: '/news-details4',
    name: 'NewsDetails4',
    component: NewsDetails4,
    meta: {
      title: 'News Details4',
    },
  },
  {
    path: '/news-details5',
    name: 'NewsDetails5',
    component: NewsDetails5,
    meta: {
      title: 'News Details5',
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
    path: '/CareerSingle',
    name: 'CareerSingle',
    component: CareerSingle,
    meta: {
      title: 'CareerSingle',
    },
  },
  {
    path: '/CareerSingle2',
    name: 'CareerSingle2',
    component: CareerSingle2,
    meta: {
      title: 'CareerSingle2',
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