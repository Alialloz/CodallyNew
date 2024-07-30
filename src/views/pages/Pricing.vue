<template>
  <div>
    <Navbar />
    <BreadCrumb
      title="Price Suit to Your Business"
      desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
    />
    <Price />
    <FaqAccordion />
    <TestimonialSlider />
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import NewsLetter from "../../components/cta/NewsLetter.vue";
import FaqAccordion from "../../components/faqs/FaqAccordion.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
import Price from "../../components/pricing/Price.vue";
import TestimonialSlider from "../../components/testimonial/TestimonialSlider.vue";

export default {
  components: {
    BreadCrumb,
    NewsLetter,
    FaqAccordion,
    Price,
    Navbar,
    Footer,
    TestimonialSlider,
  },
  name: "Pricing",
};
</script>
