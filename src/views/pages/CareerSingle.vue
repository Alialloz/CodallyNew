<template>
  <div class="main-wrap">
    <Navbar />
    <CareerPageHeader />
    <JobDetails />
    <Footer footerDark="footerDark"/>
  </div>
</template>

<script>
import CareerPageHeader from "../../components/career/CareerPageHeader.vue";
import JobDetails from "../../components/career/JobDetails.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
export default {
  components: {
    CareerPageHeader,
    Navbar,
    JobDetails,
    Footer,
  },
  name: "CareerSingle",
};
</script>
