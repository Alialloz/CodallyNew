<template>
  <div>
    <Navbar />
    <HelpsHeader />
    <AllHelps />
    <FooterWithBg />
  </div>
</template>

<script>
import FooterWithBg from "../../components/footer/FooterWithBg.vue";
import AllHelps from "../../components/help/AllHelps.vue";
import HelpsHeader from "../../components/help/HelpsHeader.vue";
import Navbar from "../../components/nav/Navbar.vue";
export default {
  components: { Navbar, HelpsHeader, AllHelps, FooterWithBg },
};
</script>
