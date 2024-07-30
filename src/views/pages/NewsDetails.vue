<template>
  <div class="main-wrapper">
    <Navbar />
    <BreadCrumb
      title="Why customer retention is the ultimate growth strategy"
    />
    <NewsSingle />
    <LatestNews />
    <CtaTwo />
    <Footer />
  </div>
</template>

<script>
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import CtaTwo from "../../components/cta/CtaTwo.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
import LatestNews from "../../components/news/LatestNews.vue";
import NewsSingle from "../../components/news/NewsSingle.vue";
export default {
  components: { Navbar, NewsSingle, BreadCrumb, LatestNews, Footer, CtaTwo },
};
</script>
, LatestNews
