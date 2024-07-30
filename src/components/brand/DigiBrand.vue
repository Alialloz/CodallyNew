<template>
  <section class="digtal-marketing-logo pb-120">
    <div class="container">
      <div class="bg-soft-blue py-5 px-4 rounded-3">
        <div class="row justify-content-center">
          <div class="col-auto">
            <h5 class="mb-4">Trusted by the best companies in the world</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-auto">
            <div ref="digiLogoSlider" class="swiper digiLogoSlider">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="single-logo">
                    <img
                      src="@/assets/img/brand-logo/google.svg"
                      class="img-fluid"
                      height="30"
                      alt="logo"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="single-logo">
                    <img
                      src="@/assets/img/brand-logo/facebook.svg"
                      class="img-fluid"
                      alt="logo"
                      height="30"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="single-logo">
                    <img
                      src="@/assets/img/brand-logo/youtube.svg"
                      class="img-fluid"
                      alt="logo"
                      height="30"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="single-logo">
                    <img
                      src="@/assets/img/brand-logo/printerest.svg"
                      class="img-fluid"
                      alt="logo"
                      height="30"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="single-logo">
                    <img
                      src="@/assets/img/brand-logo/webflow.svg"
                      class="img-fluid"
                      alt="logo"
                      height="30"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="single-logo">
                    <img
                      src="@/assets/img/brand-logo/company.svg"
                      class="img-fluid"
                      alt="logo"
                      height="30"
                    />
                  </div>
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
import Swiper from 'swiper';
export default {
  mounted() {
    new Swiper(this.$refs.digiLogoSlider, {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 1000,
      autoplay: {
        delay: 2500,
      },
      slidesPerGroup: 1,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 6,
        },
      },
    });
  },
};
</script>

<style></style>
