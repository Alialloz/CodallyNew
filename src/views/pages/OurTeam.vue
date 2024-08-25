<template>
  <div>
    <Navbar />
    <TeamStart />
    <TeamList />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import TeamList from "../../components/team/TeamList.vue";
import TeamStart from "../../components/team/TeamStart.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";

export default {
  name: "OurTeam",
  components: {
    Navbar,
    TeamList,
    Footer,
    TeamStart,
  },
};
</script>
