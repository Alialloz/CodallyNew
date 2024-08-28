<template>
  <div class="customer-section pb-120 bg-dark">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-12">

        <!-- Paragraphe vide pour le margin-->
          
          <p
            class="text-center mt-5 mb-5"
            data-aos="fade-up"
            data-aos-delay="50"
          >
          </p>
          <ul class="customer-logos-grid text-center list-unstyled mb-0" style="position: relative; padding: 0 20px;" >
            <li>
              
              
              <a href="https://www.uqac.ca/" target="_blank" rel="noopener noreferrer">
                <img
                  src="@/assets/img/clients/800px-UQAC_Logo.png"
                  width="150"
                  alt="clients logo"
                  class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                  data-aos="fade-up"
                  data-aos-delay="50"
                />
              </a>
            </li>
            <li>
              <a href="https://uqam.ca/" target="_blank" rel="noopener noreferrer">
                <img
                  src="@/assets/img/clients/logoUqam.png"
                  width="150"
                  alt="clients logo"
                  class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                  data-aos="fade-up"
                  data-aos-delay="50"
                />
              </a>
            </li>
            <li>
              <a href="https://www.intelchain.org/" target="_blank" rel="noopener noreferrer">
                <img
                  src="@/assets/img/clients/logo-intelchain.png"
                  width="150"
                  alt="clients logo"
                  class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </a>
            </li>
            <li>
              <a href="https://www.esgi.fr/" target="_blank" rel="noopener noreferrer">
                <img
                  src="@/assets/img/clients/logo-esgi.png"
                  width="150"
                  alt="clients logo"
                  class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </a>
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
              <a href="https://lec-media.agency/" target="_blank" rel="noopener noreferrer">
                <img
                  src="@/assets/img/clients/logo-lec-media.png"
                  width="150"
                  alt="clients logo"
                  class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                  data-aos="fade-up"
                  data-aos-delay="50"
                />
              </a>
            </li>

            <li>
              <a href="https://wintechnologie.app/" target="_blank" rel="noopener noreferrer">
                <img
                  src="@/assets/img/clients/logo-wintechno.png"
                  width="150"
                  alt="clients logo"
                  class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </a>
            </li>
            <li>
              <a href="https://lavicennes.ch/" target="_blank" rel="noopener noreferrer">
                <img
                  src="@/assets/img/clients/logo-lavicennes.png"
                  width="150"
                  alt="clients logo"
                  class="img-fluid customer-logo p-1 p-md-2 p-lg-3 m-auto"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </a>
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

<style>
li > div {
  position: absolute;
  top: 50%;
  width: 10px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, #999999, transparent); /* Changed color to be more subtle */
  transform: translateY(-50%);
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(153, 153, 153, 0.5); /* Reduced the size of the shadow */
}

li > div:first-child {
  left: -10px;
  border-radius: 10px 0 0 10px;
}

li > div:last-child {
  right: -10px;
  border-radius: 0 10px 10px 0;
}</style>