<template>
  <div class="main-wrap">
    <Navbar />
    <CareerPageHeader />
    <JobDetails />
    <RelatedJob />
    <CtaTwo />
    <Footer />
  </div>
</template>

<script>
import CareerPageHeader from "../../components/career/CareerPageHeader.vue";
import JobDetails from "../../components/career/JobDetails.vue";
import RelatedJob from "../../components/career/RelatedJob.vue";
import CtaTwo from "../../components/cta/CtaTwo.vue";
import Footer from "../../components/footer/Footer.vue";
import Navbar from "../../components/nav/Navbar.vue";
export default {
  components: {
    CareerPageHeader,
    Navbar,
    JobDetails,
    Footer,
    CtaTwo,
    RelatedJob,
  },
};
</script>
