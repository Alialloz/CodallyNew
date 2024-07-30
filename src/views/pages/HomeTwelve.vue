<template>
  <div class="main-wrapper bg-black">
    <Navbar darkNav="darkNav" />
    <HeroTwelve />
    <GameServer />
    <GameService />
    <GameFeature />
    <GameCounter />
    <GamePrice />
    <GameFaq />
    <CustomerReview />
    <GameFooter />
  </div>
</template>

<script>
import Navbar from "../../components/nav/Navbar.vue";
import HeroTwelve from "../../components/hero/HeroTwelve.vue";
import GameFooter from "../../components/footer/GameFooter.vue";
import CustomerReview from "../../components/review/CustomerReview.vue";
import GameFaq from "../../components/faqs/GameFaq.vue";
import GamePrice from "../../components/pricing/GamePrice.vue";
import GameCounter from "../../components/counter/GameCounter.vue";
import GameService from "../../components/service/GameService.vue";
import GameFeature from "../../components/features/GameFeature.vue";
import GameServer from "../../components/server/GameServer.vue";

export default {
  name: "HomeTwelve",
  components: {
    Navbar,
    HeroTwelve,
    GameServer,
    GameFeature,
    GameService,
    GameCounter,
    GamePrice,
    GameFaq,
    CustomerReview,
    GameFooter,
  },
};
</script>
