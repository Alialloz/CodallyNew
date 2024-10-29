<template>
  <div class="main-wrapper">
    <Navbar />
    <BreadCrumb
      title="career"
      desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
    />
    <Jobs />
    <WhyJoin />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import Jobs from "../../components/career/Jobs.vue";
import WhyJoin from "../../components/career/WhyJoin.vue";
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
export default {
  components: { Navbar, BreadCrumb, Footer, Jobs, WhyJoin },
  name: "career",
  };
</script>
BreadCrumb
