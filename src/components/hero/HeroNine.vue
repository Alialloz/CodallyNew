<template>
  <section class="hero-it-solution hero-nine-bg ptb-120">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-10">
          <div class="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
            <h1 class="fw-bold display-5">We Care Your any IT Solution</h1>
            <p class="lead">
              Proactively coordinate quality quality vectors vis-a-vis supply
              chains. Quickly engage client-centric web services.
            </p>
            <div
              class="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex"
            >
              <router-link to="/request-for-demo" class="btn btn-primary me-3"
                >Request For Demo</router-link
              >
              <a
                href="#"
                class="glightbox text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0 text-primary"
              >
                <i class="fas fa-play text-primary border-2 border-primary"></i>
                Watch Demo
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="hero-img position-relative mt-5 mt-lg-0">
            <img
              src="@/assets/img/banner_image.png"
              alt="hero hero-it-solution "
              class="img-fluid"
            />
            <div class="dots">
              <img src="@/assets/img/banner_dot.png" alt="dot" class="dot-1" />
              <img src="@/assets/img/banner_dot.png" alt="dot" class="dot-2" />
            </div>
            <div class="bubble">
              <span class="bubble-1"></span>
              <span class="bubble-2"></span>
            </div>
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
