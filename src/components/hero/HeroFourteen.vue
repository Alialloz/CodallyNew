<template>
  <section class="digi-hero ptb-120">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 col-xl-5 col-md-8">
          <div class="digi-hero-text mt-5 mt-lg-0">
            <div>
              <span class="span-arrow">Best Digital Agency</span>
              <img src="@/assets/img/arro-right.svg" alt="arrow" />
            </div>
            <h1 class="display-5 fw-bold mb-3">
              We Are the <span class="text-orange fw-bold">Brilliants</span>
              in Terms of digital Marketing
            </h1>
            <p class="m-0">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
            <div
              class="action-btns mt-4 align-items-center d-block d-sm-flex d-lg-flex d-md-flex"
            >
              <router-link to="/contact" class="btn rounded-pill bg-orange me-3"
                >Download Now</router-link
              >
              <a
                href="#"
                class="text-decoration-none glightbox d-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
              >
                <i class="fas fa-play"></i> How It Works
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-xl-7">
          <div class="digi-hero-img text-center position-relative mt-5">
            <img
              src="@/assets/img/digi-h-girl.jpg"
              class="img-fluid"
              alt="girl"
            />
            <ul class="list-unstyled d-none d-xl-block">
              <li>
                <img
                  src="@/assets/img/digital-marketing/hero-shape-1.png"
                  alt="shape"
                  class=""
                />
              </li>
              <li>
                <img
                  src="@/assets/img/digital-marketing/hero-shape-2.png"
                  alt="shape"
                />
              </li>
              <li>
                <img
                  src="@/assets/img/digital-marketing/hero-shape-3.png"
                  alt="shape"
                />
              </li>
              <li>
                <img
                  src="@/assets/img/digital-marketing/hero-shape-4.png"
                  alt="shape"
                />
              </li>
            </ul>
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
