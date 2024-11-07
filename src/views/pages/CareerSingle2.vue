<template>
  <div class="main-wrap">
    <Navbar />
    <CareerPageHeader2 />
    <JobDetails2 />
    <Footer footerDark="footerDark"/>
  </div>
</template>

<script>
import CareerPageHeader2 from "../../components/career/CareerPageHeader2.vue";
import JobDetails2 from "../../components/career/JobDetails2.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
export default {
  components: {
    CareerPageHeader2,
    Navbar,
    JobDetails2,
    Footer,
  },
  name: "CareerSingle2",
};
</script>
