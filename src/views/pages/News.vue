<template>
  <div class="main-wrapper">
    <Navbar />
    <NewsHeader />
    <AllNews />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
import AllNews from "../../components/news/AllNews.vue";
import NewsHeader from "../../components/news/NewsHeader.vue";
export default {
  components: { Navbar, NewsHeader, AllNews, Footer},
  name: "News",
};
</script>
