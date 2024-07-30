<template>
  <div class="main-wrapper">
    <Navbar />
    <HeroFourteen />
    <DigiBrand />
    <DigiServices />
    <DigiNewsLetter />
    <WhyChoose />
    <DigiWorkProcess />
    <DigiIntegration />
    <DigiBlog />
    <DigiContacts />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import Navbar from '../../components/nav/Navbar.vue';
import HeroFourteen from '../../components/hero/HeroFourteen.vue';
import DigiBrand from '../../components/brand/DigiBrand.vue';
import DigiServices from '../../components/service/DigiServices.vue';
import WhyChoose from '../../components/work-process/WhyChoose.vue';
import DigiWorkProcess from '../../components/work-process/DigiWorkProcess.vue';
import DigiNewsLetter from '../../components/cta/DigiNewsLetter.vue';
import DigiIntegration from '../../components/integrations/DigiIntegration.vue';
import DigiBlog from '../../components/news/DigiBlog.vue';
import DigiContacts from '../../components/contacts/DigiContacts.vue';
import Footer from '../../components/footer/Footer.vue';

export default {
  components: {
    Navbar,
    HeroFourteen,
    DigiBrand,
    DigiServices,
    DigiNewsLetter,
    DigiIntegration,
    DigiWorkProcess,
    WhyChoose,
    DigiBlog,
    DigiContacts,
    Footer,
  },
};
</script>

<style></style>
