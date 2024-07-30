<template>
  <div class="main-wrapper">
    <Navbar />
    <HeroThree />
    <Brand />
    <PromoTwo />
    <FeatureTwo />
    <FeatureThree />
    <WorkProcess />
    <TestimonialSlider darkBg="darkBg" />
    <IntegrationTwo />
    <CtaTwo />
    <Footer />
  </div>
</template>

<script>
import Brand from "../../components/brand/Brand.vue";
import CtaTwo from "../../components/cta/CtaTwo.vue";
import FeatureThree from "../../components/features/FeatureThree.vue";
import FeatureTwo from "../../components/features/FeatureTwo.vue";
import Footer from "../../components/footer/Footer.vue";
import HeroThree from "../../components/hero/HeroThree.vue";
import IntegrationTwo from "../../components/integrations/IntegrationTwo.vue";
import Navbar from "../../components/nav/Navbar.vue";
import PromoTwo from "../../components/promo/PromoTwo.vue";
import TestimonialSlider from "../../components/testimonial/TestimonialSlider.vue";
import WorkProcess from "../../components/work-process/WorkProcess.vue";

export default {
  components: {
    HeroThree,
    Brand,
    PromoTwo,
    PromoTwo,
    FeatureTwo,
    FeatureThree,
    WorkProcess,
    IntegrationTwo,
    CtaTwo,
    TestimonialSlider,
    Navbar,
    Footer,
  },
};
</script>
