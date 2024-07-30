<template>
  <div class="main-wrapper">
    <Navbar darkNav="darkNav" />
    <HeroEleven />
    <CryptoPromo />
    <CustomerCounter />
    <CryptoTable />
    <CountDown />
    <CtaFive />
    <TeamTwo />
    <HowItStarted />
    <TestimonialSliderTwo />
    <CryptoBlog />
    <CtaSix />
    <CryptoFooter />
  </div>
</template>

<script>
import Navbar from "../../components/nav/Navbar.vue";
import HeroEleven from "../../components/hero/HeroEleven.vue";
import CryptoPromo from "../../components/promo/CryptoPromo.vue";
import CustomerCounter from "../../components/counter/CustomerCounter.vue";
import CryptoTable from "../../components/table/CryptoTable.vue";
import CountDown from "../../components/counter/CountDown.vue";
import CtaFive from "../../components/cta/CtaFive.vue";
import TeamTwo from "../../components/team/TeamTwo.vue";
import HowItStarted from "../../components/other's/HowItStarted.vue";
import TestimonialSliderTwo from "../../components/testimonial/TestimonialSliderTwo.vue";
import CryptoBlog from "../../components/news/CryptoBlog.vue";
import CtaSix from "../../components/cta/CtaSix.vue";
import CryptoFooter from "../../components/footer/CryptoFooter.vue";

export default {
  name: "HomeEleven",
  components: {
    Navbar,
    HeroEleven,
    CryptoPromo,
    CustomerCounter,
    CryptoTable,
    CountDown,
    CtaFive,
    TeamTwo,
    HowItStarted,
    TestimonialSliderTwo,
    CryptoBlog,
    CryptoFooter,
    CtaSix,
  },
};
</script>
