<template>
  <div>
    <Navbar />
    <HeroFive />
    <PromoThree />
    <FeatureTabs />
    <FeatureFive />
    <ImgContentSix />
    <CtaThree />
    <WorkProcessFour />
    <TestimonialSlider bgLight="bgLight" />
    <NewsLetter />
    <IntegrationTwo />
    <LatestNewsTwo />
    <FooterWithBg />
  </div>
</template>

<script>
import LatestNewsTwo from "../../components/news/LatestNewsTwo.vue";
import CtaThree from "../../components/cta/CtaThree.vue";
import NewsLetter from "../../components/cta/NewsLetter.vue";
import FeatureFive from "../../components/features/FeatureFive.vue";
import FooterWithBg from "../../components/footer/FooterWithBg.vue";
import HeroFive from "../../components/hero/HeroFive.vue";
import ImgContentSix from "../../components/img-content/ImgContentSix.vue";
import IntegrationTwo from "../../components/integrations/IntegrationTwo.vue";
import PromoThree from "../../components/promo/PromoThree.vue";
import FeatureTabs from "../../components/tabs/FeatureTabs.vue";
import WorkProcessFour from "../../components/work-process/WorkProcessFour.vue";
import TestimonialSlider from "../../components/testimonial/TestimonialSlider.vue";
import Navbar from "../../components/nav/Navbar.vue";
export default {
  components: {
    HeroFive,
    Navbar,
    PromoThree,
    FeatureTabs,
    FeatureFive,
    ImgContentSix,
    CtaThree,
    WorkProcessFour,
    NewsLetter,
    IntegrationTwo,
    FooterWithBg,
    LatestNewsTwo,
    TestimonialSlider,
    Navbar,
  },
  name: "HomeFive",
};
</script>
