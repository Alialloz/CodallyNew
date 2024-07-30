<template>
  <div class="main-wrapper">
    <Navbar />
    <BreadCrumb
      title="Quality Software Services"
      desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
    />
    <FeatureTen />
    <FeatureEleven />
    <PromoFour bgLight="bgLight" />
    <ServiceForm />
    <Footer />
  </div>
</template>

<script>
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import FeatureEleven from "../../components/features/FeatureEleven.vue";
import FeatureTen from "../../components/features/FeatureTen.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
import ServiceForm from "../../components/other's/ServiceForm.vue";
import PromoFour from "../../components/promo/PromoFour.vue";
export default {
  components: {
    Navbar,
    BreadCrumb,
    Footer,
    PromoFour,
    FeatureTen,
    FeatureEleven,
    ServiceForm,
  },
};
</script>
, FeatureEleven
