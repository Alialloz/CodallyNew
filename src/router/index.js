import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/pages/Home.vue';
import HomeOne from '../views/pages/HomeOne.vue';
import HomeTwo from '../views/pages/HomeTwo.vue';
import HomeThree from '../views/pages/HomeThree.vue';
import HomeFour from '../views/pages/HomeFour.vue';
import HomeFive from '../views/pages/HomeFive.vue';
import HomeSix from '../views/pages/HomeSix.vue';
import HomeSeven from '../views/pages/HomeSeven.vue';
import HomeEight from '../views/pages/HomeEight.vue';
import HomeNine from '../views/pages/HomeNine.vue';
import HomeTen from '../views/pages/HomeTen.vue';
import HomeEleven from '../views/pages/HomeEleven.vue';
import HomeTwelve from '../views/pages/HomeTwelve.vue';
import HomeThirteen from '../views/pages/HomeThirteen.vue';
import HomeFourteen from '../views/pages/HomeFourteen.vue';
import HomeFifteen from '../views/pages/HomeFifteen.vue';
import Services from '../views/pages/Services.vue';
import SingleService from '../views/pages/ServiceSingle.vue';
import Pricing from '../views/pages/Pricing.vue';
import Contact from '../views/pages/Contact.vue';
import AboutUs from '../views/pages/AboutUs.vue';
import News from '../views/pages/News.vue';
import NewsDetails from '../views/pages/NewsDetails.vue';
import Helps from '../views/pages/Helps.vue';
import HelpSingle from '../views/pages/HelpSingle.vue';
import Login from '../views/pages/Login.vue';
import Signup from '../views/pages/Signup.vue';
import RecoverAccount from '../views/pages/RecoverAccount.vue';
import Integrations from '../views/pages/Integrations.vue';
import IntegrationSingle from '../views/pages/IntegrationSingle.vue';
import Career from '../views/pages/Career.vue';
import CareerSingle from '../views/pages/CareerSingle.vue';
import RequestForDemo from '../views/pages/RequestForDemo.vue';
import ComingSoon from '../views/pages/ComingSoon.vue';
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
      path: '/',
      component: HomeOne,
      name: 'HomeOne',
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-two',
      name: 'HomeTwo',
      component: HomeTwo,
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-three',
      name: 'HomeThree',
      component: HomeThree,
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-four',
      name: 'HomeFour',
      component: HomeFour,
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-five',
      name: 'HomeFive',
      component: HomeFive,
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-six',
      name: 'HomeSix',
      component: HomeSix,
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-seven',
      name: 'HomeSeven',
      component: HomeSeven,
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-eight',
      name: 'HomeEight',
      component: HomeEight,
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-nine',
      name: 'HomeNine',
      component: HomeNine,
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-ten',
      name: 'HomeTen',
      component: HomeTen,
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-eleven',
      name: 'HomeEleven',
      component: HomeEleven,
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-twelve',
      name: 'HomeTwelve',
      component: HomeTwelve,
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-thirteen',
      name: 'HomeThirtenn',
      component: HomeThirteen,
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-fourteen',
      name: 'HomeFourteen',
      component: HomeFourteen,
      meta: {
        title: 'Quiety',
      },
    },
    {
      path: '/home-fifteen',
      name: 'HomeFifteen',
      component: HomeFifteen,
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
      path: '/service-single',
      name: 'SingleService',
      component: SingleService,
      meta: {
        title: 'Single Services',
      },
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing,
      meta: {
        title: 'Pricing',
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
      path: '/help-single',
      name: 'HelpSingle',
      component: HelpSingle,
      meta: {
        title: 'Help Single',
      },
    },
    {
      path: '/helps',
      name: 'Helps',
      component: Helps,
      meta: {
        title: 'Helps',
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login - Software & IT Solutions Vue Template',
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: {
        title: 'Signup - Software & IT Solutions Vue Template',
      },
    },
    {
      path: '/recovery',
      name: 'RecoverAccount',
      component: RecoverAccount,
      meta: {
        title: 'Reset Password - Software & IT Solutions Vue Template',
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
      path: '/career',
      name: 'Career',
      component: Career,
      meta: {
        title: 'Career - Software & IT Solutions Vue Template',
      },
    },
    {
      path: '/career-single',
      name: 'CareerSingle',
      component: CareerSingle,
      meta: {
        title: 'Career Single - Software & IT Solutions Vue Template',
      },
    },
    {
      path: '/integrations',
      name: 'Integrations',
      component: Integrations,
      meta: {
        title: 'Integrations - Software & IT Solutions Vue Template',
      },
    },
    {
      path: '/integration-single',
      name: 'IntegrationSingle',
      component: IntegrationSingle,
      meta: {
        title: 'Integration Single - Software & IT Solutions Vue Template',
      },
    },
    {
      path: '/coming-soon',
      name: 'ComingSoon',
      component: ComingSoon,
      meta: {
        title: 'Coming Soon - Software & IT Solutions Vue Template',
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
