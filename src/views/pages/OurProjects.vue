<template>
  <div>
    <Navbar />
    <FeatureThree />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import Footer from "../../components/footer/Footer.vue";
import FeatureThree from "../../components/features/FeatureThree.vue";
import Navbar from "../../components/nav/Navbar.vue";
export default {
  name: "OurProjects",
  components: {
    Navbar,
    FeatureThree,
    Footer,
  },
};
</script>
