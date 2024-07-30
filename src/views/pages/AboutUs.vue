<template>
  <div>
    <Navbar />
    <AboutPageHeader />
    <OurStory />
    <FeatureTwo bgLight="bgLight" />
    <OurTeam />
    <TestimonialSlider bgLight="bgLight" />
    <OurOffice />
    <CtaTwo />
    <Footer />
  </div>
</template>

<script>
import AboutPageHeader from "../../components/common/AboutPageHeader.vue";
import CtaTwo from "../../components/cta/CtaTwo.vue";
import FeatureTwo from "../../components/features/FeatureTwo.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
import OurStory from "../../components/promo/OurStory.vue";
import OurTeam from "../../components/team/OurTeam.vue";
import OurOffice from "../../components/team/OurOffice.vue";
import TestimonialSlider from "../../components/testimonial/TestimonialSlider.vue";
export default {
  name: "AboutUs",
  components: {
    AboutPageHeader,
    OurStory,
    FeatureTwo,
    OurTeam,
    CtaTwo,
    TestimonialSlider,
    OurOffice,
    Navbar,
    Footer,
  },
};
</script>
