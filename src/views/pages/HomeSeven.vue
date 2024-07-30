<template>
  <div>
    <Navbar />
    <HeroSeven />
    <FeatureFour />
    <ImgContentSeven />
    <FeatureSeven />
    <BigImgPromo />
    <Price hasTitle="hasTitle" />
    <FaqOne />
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import FaqOne from "../../components/faqs/FaqOne.vue";
import FeatureFour from "../../components/features/FeatureFour.vue";
import FeatureSeven from "../../components/features/FeatureSeven.vue";
import FeatureThree from "../../components/features/FeatureThree.vue";
import Footer from "../../components/footer/Footer.vue";
import HeroSeven from "../../components/hero/HeroSeven.vue";
import ImgContentSeven from "../../components/img-content/ImgContentSeven.vue";
import Navbar from "../../components/nav/Navbar.vue";
import Price from "../../components/pricing/Price.vue";
import BigImgPromo from "../../components/promo/BigImgPromo.vue";
import ContactForm from "../../components/contacts/ContactForm.vue";

export default {
  name: "HomeSeven",
  components: {
    HeroSeven,
    Navbar,
    FeatureThree,
    FeatureFour,
    Footer,
    ImgContentSeven,
    FeatureSeven,
    FaqOne,
    Price,
    BigImgPromo,
    ContactForm,
  },
};
</script>
