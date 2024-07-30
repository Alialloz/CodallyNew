<template>
  <div class="main-wrapper">
    <Navbar />
    <HeroFour />
    <FeatureFour />
    <ImgContentFour />
    <ImgContentFive />
    <WorkProcessThree />
    <PriceTwo />
    <FaqTwo />
    <TestimonialSlider bgLight="bgLight" />
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import ContactForm from "../../components/contacts/ContactForm.vue";
import FaqTwo from "../../components/faqs/FaqTwo.vue";
import FeatureFour from "../../components/features/FeatureFour.vue";
import Footer from "../../components/footer/Footer.vue";
import HeroFour from "../../components/hero/HeroFour.vue";
import ImgContentFive from "../../components/img-content/ImgContentFive.vue";
import ImgContentFour from "../../components/img-content/ImgContentFour.vue";
import Navbar from "../../components/nav/Navbar.vue";
import PriceTwo from "../../components/pricing/PriceTwo.vue";
import TestimonialSlider from "../../components/testimonial/TestimonialSlider.vue";
import WorkProcessThree from "../../components/work-process/WorkProcessThree.vue";
export default {
  components: {
    Navbar,
    HeroFour,
    FeatureFour,
    ImgContentFour,
    ImgContentFive,
    WorkProcessThree,
    PriceTwo,
    FaqTwo,
    ContactForm,
    Footer,
    TestimonialSlider,
  },
};
</script>
