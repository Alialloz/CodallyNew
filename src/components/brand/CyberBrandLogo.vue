<template>
  <section class="cyber-brand-logo pt-80">
    <div class="container">
      <div class="row">
        <div ref="brandLogoSlider" class="brandLogoSlider swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="cyber-brand-logo text-center">
                <img src="@/assets/img/brand-logo/slack_logo.png" alt="logo " />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cyber-brand-logo text-center">
                <img src="@/assets/img/brand-logo/logo2.png" alt="logo" />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cyber-brand-logo text-center">
                <img src="@/assets/img/brand-logo/logo3.png" alt="logo" />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cyber-brand-logo text-center">
                <img src="@/assets/img/brand-logo/logo4.png" alt="logo" />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cyber-brand-logo text-center">
                <img src="@/assets/img/brand-logo/logo5.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import Swiper from "swiper";

export default {
  name: "CyberBrandLogo",
  mounted() {
    new Swiper(this.$refs.brandLogoSlider, {
      speed: 700,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        991: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });
  },
};
</script>
