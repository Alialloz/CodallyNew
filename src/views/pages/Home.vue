<template>
    <div>
        <Navbar />
        <HeroFive />
        <ServiceIt />
        <TechTabs />
        <AboutImage />

        
        <Portfolio />
        <!-- <TestimonialSliderThree /> -->
        <Footer footerDark="footerDark" />
    </div>
</template>

<script>
import HeroFive from "../../components/hero/HeroFive.vue";
import Navbar from "../../components/nav/Navbar.vue";
import AboutImage from "../../components/about/AboutImage.vue";
import TechTabs from "../../components/tabs/TechTabs.vue";
import ServiceIt from "../../components/service/ServiceIt.vue";
import Portfolio from "../../components/portfolio/Portfolio.vue";
import TestimonialSliderThree from "../../components/testimonial/TestimonialSliderThree.vue";
import Footer from "../../components/footer/Footer.vue";
export default {
    components: {
        HeroFive,
        Navbar,
        AboutImage,
        TechTabs,
        ServiceIt,
        Portfolio,
        TestimonialSliderThree,
        Footer,
        Navbar,
    },
    name: "Home",
};
</script>