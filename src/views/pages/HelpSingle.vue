<template>
  <div>
    <Navbar />
    <SingleHelps />
    <FooterWithBg />
  </div>
</template>

<script>
import FooterWithBg from "../../components/footer/FooterWithBg.vue";
import SingleHelps from "../../components/help/SingleHelps.vue";
import Navbar from "../../components/nav/Navbar.vue";
export default {
  components: {
    Navbar,
    FooterWithBg,
    SingleHelps,
  },
};
</script>
