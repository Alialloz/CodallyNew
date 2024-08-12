<template>
  <div>
    <Navbar />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
export default {
  name: "AboutUs",
  components: {
    Navbar,
    Footer,
  },
};
</script>
