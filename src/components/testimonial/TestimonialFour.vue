<template>
  <section class="cyber-testimonial cyber-testimonial-bg pt-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-10">
          <div class="cyber-testimonial pe-5 mb-30 mb-lg-0">
            <h5 class="h6 text-primary">Testimonial</h5>
            <h2 class="">What they Say about Our Services.</h2>
            <p>
              If you use this site regularly and would like to help keep the
              site pay for the hosting and bandwidth bill
            </p>
            <div class="action-btn mt-5">
              <a href="request-demo.html" class="btn btn-primary me-3">
                More Testimonial</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div
            ref="cyberTestimonialSlider"
            class="cyberTestimonialSlider swiper"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="cyber-single-testimonial">
                  <div class="cyber-t-q mb-4">
                    <img src="@/assets/img/quoate.png" alt="quoate" />
                  </div>
                  <p class="mb-30">
                    If you use this site regularly and would like to help keep
                    the site on the hosting and bandwidth bill. If you use this
                    site regularly and would like to help keep the site on the
                    Internet, please consider donating a small sum to help pay
                    for the hosting and bandwidth bill.
                  </p>
                  <div class="cyber-auth-info d-flex">
                    <div class="pe-3 cyber-testimonial-author-img">
                      <img
                        src="@/assets/img/testimonial/app-testimonial-3.png"
                        alt="auth photo"
                        class=""
                      />
                    </div>
                    <div class="cyber-testimonial-author">
                      <h5 class="mb-0 h6">Neaj Morshed</h5>
                      <span>FrontEnd Developer.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="cyber-single-testimonial">
                  <div class="cyber-t-q mb-4">
                    <img src="@/assets/img/quoate.png" alt="quoate" />
                  </div>
                  <p class="mb-30">
                    If you use this site regularly and would like to help keep
                    the site on the hosting and bandwidth bill. If you use this
                    site regularly and would like to help keep the site on the
                    Internet, please consider donating a small sum to help pay
                    for the hosting and bandwidth bill.
                  </p>
                  <div class="cyber-auth-info d-flex">
                    <div class="pe-3 cyber-testimonial-author-img">
                      <img
                        src="@/assets/img/testimonial/app-testimonial-1.png"
                        alt="auth photo"
                      />
                    </div>
                    <div class="cyber-testimonial-author">
                      <h5 class="mb-0 h6">The Good</h5>
                      <span>CEO, Founder.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="cyber-single-testimonial">
                  <div class="cyber-t-q mb-4">
                    <img src="@/assets/img/quoate.png" alt="quoate" />
                  </div>
                  <p class="mb-30">
                    If you use this site regularly and would like to help keep
                    the site on the hosting and bandwidth bill. If you use this
                    site regularly and would like to help keep the site on the
                    Internet, please consider donating a small sum to help pay
                    for the hosting and bandwidth bill.
                  </p>
                  <div class="cyber-auth-info d-flex">
                    <div class="pe-3 cyber-testimonial-author-img">
                      <img
                        src="@/assets/img/testimonial/app-testimonial-2.png"
                        alt="auth photo"
                      />
                    </div>
                    <div class="cyber-testimonial-author">
                      <h5 class="mb-0 h6">Kate Winslate</h5>
                      <span>CEO, Founder.</span>
                    </div>
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
// Import Swiper Vue.js components
import Swiper, { Pagination } from "swiper";

export default {
  name: "cyberTestimonialSlider",
  mounted() {
    new Swiper(this.$refs.cyberTestimonialSlider, {
      modules: [Pagination],
      slidesPerView: 1,
      speed: 700,
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
      slidesPerGroup: 2,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 1,
        },
      },
    });
  },
};
</script>
