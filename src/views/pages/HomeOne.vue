<template>
  <div class="main-wrapper">
    <Navbar darkNav="darkNav" />
    <HeroOne />
    <FeatureOne />
    <ImgContent />
    <ImgContentTwo />
    <Testimonial bgGradient="bgGradient" />
    <WorkProcess />
    <Price hasTitle="hasTitle" />
    <FaqOne />
    <IntegrationOne />
    <CtaOne />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import Navbar from '../../components/nav/Navbar.vue';
import HeroOne from '../../components/hero/HeroOne.vue';
import FeatureOne from '../../components/features/FeatureOne.vue';
import CtaOne from '../../components/cta/CtaOne.vue';
import IntegrationOne from '../../components/integrations/IntegrationOne.vue';
import FaqOne from '../../components/faqs/FaqOne.vue';
import ImgContent from '../../components/img-content/ImgContent.vue';
import ImgContentTwo from '../../components/img-content/ImgContentTwo.vue';
import Testimonial from '../../components/testimonial/Testimonial.vue';
import WorkProcess from '../../components/work-process/WorkProcess.vue';
import Price from '../../components/pricing/Price.vue';
import Footer from '../../components/footer/Footer.vue';
export default {
  components: {
    Navbar,
    HeroOne,
    FeatureOne,
    CtaOne,
    Footer,
    IntegrationOne,
    FaqOne,
    ImgContent,
    ImgContentTwo,
    Testimonial,
    WorkProcess,
    Price,
  },
};
</script>
