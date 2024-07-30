<template>
  <div class="hero-twelve">
    <div ref="heroSlider" class="heroSlider swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slider-one slider">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="hero-content">
                    <h1
                      class="fw-bold display-5 text-white mb-4"
                      data-aos="fade-up"
                    >
                      Reliable Hosting For Game
                      <span class="gr-text ms-lg-2">Solutions.</span>
                    </h1>
                    <p class="lead text-off-white m-0">
                      Give your Website the speed, security, and uptime it
                      deserves and become part of the fastest Web Hosting.
                    </p>
                    <router-link
                      to="/request-for-demo"
                      class="btn-gradient mt-4 link-with-icon"
                    >
                      Order Now <i class="far fa-arrow-right"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-two slider">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="hero-content">
                    <h1
                      class="fw-bold display-5 text-white mb-4"
                      data-aos="fade-up"
                    >
                      Reliable Hosting For Game
                      <span class="gr-text ms-lg-2">Solutions.</span>
                    </h1>
                    <p class="lead text-off-white m-0">
                      Give your Website the speed, security, and uptime it
                      deserves and become part of the fastest Web Hosting.
                    </p>
                    <router-link
                      to="/request-for-demo"
                      class="btn-gradient mt-4 link-with-icon"
                    >
                      Order Now <i class="far fa-arrow-right"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-three slider">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="hero-content">
                    <h1
                      class="fw-bold display-5 text-white mb-4"
                      data-aos="fade-up"
                    >
                      Reliable Hosting For Game
                      <span class="gr-text ms-lg-2">Solutions.</span>
                    </h1>
                    <p class="lead text-off-white m-0">
                      Give your Website the speed, security, and uptime it
                      deserves and become part of the fastest Web Hosting.
                    </p>
                    <router-link
                      to="/request-for-demo"
                      class="btn-gradient mt-4 link-with-icon"
                    >
                      Order Now <i class="far fa-arrow-right"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "HeroTwelve",
  mounted() {
    new Swiper(this.$refs.heroSlider, {
      slidesPerView: 1,
      loop: true,
      speed: 700,
      autoplay: {
        delay: 2000,
      },
    });
  },
};
</script>

<style>
.slider-one {
  background: url("@/assets/img/slider/sl-1-1.png") no-repeat center center /
    cover;
}
.slider-two {
  background: url("@/assets/img/slider/sl-2-2.png") no-repeat center center /
    cover;
}
.slider-three {
  background: url("@/assets/img/slider/sl-1-1.png") no-repeat center center /
    cover;
}
</style>
