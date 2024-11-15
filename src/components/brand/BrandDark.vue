<template>
  <div class="customer-section pb-120 bg-dark">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-12">
          <div class="line left-line"></div>

          <p class="text-center mt-5 mb-5" data-aos="fade-up" data-aos-delay="50">
            {{ $t('partenaireConfiance') }} </p>

          <div class="sponsor-carousel-wrapper">
            <div class="sponsor-carousel">
              <div class="sponsor-logo">
                <a href="https://www.esgi.fr/" target="_blank">
                  <img src="@/assets/img/clients/logo-esgi.png" alt="ESGI Logo" />
                </a>
              </div>
              <div class="sponsor-logo">
                  <img src="@/assets/img/imgSite/IDA.png" alt="Intelchain Logo" />
              </div> 
              <div class="sponsor-logo">
                <a href="https://lec-media.agency/" target="_blank">
                  <img src="@/assets/img/clients/logo-lec-media.png" alt="LEC Media Logo" />
                </a>
              </div>
              <div class="sponsor-logo">
                <a href="https://lavicennes.ch/" target="_blank">
                  <img src="@/assets/img/clients/logo-lavicennes.png" alt="Lavicennes Logo" />
                </a>
              </div>
              <div class="sponsor-logo">
                <a href="https://www.uqac.ca/" target="_blank">
                  <img src="@/assets/img/clients/800px-UQAC_Logo.png" alt="UQAC Logo" />
                </a>
              </div>
              <div class="sponsor-logo">
                <a href="https://uqam.ca/" target="_blank">
                  <img src="@/assets/img/clients/logoUqam.png" alt="UQAM Logo" />
                </a>
              </div>
              <div class="sponsor-logo">
                <a href="https://www.intelchain.org/" target="_blank">
                  <img src="@/assets/img/clients/logo-intelchain.png" alt="Intelchain Logo" />
                </a>
              </div>
            </div>
          </div>
        <p class="text-center mt-5 mb-0" data-aos="fade-up" data-aos-delay="200">
            {{ $t('sloganCollab') }}
          </p>

          <!-- Avis des partenaires -->
          <!-- <div class="partner-reviews mt-5 d-flex justify-content-between">
            <div class="review-box" data-aos="fade-up" data-aos-delay="100">
              <p class="review-text">
                "Travailler avec cette équipe a été un réel plaisir. Leur professionnalisme et leur réactivité sont remarquables."
              </p>
              <p class="review-author">— ESGI</p>
            </div>
            <div class="review-box" data-aos="fade-up" data-aos-delay="150">
              <p class="review-text">
                "Une collaboration fructueuse qui a permis d’atteindre des résultats au-delà de nos attentes."
              </p>
              <p class="review-author">— LEC Media</p>
            </div>
          </div> -->

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
.sponsor-carousel-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 20px 0;
}

.sponsor-carousel {
  display: flex;
  gap: 30px;
  animation: scroll 15s linear infinite;
  will-change: transform;
}

.sponsor-carousel-wrapper:hover .sponsor-carousel {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-150%);
  }
}

.sponsor-logo {
  min-width: 150px;
  transition: transform 0.3s ease;
}

.sponsor-logo img {
  width: 150px;
  height: auto;
  object-fit: contain;
}

.sponsor-logo:hover {
  transform: scale(1.1) rotate(3deg);
}

.partner-reviews {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
}

.review-box {
  flex: 1;
  max-width: 45%;
  background-color: #2c2c2c;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #444;
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}

.review-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
}

.review-text {
  font-size: 15px;
  line-height: 1.4;
  margin-bottom: 10px;
  color: #ddd;
}

.review-author {
  font-weight: bold;
  color: #f1f1f1;
  text-align: right;
}

p {
  color: #ffffff;
  font-size: 18px;
  line-height: 1.5;
}

p.text-center.mt-5.mb-5 {
  font-size: 28px;
  font-weight: bold;
  color: #f1f1f1;
}

p, .sponsor-logo {
  transition: all 0.1s ease;
}
</style>
