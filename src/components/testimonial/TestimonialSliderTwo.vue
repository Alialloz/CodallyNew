<template>
  <section class="crypto-testimonial bg-dark-black pt-60 pb-120">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="section-title mb-5">
            <h2 class="text-white">What They Say About Us</h2>
            <p class="text-white">
              The standard chunk of Lorem Ipsu used since the is reproduced
              below for those interested Sections.
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="text-left text-lg-end mb-5 mb-lg-0">
            <router-link
              to="/about-us"
              class="btn rounded-pill btn-primary text-decoration-none"
            >
              All Feedback
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div>
          <div ref="cryptoTestimonial" class="cryptoTestimonial swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="crypto-single-testimonial bg-soft-black">
                  <ul class="review-rate mb-0 list-unstyled list-inline">
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
                  <blockquote class="m-0">
                    <p class="m-0">
                      “You don’t have to be constantly searching the web to get
                      price updates. Just use our coin calculator and simply get
                      the desired result with a simple click.”
                    </p>
                  </blockquote>
                  <div class="author-meta d-flex align-items-center">
                    <div class="pe-3">
                      <img
                        src="@/assets/img/testimonial/app-testimonial-3.png"
                        alt="Author"
                      />
                    </div>
                    <div>
                      <h5 class="fw-normal text-white h6 m-0">
                        Noah L. Paulsen
                      </h5>
                      <span>Feb 19, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="crypto-single-testimonial bg-soft-black">
                  <ul class="review-rate mb-0 list-unstyled list-inline">
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
                  <blockquote class="m-0">
                    <p class="m-0">
                      “You don’t have to be constantly searching the web to get
                      price updates. Just use our coin calculator and simply get
                      the desired result with a simple click.”
                    </p>
                  </blockquote>
                  <div class="author-meta d-flex align-items-center">
                    <div class="pe-3">
                      <img
                        src="@/assets/img/testimonial/app-testimonial-2.png"
                        alt="Author"
                      />
                    </div>
                    <div>
                      <h5 class="fw-normal text-white h6 m-0">Arika Stack</h5>
                      <span>April 19, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="crypto-single-testimonial bg-soft-black">
                  <ul class="review-rate mb-0 list-unstyled list-inline">
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
                  <blockquote class="m-0">
                    <p class="m-0">
                      “You don’t have to be constantly searching the web to get
                      price updates. Just use our coin calculator and simply get
                      the desired result with a simple click.”
                    </p>
                  </blockquote>
                  <div class="author-meta d-flex align-items-center">
                    <div class="pe-3">
                      <img
                        src="@/assets/img/testimonial/app-testimonial-1.png"
                        class="img-fluid"
                        alt="Author"
                      />
                    </div>
                    <div>
                      <h5 class="fw-normal text-white h6 m-0">Neaj Morshed</h5>
                      <span>Feb 19, 2022</span>
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
// import Swiper core and required modules
import Swiper from 'swiper';

export default {
  name: 'TestimonialSliderTwo',
  mounted() {
    new Swiper(this.$refs.cryptoTestimonial, {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1000,
      autoplay: {
        delay: 2500,
      },
      slidesPerGroup: 1,
      loop: true,
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
