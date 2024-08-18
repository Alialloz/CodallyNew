<template>
  <div class="customer-section pb-120 bg-dark">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-12">
          <p
            class="text-center mt-5 mb-5"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <!-- Paragraphe vide pour le margin-->
          </p>
          <ul class="customer-logos-grid text-center list-unstyled mb-0">
            <li>
              <img
                src="@/assets/img/clients/800px-UQAC_Logo.png"
                width="150"
                alt="clients logo"
                class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                data-aos="fade-up"
                data-aos-delay="50"
              />
            </li>
            <li>
              <img
                src="@/assets/img/clients/logoUqam.png"
                width="150"
                alt="clients logo"
                class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                data-aos="fade-up"
                data-aos-delay="50"
              />
            </li>
            <li>
              <img
                src="@/assets/img/clients/logoMarc.png"
                width="150"
                alt="clients logo"
                class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                data-aos="fade-up"
                data-aos-delay="50"
              />
            </li>
            <li>
              <img
                src="@/assets/img/clients/logo-lec-media.png"
                width="150"
                alt="clients logo"
                class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                data-aos="fade-up"
                data-aos-delay="50"
              />
            </li>
            <li>
              <img
                src="@/assets/img/clients/logo-intelchain.png"
                width="150"
                alt="clients logo"
                class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </li>
            <li>
              <img
                src="@/assets/img/clients/logo-esgi.png"
                width="150"
                alt="clients logo"
                class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </li>
            <li>
              <img
                src="@/assets/img/clients/logo-wintechno.png"
                width="150"
                alt="clients logo"
                class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </li>
            <li>
              <img
                src="@/assets/img/clients/logo-lavicennes.svg"
                width="150"
                alt="clients logo"
                class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </li>
          </ul>
          <p
            class="text-center mt-5 mb-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
          {{ $t('sloganCollab') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandDark',
};
</script>
