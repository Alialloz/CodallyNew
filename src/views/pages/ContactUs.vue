<template>
  <div class="main-wrapper">
    <Navbar  /> <!-- darkNav="darkNav" -->
    <ContactPromoDarkbg/>
    <ContactFormTwo />
    <FooterBottom />
  </div>
</template>

<script>
import FooterBottom from "../../components/footer/FooterBottom.vue";
import Navbar from "../../components/nav/Navbar.vue";
import RequestFor from "../../components/other's/RequestFor.vue";
import ContactPromoDarkbg from "../../components/promo/ContactPromoDarkbg.vue";
import ContactFormTwo from "../../components/contacts/ContactFormTwo.vue";

export default {
  components: { Navbar, RequestFor, FooterBottom, ContactPromoDarkbg, ContactFormTwo },
};
</script>
