<template>
  <section id="open-positions" class="open-jobs ptb-120">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-4 col-md-12">
          <div class="section-heading" data-aos="fade-up" data-aos-duration="1000">
            <h4 class="h5 text-primary">{{ $t('nosEmplois') }}</h4>
            <h2>{{ $t('emploidispo') }}</h2>
          </div>
        </div>
        <div class="col-lg-7 col-md-12" data-aos="fade-up" data-aos-duration="1200">
          <p>
            {{ $t('emploiDispoDes') }}
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <!-- Première offre d'emploi avec animation de montée -->
        <div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="100">
          <router-link
            to="/CareerSingle"
            class="text-decoration-none mt-4 mt-xl-0 mt-lg-0 single-open-job p-5 bg-dark text-white d-block rounded-custom"
          >
            <div class="d-flex justify-content-between align-items-center">
              <span class="job-time h-6 mb-2"
                ><i class="far fa-briefcase me-2"></i>
                <strong>{{ $t('horaireEmploie') }}</strong></span
              >
              <span class="badge px-3 py-2 bg-custom-light rounded-pill small"
                >Projet manager</span
              >
            </div>
            <h3 class="h5">Projet manager</h3>
            <ul class="job-info-list list-inline list-unstyled text-muted">
              <li class="list-inline-item">
                <span class="far fa-house-building me-1"></span> Montreal
              </li>
              <li class="list-inline-item">
                <span class="far fa-map-marker-alt me-1"></span> Québec , QC
              </li>
              <li class="list-inline-item">
                <span class="far fa-wallet me-1"></span> {{ $t('payeEmploie') }}
              </li>
            </ul>
            <div class="btn btn-outline-light btn-sm d-inline-block mt-4">
              {{ $t('postuleEmploi') }}
            </div>
          </router-link>
        </div>

        <!-- Deuxième offre d'emploi avec animation de montée -->
        <div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="200">
          <router-link
            to="/CareerSingle2"
            class="text-decoration-none mt-4 mt-xl-0 mt-lg-0 single-open-job p-5 bg-dark text-white d-block rounded-custom"
          >
            <div class="d-flex justify-content-between align-items-center">
              <span class="job-time h-6 mb-2"
                ><i class="far fa-briefcase me-2"></i>
                <strong>{{ $t('horaireEmploie') }}</strong></span
              >
              <span class="badge px-3 py-2 bg-custom-light rounded-pill small"
                >IA Developer</span
              >
            </div>
            <h3 class="h5">{{ $t('a') }}</h3>
            <ul class="job-info-list list-inline list-unstyled text-muted">
              <li class="list-inline-item">
                <span class="far fa-house-building me-1"></span> Paris
              </li>
              <li class="list-inline-item">
                <span class="far fa-map-marker-alt me-1"></span> France, FR
              </li>
              <li class="list-inline-item">
                <span class="far fa-wallet me-1"></span> $60k - $70k
              </li>
            </ul>
            <div class="btn btn-outline-light btn-sm d-inline-block mt-4">
              {{ $t('postuleEmploi') }}
            </div>
          </router-link>
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
