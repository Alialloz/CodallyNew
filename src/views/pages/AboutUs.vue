<template>
  <div>
    <Navbar />
    <FeatureThree />
    <FeatureTwo />
    <FeatureThreeB />
    <FeatureTwoB />
    <FeatureThreeC />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import Footer from "../../components/footer/Footer.vue";
import FeatureThree from "../../components/features/FeatureThree.vue";
import FeatureTwo from "../../components/features/FeatureTwo.vue";
import FeatureThreeB from "../../components/features/FeatureThreeB.vue";
import FeatureTwoB from "../../components/features/FeatureTwoB.vue";
import FeatureThreeC from "../../components/features/FeatureThreeC.vue";
import Navbar from "../../components/nav/Navbar.vue";
export default {
  name: "AboutUs",
  components: {
    Navbar,
    FeatureTwo,
    FeatureThree,
    FeatureTwoB,
    FeatureThreeB,
    FeatureThreeC,
    Footer,
  },
};
</script>
