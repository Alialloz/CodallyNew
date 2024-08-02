<template>
  <div>
    <Navbar />
    <BreadCrumb
      title="Contact Us"
      desc="Seamlessly actualize client-based users after out-of-the-box value data through frictionless expertise. Proactively coordinate quality quality vectors vis-a-vis supply chains. Quickly engage client-centric web services."
    />
    <ContactPromo />
    <OurTeam />
    <ContactFormTwo />
    <FooterWithBg />
  </div>
</template>

<script>
import BreadCrumb from "../../components/common/BreadCrumb.vue";
import ContactFormTwo from "../../components/contacts/ContactFormTwo.vue";
import OurTeam from "../../components/team/OurTeam.vue";
import FooterWithBg from "../../components/footer/FooterWithBg.vue";
import Navbar from "../../components/nav/Navbar.vue";
import ContactPromo from "../../components/promo/ContactPromo.vue";
export default {
  name: "Contact",
  components: {
    BreadCrumb,
    Navbar,
    ContactPromo,
    OurTeam,
    FooterWithBg,
    ContactFormTwo,
  },
};
</script>
