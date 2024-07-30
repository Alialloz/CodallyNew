<template>
  <section class="payment-brand-logo pt-120 pb-80 bg-white-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center mb-4">
            <h5>
              Join this Comapnies Making
              <span class="gr-text">Business Flow</span>
            </h5>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div ref="paymentBrandLogo" class="swiper paymentBrandLogo">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="logo-grid-item">
                  <img
                    src="@/assets/img/brand-logo/tb-1.png"
                    class="img-fluid"
                    alt="logo"
                  />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="logo-grid-item">
                  <img
                    src="@/assets/img/brand-logo/tb-2.png"
                    class="img-fluid"
                    alt="logo"
                  />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="logo-grid-item">
                  <img
                    src="@/assets/img/brand-logo/tb-3.png"
                    class="img-fluid"
                    alt="logo"
                  />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="logo-grid-item">
                  <img
                    src="@/assets/img/brand-logo/tb-4.png"
                    class="img-fluid"
                    alt="logo"
                  />
                </div>
              </div>
              <div class="swiper-slide">
                <div class="logo-grid-item">
                  <img
                    src="@/assets/img/brand-logo/tb-5.png"
                    class="img-fluid"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper, { Autoplay } from "swiper";
export default {
  mounted() {
    new Swiper(this.$refs.paymentBrandLogo, {
      modules: [Autoplay],
      slidesPerView: 2,
      spaceBetween: 24,
      speed: 1000,
      autoplay: {
        delay: 2500,
      },
      slidesPerGroup: 1,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        991: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      },
    });
  },
};
</script>

<style></style>
