<template>
  <div class="main-wrapper">
    <Navbar />
    <NewsHeader />
    <AllNews />
    <FooterWithBg />
  </div>
</template>

<script>
import FooterWithBg from "../../components/footer/FooterWithBg.vue";
import Navbar from "../../components/nav/Navbar.vue";
import AllNews from "../../components/news/AllNews.vue";
import NewsHeader from "../../components/news/NewsHeader.vue";
export default {
  components: { Navbar, NewsHeader, AllNews, FooterWithBg },
};
</script>
