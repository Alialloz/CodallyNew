<template>
  <div class="main-wrapper">
    <Navbar />
    <BreadCrumb
      :title="$t('newsTitre3')"
      :desc="$t('newsDes3')"
    />
    <NewsSingle3 />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
import NewsSingle3 from "../../components/news/NewsSingle3.vue";
export default {
  components: { Navbar, NewsSingle3, BreadCrumb, Footer },
  name: "NewsDetails",
};
</script>
, LatestNews
