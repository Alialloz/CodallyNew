<template>
  <div class="main-wrapper">
    <Navbar />
    <BreadCrumb
      :title="$t('offreEmploi')"
      :desc="$t('descritptionOffreEmploi')" />
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
