<template>
  <section class="career-promo ptb-120 bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-12">
          <div class="section-heading text-center" data-aos="fade-up" data-aos-duration="1000">
            <h4 class="h3">{{ $t('pourquoiNousRejoindre') }}</h4>
            <h2></h2>
            <p>
              {{ $t('descritpionPk') }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Raison 1 -->
        <div class="col-md-6 col-lg-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          <div class="single-feature d-flex mt-0 p-5 bg-white rounded-custom">
            <span class="fas fa-house-user fa-2x text-primary"></span>
            <div class="ms-4 mt-2">
              <h5>{{ $t('titreRaison1') }}</h5>
              <p class="mb-0">
                {{ $t('descriptionRaison1') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Raison 2 -->
        <div class="col-md-6 col-lg-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
          <div class="single-feature d-flex mt-4 mt-xl-0 mt-lg-0 mt-md-0 p-5 bg-white rounded-custom">
            <span class="fas fa-clock fa-2x text-primary"></span>
            <div class="ms-4 mt-2">
              <h5>{{ $t('titreRaison2') }}</h5>
              <p class="mb-0">
                {{ $t('descriptionRaison2') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Raison 3 -->
        <div class="col-md-6 col-lg-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
          <div class="single-feature d-flex mt-4 p-5 bg-white rounded-custom">
            <span class="fas fa-user-friends fa-2x text-primary"></span>
            <div class="ms-4 mt-2">
              <h5>{{ $t('titreRaison3') }}</h5>
              <p class="mb-0">
                {{ $t('descriptionRaison3') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Raison 4 -->
        <div class="col-md-6 col-lg-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
          <div class="single-feature d-flex mt-4 p-5 bg-white rounded-custom">
            <span class="fas fa-briefcase-medical fa-2x text-primary"></span>
            <div class="ms-4 mt-2">
              <h5>{{ $t('titreRaison4') }}</h5>
              <p class="mb-0">
                {{ $t('descriptionRaison4') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init();  // Initialisation de l'animation AOS
  }
};
</script>
