<template>
  <div class="main-wrapper">
    <Navbar />
    <BreadCrumb
      :title="$t('newsTitre2')"
      :desc="$t('newsDes2')"
    />
    <NewsSingle2 />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
import NewsSingle2 from "../../components/news/NewsSingle2.vue";
export default {
  components: { Navbar, NewsSingle2, BreadCrumb, Footer },
  name: "NewsDetails2",
};
</script>
, LatestNews
