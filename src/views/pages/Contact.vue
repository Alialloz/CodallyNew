<template>
  <div>
    <Navbar />
    <TeamStart />
    <OurTeam />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import OurTeam from "../../components/team/OurTeam.vue";
import TeamStart from "../../components/team/TeamStart.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";

export default {
  name: "Contact",
  components: {
    Navbar,
    OurTeam,
    Footer,
    TeamStart,
  },
};
</script>
