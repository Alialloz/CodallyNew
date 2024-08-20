<template>
    <div>
        <Navbar />
        <HeroFive />
        <ServiceIt />
        <TechTabs />
        <AboutImage />
        <BrandDark />
        <Portfolio />
        <Footer footerDark="footerDark" />
    </div>
</template>

<script>
import HeroFive from "../../components/hero/HeroFive.vue";
import BrandDark from "../../components/brand/BrandDark.vue";
import Navbar from "../../components/nav/Navbar.vue";
import AboutImage from "../../components/about/AboutImage.vue";
import TechTabs from "../../components/tabs/TechTabs.vue";
import ServiceIt from "../../components/service/ServiceIt.vue";
import Portfolio from "../../components/portfolio/Portfolio.vue";
import Footer from "../../components/footer/Footer.vue";
export default {
    components: {
        HeroFive,
        Navbar,
        BrandDark,
        AboutImage,
        TechTabs,
        ServiceIt,
        Portfolio,
        Footer,
        Navbar,
    },
    name: "Home",
};
</script>