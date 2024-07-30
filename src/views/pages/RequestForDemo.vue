<template>
  <div class="main-wrapper">
    <Navbar darkNav="darkNav" />
    <RequestFor />
    <FooterBottom />
  </div>
</template>

<script>
import FooterBottom from "../../components/footer/FooterBottom.vue";
import Navbar from "../../components/nav/Navbar.vue";
import RequestFor from "../../components/other's/RequestFor.vue";
export default {
  components: { Navbar, RequestFor, FooterBottom },
};
</script>
