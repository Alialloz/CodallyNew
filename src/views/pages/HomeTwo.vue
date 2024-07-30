<template>
  <div class="main-wrapper">
    <Navbar />
    <HeroTwo />
    <Promo />
    <ImgContentThree />
    <FeatureGrid hasTitle="hasTitle" bgLight="bgLight" />
    <WorkProcessTwo />
    <Testimonial />
    <IntegrationOne />
    <LatestNews />
    <CtaTwo />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/nav/Navbar.vue';
import HeroTwo from '../../components/hero/HeroTwo.vue';
import Promo from '../../components/promo/Promo.vue';
import ImgContentThree from '../../components/img-content/ImgContentThree.vue';
import FeatureGrid from '../../components/features/FeatureGrid.vue';
import WorkProcessTwo from '../../components/work-process/WorkProcessTwo.vue';
import IntegrationOne from '../../components/integrations/IntegrationOne.vue';
import LatestNews from '../../components/news/LatestNews.vue';
import CtaTwo from '../../components/cta/CtaTwo.vue';
import Testimonial from '../../components/testimonial/Testimonial.vue';
import Footer from '../../components/footer/Footer.vue';

export default {
  name: 'HomeTwo',
  components: {
    Navbar,
    HeroTwo,
    Promo,
    ImgContentThree,
    FeatureGrid,
    WorkProcessTwo,
    IntegrationOne,
    CtaTwo,
    Testimonial,
    LatestNews,
    Footer,
  },
};
</script>
