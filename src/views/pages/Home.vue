<template>
    <div>
        <Navbar />
        <HeroFive />
        <ServiceIt />
        <TechTabs />
        <AboutImage />
        <IntegrationOne />
        <Portfolio />
        <Footer footerDark="footerDark" />
    </div>
</template>

<script>
import HeroFive from "../../components/hero/HeroFive.vue";
import Navbar from "../../components/nav/Navbar.vue";
import AboutImage from "../../components/about/AboutImage.vue";
import TechTabs from "../../components/tabs/TechTabs.vue";
import ServiceIt from "../../components/service/ServiceIt.vue";
import IntegrationOne from '../../components/integrations/IntegrationOne.vue';
import Portfolio from "../../components/portfolio/Portfolio.vue";
import Footer from "../../components/footer/Footer.vue";
export default {
    components: {
        HeroFive,
        Navbar,
        AboutImage,
        TechTabs,
        IntegrationOne,
        ServiceIt,
        Portfolio,
        Footer,
        Navbar,
    },
    name: "Home",
};
</script>