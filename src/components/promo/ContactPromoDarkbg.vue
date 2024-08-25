<template>
    <section class="contact-promo ptb-120" style="background-color: rgb(var(--bs-dark-rgb));">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div
              class="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100"
              style="background: rgba(255, 255, 255, 0.9); border: 1px solid rgba(0, 0, 0, 0.1);"
            >
              <span class="fad fa-envelope fa-3x text-primary"></span>
              <div class="contact-promo-info mb-4">
                <h5>{{ $t('Email') }}</h5>
                <p v-html="$t('EmailDesc', { email: '<a href=\'mailto:codally.agency@outlook.com\'>codally.agency@outlook.com</a>' })"></p>


              </div>
              <a href="mailto:codally.agency@outlook.com" class="btn btn-primary mt-auto">
                {{ $t('Email') }}
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div
              class="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100"
              style="background: rgba(255, 255, 255, 0.9); border: 1px solid rgba(0, 0, 0, 0.1);"
            >
              <span class="fad fa-phone fa-3x text-primary"></span>
              <div class="contact-promo-info mb-4">
                <h5>{{ $t('Tel') }}</h5>
                <p>
                  {{ $t('TelDes') }}
                </p>
              </div>
              <a href="tel:(514) 600-8289" class="btn btn-link mt-auto">
                (514) 600-8289
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .contact-promo h5,
  .contact-promo p {
    color: black;
  }
  
  .contact-us-promo {
    background: rgba(255, 255, 255, 0.95); /* Adding transparency */
    border: 1px solid rgba(0, 0, 0, 0.1); /* Adding a subtle border */
    transition: transform 0.3s ease; /* Adding a hover effect */
  }
  
  .contact-us-promo:hover {
    transform: translateY(-5px);
  }
  </style>
  