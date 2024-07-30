<template>
  <div class="main-wrapper bg-light-blue">
    <Navbar classOption="position-absolute" />
    <HeroFifteen />
    <UpcomingEvents />
    <EventAbout />
    <SpeakerList />
    <EventCoutner />
    <EventSession />
    <EventPrice />
    <EventTestimonial />
    <ConferenceCta />
    <ConferenceBlog />
    <ConferenceBrand />
    <Footer footerDark="footerDark" />
  </div>
</template>

<script>
import Navbar from '../../components/nav/Navbar.vue';
import HeroFifteen from '../../components/hero/HeroFifteen.vue';
import UpcomingEvents from '../../components/events/UpcomingEvents.vue';
import EventCoutner from '../../components/counter/EventCounter.vue';
import SpeakerList from '../../components/events/SpeakerList.vue';
import EventSession from '../../components/events/EventSession.vue';
import ConferenceBrand from '../../components/brand/ConferenceBrand.vue';
import ConferenceBlog from '../../components/news/ConferenceBlog.vue';
import ConferenceCta from '../../components/cta/ConferenceCta.vue';
import EventTestimonial from '../../components/testimonial/EventTestimonial.vue';
import EventAbout from '../../components/about/EventAbout.vue';
import EventPrice from '../../components/pricing/EventPrice.vue';
import Footer from '../../components/footer/Footer.vue';
export default {
  components: {
    Navbar,
    HeroFifteen,
    EventAbout,
    SpeakerList,
    UpcomingEvents,
    EventTestimonial,
    EventPrice,
    ConferenceBrand,
    ConferenceCta,
    ConferenceBlog,
    EventSession,
    EventCoutner,
    Footer,
  },
};
</script>

<style></style>
