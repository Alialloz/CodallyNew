<template>
  <div class="main-wrapper">
    <Navbar />
    <BreadCrumb
      :title="$t('newsTitre1')"
      :desc="$t('newsDes1')"
    />
    <NewsSingle />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
import NewsSingle from "../../components/news/NewsSingle.vue";
export default {
  components: { Navbar, NewsSingle, BreadCrumb, Footer },
  name: "NewsDetails",
};
</script>
, LatestNews
