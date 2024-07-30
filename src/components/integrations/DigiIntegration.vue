<template>
  <section class="digi-integration bg-dark position-relative">
    <div class="digi-testimonial">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8">
            <div class="text-center mb-5">
              <div>
                <span class="span-arrow text-pink">Custome Feedback</span>
                <img
                  src="@/assets/img/arro-right.svg"
                  class="img-fluid"
                  alt="arrow"
                />
              </div>
              <h2 class="text-dark">
                Hear what our <span class="text-pink">amazing</span>
                customers say
              </h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="position-relative">
              <div
                ref="digiTestimonialWrapper"
                class="swiper digiTestimonialWrapper"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div
                      class="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg"
                    >
                      <div class="text-center text-md-start">
                        <img
                          src="@/assets/img/digi-t-1.png"
                          class="me-md-4 mb-4 mb-md-0"
                          alt="Person"
                        />
                      </div>
                      <div>
                        <h5 class="mb-3">
                          "Agency X helped us to reach our business goals"
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vitae, aliquet duis pellentesque pretium mattis
                          orci. Vestibulum nunc diam tellus ac tempor. Nulla a
                          commod.
                        </p>
                        <h6 class="m-0">Kyle Johnston</h6>
                        <span class="text-orange fs-sm text-muted"
                          >Founder & CEO</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg"
                    >
                      <div class="text-center text-md-start">
                        <img
                          src="@/assets/img/digi-t-1.png"
                          class="me-md-4 mb-4 mb-md-0"
                          alt="Person"
                        />
                      </div>
                      <div>
                        <h5 class="mb-3">
                          "Agency X helped us to reach our business goals"
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vitae, aliquet duis pellentesque pretium mattis
                          orci. Vestibulum nunc diam tellus ac tempor. Nulla a
                          commod.
                        </p>
                        <h6 class="m-0">Kyle Johnston</h6>
                        <span class="text-orange fs-sm text-muted"
                          >Founder & CEO</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg"
                    >
                      <div class="text-center text-md-start">
                        <img
                          src="@/assets/img/digi-t-1.png"
                          class="me-md-4 mb-4 mb-md-0"
                          alt="Person"
                        />
                      </div>
                      <div>
                        <h5 class="mb-3">
                          "Agency X helped us to reach our business goals"
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vitae, aliquet duis pellentesque pretium mattis
                          orci. Vestibulum nunc diam tellus ac tempor. Nulla a
                          commod.
                        </p>
                        <h6 class="m-0">Kyle Johnston</h6>
                        <span class="text-orange fs-sm text-muted"
                          >Founder & CEO</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="digi-nav-control">
                <span class="swiper-button-prev shadow-sm"
                  ><i class="far fa-arrow-left"></i
                ></span>
                <span class="swiper-button-next shadow-sm"
                  ><i class="far fa-arrow-right"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-3">
          <div class="int-icons position-relative">
            <ul class="list-unstyled mb-0 d-none d-lg-block">
              <li>
                <img
                  src="@/assets/img/digital-marketing/int-icon/fa.svg"
                  alt="icon"
                />
              </li>
              <li>
                <img
                  src="@/assets/img/digital-marketing/int-icon/fi.svg"
                  alt="icon"
                />
              </li>
              <li>
                <img
                  src="@/assets/img/digital-marketing/int-icon/slack.svg"
                  alt="icon"
                />
              </li>
              <li>
                <img
                  src="@/assets/img/digital-marketing/int-icon/inst.svg"
                  alt="icon"
                />
              </li>
              <li>
                <img
                  src="@/assets/img/digital-marketing/int-icon/er.svg"
                  alt="icon"
                />
              </li>
              <li>
                <img
                  src="@/assets/img/digital-marketing/int-icon/google.svg"
                  alt="icon"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="text-center">
            <div>
              <span class="span-arrow text-pink">Intergration Software </span>
              <img src="@/assets/img/arro-right.svg" alt="arrow" />
            </div>
            <h2 class="mb-4">Intergrated with 20+ Widely Used Software</h2>
            <div>
              <router-link
                to="/contact"
                class="btn rounded-pill bg-orange me-3 mb-3"
                >Get in touch</router-link
              >
              <router-link
                to="/integrations"
                class="btn rounded-pill btn-outline-light mb-3"
                >Browse all integration</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="int-icons position-relative">
            <ul class="list-unstyled mb-0 d-none d-lg-block">
              <li>
                <img
                  src="@/assets/img/digital-marketing/int-icon/slash.svg"
                  alt="icon"
                />
              </li>
              <li>
                <img
                  src="@/assets/img/digital-marketing/int-icon/tree.svg"
                  alt="icon"
                />
              </li>
              <li>
                <img
                  src="@/assets/img/digital-marketing/int-icon/drive.svg"
                  alt="icon"
                />
              </li>
              <li>
                <img
                  src="@/assets/img/digital-marketing/int-icon/in.svg"
                  alt="icon"
                />
              </li>
              <li>
                <img
                  src="@/assets/img/digital-marketing/int-icon/star.svg"
                  alt="icon"
                />
              </li>
              <li>
                <img
                  src="@/assets/img/digital-marketing/int-icon/twi.svg"
                  alt="icon"
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
import Swiper, { Navigation } from 'swiper';
export default {
  mounted() {
    new Swiper(this.$refs.digiTestimonialWrapper, {
      modules: [Navigation],
      slidesPerView: 1,
      loop: true,
      speed: 800,
      navigation: {
        nextEl: '.digi-nav-control .swiper-button-next',
        prevEl: '.digi-nav-control .swiper-button-prev',
      },
    });
  },
};
</script>

<style>
.digi-integration {
  background-image: url('@/assets/img/page-header-bg.svg');
  background-repeat: no-repeat;
  background-position: center bottom;
}
</style>
