<template>
  <div class="main-wrapper">
    <Navbar />
    <PageHeader />
    <RelatedIntegration />
    <IntegrationDeatils />
    <CtaTwo />
    <Footer />
  </div>
</template>

<script>
import CtaTwo from "../../components/cta/CtaTwo.vue";
import Footer from "../../components/footer/Footer.vue";
import IntegrationDeatils from "../../components/integrations/IntegrationDeatils.vue";
import PageHeader from "../../components/integrations/PageHeader.vue";
import RelatedIntegration from "../../components/integrations/RelatedIntegration.vue";
import Navbar from "../../components/nav/Navbar.vue";
export default {
  components: {
    Navbar,
    PageHeader,
    Footer,
    CtaTwo,
    RelatedIntegration,
    IntegrationDeatils,
  },
};
</script>
