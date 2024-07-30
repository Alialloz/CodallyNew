<template>
  <div class="main-wrapper">
    <Navbar />
    <BreadCrumb
      title="Career"
      desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
    />
    <Jobs />
    <WhyJoin />
    <CtaTwo />
    <Footer />
  </div>
</template>

<script>
import Jobs from "../../components/career/Jobs.vue";
import WhyJoin from "../../components/career/WhyJoin.vue";
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import CtaTwo from "../../components/cta/CtaTwo.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
export default {
  components: { Navbar, BreadCrumb, Footer, CtaTwo, Jobs, WhyJoin },
};
</script>
BreadCrumb
