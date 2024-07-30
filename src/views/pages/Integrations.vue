<template>
  <div class="main-wrapper">
    <Navbar />
    <BreadCrumb
      title="Our Featured Integrations"
      desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
    />
    <IntegrationBox />
    <PromoTwo />
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import NewsLetter from "../../components/cta/NewsLetter.vue";
import Footer from "../../components/footer/Footer.vue";
import IntegrationBox from "../../components/integrations/IntegrationBox.vue";
import Navbar from "../../components/nav/Navbar.vue";
import PromoTwo from "../../components/promo/PromoTwo.vue";

export default {
  components: {
    Navbar,
    BreadCrumb,
    IntegrationBox,
    PromoTwo,
    NewsLetter,
    Footer,
  },
};
</script>
BreadCrumb
