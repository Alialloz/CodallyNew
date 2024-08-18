<template>
  <div>
    <Navbar />
    <TeamStart />
    <OurTeam />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import ContactFormTwo from "../../components/contacts/ContactFormTwo.vue";
import OurTeam from "../../components/team/OurTeam.vue";
import TeamStart from "../../components/team/TeamStart.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
import ContactPromo from "../../components/promo/ContactPromo.vue";
import ContactPromoDarkbg from "../../components/promo/ContactPromoDarkbg.vue";

export default {
  name: "Contact",
  components: {
    BreadCrumb,
    Navbar,
    ContactPromo,
    OurTeam,
    Footer,
    ContactFormTwo,
    TeamStart,
    ContactPromoDarkbg,
  },
};
</script>
