<template>
  <section class="hero-section hero-ten text-white hero-ten">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-10">
          <div class="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
            <h1 class="fw-bold display-5 text-white">
              Quiety is Frist priority Your Cyber Security
            </h1>
            <p class="lead">
              Velit officia consequat duis enim velit mollit Exercitation veniam
              consequat sunt nostrud amet.
            </p>
            <div
              class="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex"
            >
              <router-link to="/request-for-demo" class="btn btn-primary me-3"
                >Discover More</router-link
              >
              <a
                href="#"
                class="glightbox text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
              >
                <i class="fas fa-play"></i> How It Works
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-8 mt-5">
          <div class="hero-img position-relative circle-shape-images">
            <img
              src="@/assets/img/cyber_banner_image.svg"
              alt="hero img"
              class="img-fluid position-relative z-5"
            />
          </div>
        </div>
      </div>
      <div
        class="cyber-down-btn text-center position-relative d-none d-lg-block"
      >
        <a href="#cyber-about" class="text-primary">
          <i class="far fa-arrow-down"></i>
        </a>
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
