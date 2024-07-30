<template>
  <section
    class="testimonial-section ptb-120"
    :class="[darkBg ? 'bg-dark' : '', bgLight ? 'bg-light' : '']"
  >
    <div class="container">
      <div class="row justify-content-center align-content-center">
        <div class="col-md-10 col-lg-6">
          <div class="section-heading text-center" data-aos="fade-up">
            <h4 class="h5" :class="darkBg ? 'text-warning' : 'text-primary'">
              Testimonial
            </h4>
            <h2>What They Say About Us</h2>
            <p>
              Uniquely promote adaptive quality vectors rather than stand-alone
              e-markets. pontificate alternative architectures whereas iterate.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div
            class="position-relative w-100"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div ref="testimonialSwiper" class="swiper testimonialSwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div
                    class="p-5 rounded-custom position-relative"
                    :class="
                      darkBg ? 'bg-custom-light text-white' : 'border border-2'
                    "
                  >
                    <img
                      src="@/assets/img/testimonial/quotes-dot.svg"
                      alt="quotes"
                      width="100"
                      class="img-fluid position-absolute left-0 top-0 z--1 p-3"
                    />
                    <div class="d-flex mb-32 align-items-center">
                      <img
                        src="@/assets/img/testimonial/1.jpg"
                        class="img-fluid me-3 rounded"
                        width="60"
                        alt="user"
                      />
                      <div class="author-info">
                        <h6 class="mb-0">Neaj Morshed</h6>
                        <small>Fontend Developer</small>
                      </div>
                    </div>
                    <blockquote>
                      <h6>The Best Template You Got to Have it!</h6>
                      Globally network long-term high-impact schemas vis-a-vis
                      distinctive e-commerce cross-media infrastructures rather
                      than ethical
                    </blockquote>
                    <rating />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="p-5 rounded-custom position-relative"
                    :class="
                      darkBg ? 'bg-custom-light text-white' : 'border border-2'
                    "
                  >
                    <img
                      src="@/assets/img/testimonial/quotes-dot.svg"
                      alt="quotes"
                      width="100"
                      class="img-fluid position-absolute left-0 top-0 z--1 p-3"
                    />
                    <div class="d-flex mb-32 align-items-center">
                      <img
                        src="@/assets/img/testimonial/3.jpg"
                        class="img-fluid me-3 rounded"
                        width="60"
                        alt="user"
                      />
                      <div class="author-info">
                        <h6 class="mb-0">Oberoi R.</h6>
                        <small>CEO at Herbs</small>
                      </div>
                    </div>
                    <blockquote>
                      <h6>Embarrassed by the First Version.</h6>
                      Dynamically create innovative core competencies with
                      effective best practices promote innovative
                      infrastructures.
                    </blockquote>
                    <rating />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="p-5 rounded-custom position-relative"
                    :class="
                      darkBg ? 'bg-custom-light text-white' : 'border border-2'
                    "
                  >
                    <img
                      src="@/assets/img/testimonial/quotes-dot.svg"
                      alt="quotes"
                      width="100"
                      class="img-fluid position-absolute left-0 top-0 z--1 p-3"
                    />
                    <div class="d-flex mb-32 align-items-center">
                      <img
                        src="@/assets/img/testimonial/2.jpg"
                        class="img-fluid me-3 rounded"
                        width="60"
                        alt="user"
                      />
                      <div class="author-info">
                        <h6 class="mb-0">Mr.Rupan Oberoi</h6>
                        <small>Founder and CEO</small>
                      </div>
                    </div>
                    <blockquote>
                      <h6>Amazing Quiety template!</h6>
                      Appropriately negotiate interactive niches rather than
                      parallel strategic theme incubate premium total linkage
                      areas.
                    </blockquote>
                    <rating />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="p-5 rounded-custom position-relative"
                    :class="
                      darkBg ? 'bg-custom-light text-white' : 'border border-2'
                    "
                  >
                    <img
                      src="@/assets/img/testimonial/quotes-dot.svg"
                      alt="quotes"
                      width="100"
                      class="img-fluid position-absolute left-0 top-0 z--1 p-3"
                    />
                    <div class="d-flex mb-32 align-items-center">
                      <img
                        src="@/assets/img/testimonial/4.jpg"
                        class="img-fluid me-3 rounded"
                        width="60"
                        alt="user"
                      />
                      <div class="author-info">
                        <h6 class="mb-0">Joan Dho</h6>
                        <small>Founder and CTO</small>
                      </div>
                    </div>
                    <blockquote>
                      <h6>Best Template for SAAS Company!</h6>
                      Dynamically create innovative core competencies with
                      effective best practices promote innovative
                      infrastructures.
                    </blockquote>
                    <ul class="review-rate mb-0 mt-2 list-unstyled list-inline">
                      <li class="list-inline-item">
                        <i class="fas fa-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-star text-warning"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fas fa-star text-warning"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="p-5 rounded-custom position-relative"
                    :class="
                      darkBg ? 'bg-custom-light text-white' : 'border border-2'
                    "
                  >
                    <img
                      src="@/assets/img/testimonial/quotes-dot.svg"
                      alt="quotes"
                      width="100"
                      class="img-fluid position-absolute left-0 top-0 z--1 p-3"
                    />
                    <div class="d-flex mb-32 align-items-center">
                      <img
                        src="@/assets/img/testimonial/5.jpg"
                        class="img-fluid me-3 rounded"
                        width="60"
                        alt="user"
                      />
                      <div class="author-info">
                        <h6 class="mb-0">Emilia Clerk</h6>
                        <small>Lead Developer</small>
                      </div>
                    </div>
                    <blockquote>
                      <h6>It is undeniably good!</h6>
                      Rapidiously supply client-centric e-markets and
                      maintainable processes progressively engineer
                    </blockquote>
                    <rating />
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-nav-control">
              <span class="swiper-button-next"></span>
              <span class="swiper-button-prev"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper, { Navigation } from "swiper";
import Rating from "../common/Rating.vue";

export default {
  name: "TestimonialSlider",
  components: {
    Rating,
  },
  mounted() {
    new Swiper(this.$refs.testimonialSwiper, {
      modules: [Navigation],
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-nav-control .swiper-button-next",
        prevEl: ".swiper-nav-control .swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1142: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  },
  props: {
    darkBg: String,
    bgLight: String,
  },
};
</script>
