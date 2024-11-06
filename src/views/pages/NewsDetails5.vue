<template>
  <div class="main-wrapper">
    <Navbar />
    <BreadCrumb
      :title="$t('newsTitre5')"
      :desc="$t('newsDes5')"
    />
    <NewsSingle5 />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
import NewsSingle5 from "../../components/news/NewsSingle5.vue";
export default {
  components: { Navbar, NewsSingle5, BreadCrumb, Footer },
  name: "NewsDetails",
};
</script>
, LatestNews
