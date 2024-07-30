<template>
  <section class="counter-with-video pt-60 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="cyber-video-img cyber-video-bg">
            <a
              href="#"
              class="glightbox video-icon popup-youtube popup-video-btn text-decoration-none"
              ><i class="fas fa-play"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mt-5 mt-lg-0">
            <div class="section-heading mb-5">
              <h5 class="h6 text-primary">Protect to your life</h5>
              <h2>
                Partner With One of the Premier as Cyber security Provider
              </h2>
              <p>
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="bg-white p-4 cyber-count-box mb-30 mb-lg-0">
                  <h2 class="text-primary">50k+</h2>
                  <h5 class="h-6">Happy Clients</h5>
                  <p>
                    If you use this is regularly keephosting bandwidth bill
                    nostrud amet.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="bg-white p-4 cyber-count-box">
                  <h2 class="text-primary">7 k+</h2>
                  <h5 class="h-6">Success Project</h5>
                  <p>
                    If you use this si regularly keephosting bandwidth bill
                    nostrud amet.
                  </p>
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
