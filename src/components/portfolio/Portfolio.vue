<template>
  <section class="portfolio bg-light ptb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <div class="section-heading text-center">
            <h2>{{ $t('TitrePort') }}</h2>
            <p>
              {{ $t('PortDes') }}
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-lg-6 col-md-10 text-center">
          <router-link to="/about-us" class="text-black link-with-icon text-decoration-none mt-4">{{ $t('knowMore2') }} <i class="fas fa-arrow-right"></i></router-link>
        </div>
      </div>
    </div>
  </section>
</template>
