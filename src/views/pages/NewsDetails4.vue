<template>
  <div class="main-wrapper">
    <Navbar />
    <BreadCrumb
      :title="$t('newsTitre4')"
      :desc="$t('newsDes4')"
    />
    <NewsSingle4 />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
import NewsSingle4 from "../../components/news/NewsSingle4.vue";
export default {
  components: { Navbar, NewsSingle4, BreadCrumb, Footer },
  name: "NewsDetails",
};
</script>
, LatestNews
