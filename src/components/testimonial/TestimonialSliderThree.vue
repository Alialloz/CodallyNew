<template>
  <section class="testimonial-section bg-light ptb-120">
    <div class="container">
      <div class="row justify-content-center align-content-center">
        <div class="col-md-10 col-lg-6">
          <div class="section-heading text-center" data-aos="fade-up">
            <h4 class="h5">Testimonial</h4>
            <h2>What’s Clients Say</h2>
            <p>
              Credibly grow premier ideas rather than bricks-and-clicks
              strategic theme areas distributed for stand-alone web-readiness.
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
            <div>
              <div
                ref="testimonialThreeSwiper"
                class="testimonialThreeSwiper swiper"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div
                      class="p-4 bg-white rounded-custom position-relative shadow-sm"
                    >
                      <p>
                        Pellentesque nec nam aliquam sem. Ultricies lacus sed
                        turpis tincidunt id aliquet risus. Consequat nisl vel
                        pretium lectus quam id.
                      </p>

                      <div class="author d-flex">
                        <div class="author-img me-3">
                          <img
                            src="@/assets/img/testimonial/author1.jpg"
                            alt="author photo"
                            class="rounded-circle"
                            width="60"
                            height="60"
                          />
                        </div>
                        <div class="author-info">
                          <h6 class="m-0">Alex Loverty</h6>
                          <span>Product Designer</span>
                          <ul
                            class="review-rate mb-0 list-unstyled list-inline"
                          >
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
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="p-4 bg-white rounded-custom position-relative shadow-sm"
                    >
                      <p>
                        Pellentesque nec nam aliquam sem. Ultricies lacus sed
                        turpis tincidunt id aliquet risus. Consequat nisl vel
                        pretium lectus quam id.
                      </p>

                      <div class="author d-flex">
                        <div class="author-img me-3">
                          <img
                            src="@/assets/img/testimonial/author3.jpg"
                            alt="author photo"
                            class="rounded-circle"
                            width="60"
                            height="60"
                          />
                        </div>
                        <div class="author-info">
                          <h6 class="m-0">Aminul Islam</h6>
                          <span>Product Designer</span>
                          <ul
                            class="review-rate mb-0 list-unstyled list-inline"
                          >
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
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="p-4 bg-white rounded-custom position-relative shadow-sm"
                    >
                      <p>
                        Pellentesque nec nam aliquam sem. Ultricies lacus sed
                        turpis tincidunt id aliquet risus. Consequat nisl vel
                        pretium lectus quam id.
                      </p>

                      <div class="author d-flex">
                        <div class="author-img me-3">
                          <img
                            src="@/assets/img/testimonial/author2.jpg"
                            alt="author photo"
                            class="rounded-circle"
                            width="60"
                            height="60"
                          />
                        </div>
                        <div class="author-info">
                          <h6 class="m-0">Neaj Morshed</h6>
                          <span>FrontEnd Developer</span>
                          <ul
                            class="review-rate mb-0 list-unstyled list-inline"
                          >
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
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import Swiper, { Navigation } from "swiper";

export default {
  name: "testimonialThreeSwiper",
  mounted() {
    new Swiper(this.$refs.testimonialThreeSwiper, {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1000,
      autoplay: {
        delay: 2500,
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-nav-control .swiper-button-next",
        prevEl: ".swiper-nav-control .swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });
  },
};
</script>
