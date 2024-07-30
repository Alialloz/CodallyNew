<template>
  <div class="main-wrapper">
    <Navbar darkNav="darkNav" />
    <HeroSix />
    <BrandDark />
    <PromoFour />
    <FeatureTwo />
    <FeatureSix />
    <FeatureGrid hasTitle="hasTitle" darkBg="darkBg" />
    <WorkProcessFour />
    <IntegrationThree />
    <TestimonialSlider bgLight="bgLight" />
    <CtaTwo />
    <Footer />
  </div>
</template>

<script>
import BrandDark from "../../components/brand/BrandDark.vue";
import CtaTwo from "../../components/cta/CtaTwo.vue";
import FeatureGrid from "../../components/features/FeatureGrid.vue";
import FeatureSix from "../../components/features/FeatureSix.vue";
import FeatureTwo from "../../components/features/FeatureTwo.vue";
import Footer from "../../components/footer/Footer.vue";
import HeroSix from "../../components/hero/HeroSix.vue";
import IntegrationThree from "../../components/integrations/IntegrationThree.vue";
import Navbar from "../../components/nav/Navbar.vue";
import PromoFour from "../../components/promo/PromoFour.vue";
import WorkProcessFour from "../../components/work-process/WorkProcessFour.vue";
import TestimonialSlider from "../../components/testimonial/TestimonialSlider.vue";

export default {
  components: {
    Navbar,
    HeroSix,
    BrandDark,
    PromoFour,
    FeatureTwo,
    FeatureSix,
    FeatureGrid,
    Footer,
    CtaTwo,
    WorkProcessFour,
    TestimonialSlider,
    IntegrationThree,
  },
  name: "HomeSix",
};
</script>
