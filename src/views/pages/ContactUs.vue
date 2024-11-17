<template>
  <div class="main-wrapper">
    <Navbar  />
    <ContactPromoDarkbg/>
    <ContactFormTwo />
    <FooterBottom />
  </div>
</template>

<script>
import FooterBottom from "../../components/footer/FooterBottom.vue";
import Navbar from "../../components/nav/Navbar.vue";
import ContactPromoDarkbg from "../../components/promo/ContactPromoDarkbg.vue";
import ContactFormTwo from "../../components/contacts/ContactFormTwo.vue";

export default {
  components: { Navbar, FooterBottom, ContactPromoDarkbg, ContactFormTwo },
};
</script>
