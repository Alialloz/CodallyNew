<template>
  <div class="main-wrapper">
    <Navbar darkNav="darkNav" />
    <HeroThirteen />
    <PaymentBrand />
    <PaymentFeature />
    <PayementWorkProcess />
    <PaymentFeatureTwo />
    <PaymentCounter />
    <PaymentTestimonial />
    <PaymentCta />
    <FooterWithBg />
  </div>
</template>

<script>
import Navbar from "../../components/nav/Navbar.vue";
import HeroThirteen from "../../components/hero/HeroThirteen.vue";
import PaymentBrand from "../../components/brand/PaymentBrand.vue";
import PaymentFeature from "../../components/features/PaymentFeature.vue";
import PaymentFeatureTwo from "../../components/features/PaymentFeatureTwo.vue";
import PayementWorkProcess from "../../components/work-process/PayementWorkProcess.vue";
import PaymentCounter from "../../components/counter/PaymentCounter.vue";
import FooterWithBg from "../../components/footer/FooterWithBg.vue";
import PaymentTestimonial from "../../components/testimonial/PaymentTestimonial.vue";
import PaymentCta from "../../components/cta/PaymentCta.vue";

export default {
  components: {
    Navbar,
    HeroThirteen,
    PaymentBrand,
    PaymentFeature,
    FooterWithBg,
    PayementWorkProcess,
    PaymentCounter,
    PaymentFeatureTwo,
    PaymentTestimonial,
    PaymentCta,
  },
};
</script>

<style></style>
