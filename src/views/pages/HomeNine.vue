<template>
  <div class="main-wrapper">
    <Navbar />
    <HeroNine />
    <AboutImage />
    <TechTabs />
    <ServiceIt />
    <Portfolio />
    <BrandLogo />
    <TestimonialSliderThree />
    <PriceThree />
    <CtaTwo />
    <LatestNews />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import Navbar from "../../components/nav/Navbar.vue";
import HeroNine from "../../components/hero/HeroNine.vue";
import AboutImage from "../../components/about/AboutImage.vue";
import TechTabs from "../../components/tabs/TechTabs.vue";
import ServiceIt from "../../components/service/ServiceIt.vue";
import Portfolio from "../../components/portfolio/Portfolio.vue";
import BrandLogo from "../../components/brand/BrandLogo.vue";
import TestimonialSliderThree from "../../components/testimonial/TestimonialSliderThree.vue";
import PriceThree from "../../components/pricing/PriceThree.vue";
import CtaTwo from "../../components/cta/CtaTwo.vue";
import LatestNews from "../../components/news/LatestNews.vue";
import Footer from "../../components/footer/Footer.vue";

export default {
  components: {
    Navbar,
    HeroNine,
    AboutImage,
    TechTabs,
    ServiceIt,
    Portfolio,
    BrandLogo,
    TestimonialSliderThree,
    PriceThree,
    CtaTwo,
    LatestNews,
    Footer,
  },
};
</script>
