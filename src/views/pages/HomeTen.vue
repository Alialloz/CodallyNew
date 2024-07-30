<template>
  <div class="main-wrapper">
    <Navbar darkNav="darkNav" />
    <HeroTen />
    <CyberBrandLogo />
    <AboutCyber />
    <CyberService />
    <CyberCta />
    <VideoCounter />
    <PriceFour />
    <CyberProducts />
    <TestimonialFour />
    <FaqAccordionTwo />
    <CyberBlog />
    <FooterTwo />
  </div>
</template>

<script>
import AboutCyber from "../../components/about/AboutCyber.vue";
import CyberCta from "../../components/cta/CyberCta.vue";
import HeroTen from "../../components/hero/HeroTen.vue";
import CyberBrandLogo from "../../components/brand/CyberBrandLogo.vue";
import Navbar from "../../components/nav/Navbar.vue";
import CyberService from "../../components/service/CyberService.vue";
import FaqAccordionTwo from "../../components/faqs/FaqAccordionTwo.vue";
import PriceFour from "../../components/pricing/PriceFour.vue";
import CyberBlog from "../../components/news/CyberBlog.vue";
import VideoCounter from "../../components/counter/VideoCounter.vue";
import TestimonialFour from "../../components/testimonial/TestimonialFour.vue";
import CyberProducts from "../../components/products/CyberProducts.vue";
import FooterTwo from "../../components/footer/FooterTwo.vue";

export default {
  name: "HomeTen",
  components: {
    Navbar,
    HeroTen,
    CyberBrandLogo,
    AboutCyber,
    CyberService,
    CyberCta,
    FaqAccordionTwo,
    PriceFour,
    CyberBlog,
    VideoCounter,
    TestimonialFour,
    CyberProducts,
    FooterTwo,
  },
};
</script>
