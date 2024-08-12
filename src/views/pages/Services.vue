<template>
  <div>
    <Navbar />
    <BreadCrumb
      :title="$t('servicesN')"
      :desc="$t('servicesNslogan')" />
    <ImgContentThree />
    <ImgContentTroi />
    <Footer footerDark="footerDark"/>
  </div>
</template>

<script>
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import Footer from "../../components/footer/Footer.vue";
import ImgContentThree from '../../components/img-content/ImgContentThree.vue';
import ImgContentTroi from '../../components/img-content/ImgContentTroi.vue';
import Navbar from "../../components/nav/Navbar.vue";

export default {
  components: {
    Navbar,
    BreadCrumb,
    ImgContentThree,
    ImgContentTroi,
    Footer,
  },
};
</script>

<style></style>
