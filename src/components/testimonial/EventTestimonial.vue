<template>
  <section class="ev-testimonial bg-light-blue ptb-120">
    <ul class="list-unstyled author d-none d-xl-block">
      <li>
        <img src="@/assets/img/event/t-1.png" class="img-fluid" alt="icon" />
      </li>
      <li>
        <img src="@/assets/img/event/t-2.png" class="img-fluid" alt="icon" />
      </li>
    </ul>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center mb-4">
            <span class="fw-bold text-dark-blue">Testimonial</span>
            <h2>Customer Say About us</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div
            ref="evTestimonialSlider"
            class="swiper evTestimonialSlider ev-testimonial-slider pb-5"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="text-center ev-single-testimonial">
                  <img
                    src="@/assets/img/event/testi-1.png"
                    alt="avatar"
                    class="mb-3"
                  />
                  <h5>Terrence Alexander</h5>
                  <ul class="list-unstyled rating-list list-inline mb-0">
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
                  <p>
                    Proactively target customer directed infrastructures via
                    parallel e-business. Authoritatively coordinate superior
                    potentialities through value-added content. Rapidiously
                    visualize collaborative growth strategies before
                    client-focused web services. Competently strategize
                    out-of-the-box e-services.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="text-center ev-single-testimonial">
                  <img
                    src="@/assets/img/event/testi-1.png"
                    alt="avatar"
                    class="mb-3"
                  />
                  <h5>Terrence Alexander</h5>
                  <ul class="list-unstyled rating-list list-inline mb-0">
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
                  <p>
                    Proactively target customer directed infrastructures via
                    parallel e-business. Authoritatively coordinate superior
                    potentialities through value-added content. Rapidiously
                    visualize collaborative growth strategies before
                    client-focused web services. Competently strategize
                    out-of-the-box e-services.
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="text-center ev-single-testimonial">
                  <img
                    src="@/assets/img/event/testi-1.png"
                    alt="avatar"
                    class="mb-3"
                  />
                  <h5>Terrence Alexander</h5>
                  <ul class="list-unstyled rating-list list-inline mb-0">
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
                  <p>
                    Proactively target customer directed infrastructures via
                    parallel e-business. Authoritatively coordinate superior
                    potentialities through value-added content. Rapidiously
                    visualize collaborative growth strategies before
                    client-focused web services. Competently strategize
                    out-of-the-box e-services.
                  </p>
                </div>
              </div>
            </div>
            <div class="eve-pagination swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper, { Pagination } from 'swiper';
export default {
  mounted() {
    new Swiper(this.$refs.evTestimonialSlider, {
      modules: [Pagination],
      slidesPerView: 1,
      loop: true,
      speed: 800,
      pagination: {
        clickable: true,
        el: '.eve-pagination.swiper-pagination',
      },
    });
  },
};
</script>

<style></style>
