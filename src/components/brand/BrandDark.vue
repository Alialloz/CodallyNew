<template>
  <div class="customer-section pb-120 bg-dark">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-12">
          <div class="line left-line"></div>
          
        <!-- Paragraphe vide pour le margin-->
          
          <p
            class="text-center mt-5 mb-5"
            data-aos="fade-up"
            data-aos-delay="50"
          >
          </p>
          <ul class="customer-logos-grid text-center list-unstyled mb-0" style="position: relative; padding: 0 20px;" >
            <div class="left-trait"></div> <!-- Trait gauche -->
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
            <div class="right-trait"></div> <!-- Trait droit -->
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

<style scoped>
.logo-container {
  position: relative;
  padding: 0 20px;
}

.customer-logos-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.side-gradient {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 15px;
  background: linear-gradient(to bottom, transparent, #ffffff, transparent);
}

.left-gradient {
  left: 0;
}

.right-gradient {
  right: 0;
}

.customer-logo {
  margin: 10px;
  transition: transform 0.3s ease;
}

.customer-logo:hover {
  transform: scale(1.1);
  transform: scale(1.1) rotate(3deg);
  transition: transform 0.3s ease;
  
}

.left-trait, .right-trait {
    position: absolute;
    top: 0;
    width: 0.2%; /* Largeur du trait */
    height: 100%;
    background: linear-gradient(to bottom, transparent, #ffffff, transparent); /* Dégradé de blanc */
}

.left-trait {
    left: -20px; /* Positionnement à gauche */
    border-radius: 10px 0 0 10px; /* Arrondi à gauche */
}

.right-trait {
    right: -20px; /* Positionnement à droite */
    border-radius: 0 10px 10px 0; /* Arrondi à droite */
}
.bg-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('background.svg');
    animation: backgroundMove 20s linear infinite;
}

@keyframes backgroundMove {
    0% { background-position: 0 0; }
    100% { background-position: 100% 100%; }
}

</style>