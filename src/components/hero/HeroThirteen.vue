<template>
  <section class="hero-payment-gateway">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-10">
          <div class="payment-gateway-text">
            <h1 class="display-5 text-white fw-bold mb-3">
              The Easiest Way to Manage Personal With
              <span class="gr-text fw-bold">Fintech</span>
            </h1>
            <p class="text-white m-0">
              Access your account via your mobile phone View balance, transfer
              funds, view transactions wherever happy clients all around.
            </p>
            <div
              class="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex"
            >
              <router-link to="/request-for-demo" class="btn-gradient-sqr me-3"
                >Download Now</router-link
              >
              <a
                class="glightbox text-decoration-none d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
              >
                <i class="fas fa-play"></i> Watch Demo
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div
            class="payment-hero-img pt-120 text-center text-lg-end position-relative"
          >
            <img
              src="@/assets/img/pay-h-img.png"
              class="img-fluid"
              alt="smile"
            />
            <img
              src="@/assets/img/pay-hero-s.png"
              class="img-fluid h-shape"
              alt="smile"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GLightbox from 'glightbox';
export default {
  mounted() {
    //lightbox settings
    this.lightbox = GLightbox({
      href: 'https://www.youtube.com/watch?v=hAP2QF--2Dg',
      type: 'video',
      source: 'youtube',
      width: 800,
      autoplayVideos: true,
    });
  },
};
</script>

<style></style>
