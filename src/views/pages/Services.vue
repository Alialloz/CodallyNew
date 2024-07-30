<template>
  <div>
    <Navbar />
    <BreadCrumb
      title="We are Development Experts"
      desc="Seamlessly actualize client-based users after out of the box value. Globally embrace strategic data through frictionless expertise."
    />
    <FeatureGrid hasTitle="hasTitle" bgLight="bgLight" />
    <TestimonialSlider />
    <CtaTwo />
    <Footer />
  </div>
</template>

<script>
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import CtaTwo from "../../components/cta/CtaTwo.vue";
import FeatureGrid from "../../components/features/FeatureGrid.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
import TestimonialSlider from "../../components/testimonial/TestimonialSlider.vue";
export default {
  components: {
    Navbar,
    BreadCrumb,
    Footer,
    CtaTwo,
    TestimonialSlider,
    FeatureGrid,
  },
};
</script>

<style></style>
