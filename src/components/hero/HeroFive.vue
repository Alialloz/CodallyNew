<template>
  <section
    class="hero-section hero-five ptb-120 min-vh-100 d-flex align-items-center bg-dark text-white position-relative overflow-hidden"
  >
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-6">
          <div class="hero-content-wrap">
            <h5 class="text-warning">{{ $t('slogan_2') }}</h5>
            <h1 class="fw-bold display-6">
              {{ $t('slogan_1') }}
            </h1>
            <p class="lead">
              &nbsp&nbsp{{ $t('description') }}
            </p>
            <div class="action-btns mt-5">
              <router-link to="/contact-us" class="btn btn-primary me-3">
                {{ $t('contact') }}
              </router-link>
              <router-link to="/our-team" class="btn btn-outline-light">
                {{ $t('about') }}
              </router-link>
            </div>
          </div>
          <div class="row justify-content-lg-start mt-60">
            <ul class="list-unstyled list-inline footer-social-list mb-0">
              <li class="list-inline-item">
                  <a href="https://github.com/CodAlly-Agency"><i class="fab fa-github"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/people/CodAlly/61556088625053/?is_tour_dismissed=true"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="https://ca.linkedin.com/company/codally"><i class="fab fa-linkedin"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fab fa-instagram"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="https://x.com/CodAllyAgency"><i class="fab fa-twitter"></i></a>
                </li>
              </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-8 mt-5 mt-lg-0">
          <div class="animated-img-wrap">
            <!--animated shape start-->
            <ul
              class="animate-element parallax-element animated-hero-1"
              style="
                position: relative;
                transform: translate3d(0px, 0px, 0px);
                transform-style: preserve-3d;
                backface-visibility: hidden;
              "
            >
              <li class="layer" data-depth="0.02">
                <img
                  src="@/assets/img/screen/animated-screen-2.svg"
                  alt="shape"
                  class="img-fluid position-absolute type-0"
                />
              </li>
            </ul>
            <!--animated shape end-->
            <img
              src="@/assets/img/screen/animated-screen-1.svg"
              alt="shape"
              class="position-relative img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroFive",
};
</script>

<style>
/* Add your styles here */
</style>
