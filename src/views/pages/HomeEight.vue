<template>
  <div class="main-wrapper">
    <Navbar darkNav="darkNav" />
    <HeroEight />
    <FeatureEight />
    <ImgContentNine />
    <ImgContentTen />
    <FeaturesNine />
    <TestimonialTwo />
    <VideoPromo />
    <CtaFour />
    <Footer />
  </div>
</template>

<script>
import FeatureEight from '../../components/features/FeatureEight.vue';
import HeroEight from '../../components/hero/HeroEight.vue';
import Navbar from '../../components/nav/Navbar.vue';
import Footer from '../../components/footer/Footer.vue';
import CtaFour from '../../components/cta/CtaFour.vue';
import ImgContentNine from '../../components/img-content/ImgContentNine.vue';
import ImgContentTen from '../../components/img-content/ImgContentTen.vue';
import VideoPromo from '../../components/promo/VideoPromo.vue';
import TestimonialTwo from '../../components/testimonial/TestimonialTwo.vue';
import FeaturesNine from '../../components/features/FeaturesNine.vue';
export default {
  components: {
    Navbar,
    HeroEight,
    FeatureEight,
    ImgContentNine,
    Footer,
    CtaFour,
    ImgContentTen,
    VideoPromo,
    TestimonialTwo,
    FeaturesNine,
  },
};
</script>
