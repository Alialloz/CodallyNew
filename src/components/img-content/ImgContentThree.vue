<template>
  <div>
    
    <!-- Service 1 : Design Web -->
    <section id="web_design" class="image-feature ptb-120">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-5 col-12">
            <div class="feature-img-content">
              <div class="section-heading" data-aos="fade-up">
                <h2>{{ $t('designWeb') }}</h2>
                <p>
                  &nbsp&nbsp{{ $t('DevelopementWebTexte') }}
                </p>
              </div>
              <ul
                class="list-unstyled d-flex flex-wrap list-two-col mb-0"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <li>
                  <div class="icon-box">
                    <i class="fas fa-users text-white bg-primary rounded"></i>
                  </div>
                  <h3 class="h5">{{ $t('DWiconetitre1') }}</h3>
                  <p>&nbsp{{ $t('DWiconetexte1') }}</p>
                </li>
                <li>
                  <div class="icon-box">
                    <i class="fas fa-headset text-white bg-dark rounded"></i>
                  </div>
                  <h3 class="h5">{{ $t('DWiconetitre2') }}</h3>
                  <p>
                    &nbsp{{ $t('DWiconetexte2') }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="feature-img-holder p-5">
              <div
                class="p-5 bg-danger-soft position-relative rounded-custom d-block feature-img-wrap"
              >
                <div class="position-relative">
                  <img
                    src="@/assets/img/screen/widget-5.png"
                    class="img-fluid rounded-custom position-relative"
                    alt="feature-image"
                    data-aos="fade-up"
                    data-aos-delay="50"
                  />
                  <img
                    src="@/assets/img/screen/widget-3.png"
                    class="img-fluid rounded-custom shadow position-absolute bottom--100 right--100 hide-medium"
                    alt="feature-image"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  />
                </div>
                <div
                  class="position-absolute bg-dark-soft z--1 dot-mask dm-size-12 dm-wh-250 top-left"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service 2 : Développement d'Applications Mobiles -->

    <section id="app_development" class="image-feature ptb-120 bg-custom">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-5 col-12 order-lg-1">
            <div class="feature-img-content">
              <div class="section-heading" data-aos="fade-up">
                <h2>{{ $t('developpementApplication') }}</h2>
                <p>
                  &nbsp&nbsp{{ $t('DevelopementmobileTexte') }}
                </p>
              </div>
              <ul
                class="list-unstyled d-flex flex-wrap list-two-col mb-0"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <li>
                  <div class="icon-box">
                    <i
                      class="fas fa-dollar-sign text-white bg-success rounded"
                    ></i>
                  </div>
                  <h3 class="h5">{{ $t('DMiconetitre1') }}</h3>
                  <p>
                    &nbsp{{ $t('DMiconetexte1') }}
                  </p>
                </li>
                <li>
                  <div class="icon-box">
                    <i class="fas fa-headset text-white bg-dark rounded"></i>
                  </div>
                  <h3 class="h5">{{ $t('DMiconetitre2') }}</h3>
                  <p>
                    &nbsp{{ $t('DMiconetexte2') }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-12 order-lg-0">
            <div class="feature-img-holder p-5">
              <div
                class="bg-primary-soft p-5 rounded-custom position-relative d-block feature-img-wrap"
              >
                <div class="position-relative">
                  <img
                    src="@/assets/img/screen/widget-8.png"
                    class="img-fluid rounded-custom position-relative"
                    alt="feature-image"
                    data-aos="fade-up"
                    data-aos-delay="50"
                  />
                  <img
                    src="@/assets/img/screen/widget-6.png"
                    class="img-fluid rounded-custom shadow position-absolute top--100 left--100 hide-medium"
                    alt="feature-image"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  />
                </div>
                <div
                  class="position-absolute bg-dark-soft z--1 dot-mask dm-size-12 dm-wh-250 bottom-right"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service 3 : Développement Full Stack -->

    <section id="fullstack_development"  class="image-feature ptb-120">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-5 col-12">
            <div class="feature-img-content">
              <div class="section-heading" data-aos="fade-up">
                <h2>{{ $t('DéveloppementFullStack') }}</h2>
                <p>
                  &nbsp&nbsp{{ $t('DevelopementFullStackTexte') }}
                </p>
              </div>
              <ul
                class="list-unstyled d-flex flex-wrap list-two-col mt-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <li>
                  <div class="icon-box">
                    <i
                      class="fas fa-briefcase text-white bg-warning rounded"
                    ></i>
                  </div>
                  <h3 class="h5">{{ $t('DFTiconetitre1') }}</h3>
                  <p>
                    &nbsp{{ $t('DFTiconetexte1') }}
                  </p>
                </li>
                <li>
                  <div class="icon-box">
                    <i class="fas fa-truck text-white bg-info rounded"></i>
                  </div>
                  <h3 class="h5">{{ $t('DFTiconetitre2') }}</h3>
                  <p>
                    &nbsp{{ $t('DFTconetexte2') }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="feature-img-holder p-5">
              <div
                class="bg-danger-soft p-5 rounded-custom position-relative d-block feature-img-wrap"
              >
                <div class="position-relative">
                  <img
                    src="@/assets/img/screen/widget-9.png"
                    class="img-fluid rounded-custom position-relative"
                    alt="feature-image"
                    data-aos="fade-up"
                    data-aos-delay="50"
                  />
                  <img
                    src="@/assets/img/screen/widget-10.png"
                    class="img-fluid rounded-custom shadow position-absolute top--100 right--100 hide-medium"
                    alt="feature-image"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  />
                </div>
                <div
                  class="position-absolute bg-dark-soft z--1 dot-mask dm-size-12 dm-wh-250 bottom-left"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div>

     <!-- Service 4 : Développement de Logiciels Personnalisés -->

    <section  id="custom_software" class="image-feature ptb-120 bg-custom">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6 col-12">
            <div class="feature-img-holder p-5">
              <div class="p-5 bg-primary-soft position-relative rounded-custom d-block feature-img-wrap">
                <div class="position-relative">
                  <img src="@/assets/img/screen/widget-14.png" class="img-fluid rounded-custom position-relative" alt="feature-image" data-aos="fade-up" data-aos-delay="50" />
                </div>
                <div class="position-absolute bg-dark-soft z--1 dot-mask dm-size-12 dm-wh-250 top-left"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-12">
            <div class="feature-img-content">
              <div class="section-heading" data-aos="fade-up">
                <h2>{{ $t('logicielsPerso') }}</h2>
                <p>&nbsp&nbsp{{ $t('DevelopementLogicielPersoTexte') }}</p>
              </div>
              <ul class="list-unstyled d-flex flex-wrap list-two-col mb-0" data-aos="fade-up" data-aos-delay="50">
                <li>
                  <div class="icon-box">
                    <i class="fas fa-users text-white bg-primary rounded"></i>
                  </div>
                  <h3 class="h5">{{ $t('DLPiconetitre1') }}</h3>
                  <p>&nbsp{{ $t('DLPiconetexte1') }}</p>
                </li>
                <li>
                  <div class="icon-box">
                    <i class="fas fa-fingerprint text-white bg-danger rounded"></i>
                  </div>
                  <h3 class="h5">{{ $t('DLPiconetitre2') }}</h3>
                  <p>&nbsp{{ $t('DLPconetexte2') }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service 5 : Solutions d'Intelligence Artificielle -->

    <section  id="ai_solutions" class="image-feature ptb-120">
  <div class="container">
    <div class="row justify-content-between align-items-center">
      <div class="col-lg-5 col-12">
        <div class="feature-img-content">
          <div class="section-heading" data-aos="fade-up">
            <h2>{{ $t('solutionIA') }}</h2>
            <p>&nbsp&nbsp{{ $t('DevelopementIATexte') }}</p>
          </div>
          <ul class="list-unstyled d-flex flex-wrap list-two-col mb-0" data-aos="fade-up" data-aos-delay="50">
            <li>
              <div class="icon-box">
                <i class="fas fa-dollar-sign text-white bg-success rounded"></i>
              </div>
              <h3 class="h5">{{ $t('DIAiconetitre1') }}</h3>
              <p>&nbsp{{ $t('DIAiconetexte1') }}</p>
            </li>
            <li>
              <div class="icon-box">
                <i class="fas fa-headset text-white bg-dark rounded"></i>
              </div>
              <h3 class="h5">{{ $t('DIAiconetitre2') }}</h3>
              <p>&nbsp{{ $t('DIAconetexte2') }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 col-12">
        <div class="feature-img-holder p-5">
          <div class="bg-danger-soft p-5 rounded-custom position-relative d-block feature-img-wrap">
            <div class="position-relative">
              <img src="@/assets/img/screen/widget-15.png" class="img-fluid rounded-custom position-relative" alt="feature-image" data-aos="fade-up" data-aos-delay="50" />
            </div>
            <div class="position-absolute bg-dark-soft z--1 dot-mask dm-size-12 dm-wh-250 bottom-right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- Service 6 : Conseil et Stratégie -->

    <section id="consulting" class="image-feature ptb-120 bg-custom">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6 col-12">
            <div class="feature-img-holder p-5">
              <div class="bg-primary-soft p-5 rounded-custom position-relative d-block feature-img-wrap">
                <div class="position-relative">
                  <img src="@/assets/img/screen/widget-13.png" class="img-fluid rounded-custom position-relative" alt="feature-image" data-aos="fade-up" data-aos-delay="50" />
                </div>
                <div class="position-absolute bg-dark-soft z--1 dot-mask dm-size-12 dm-wh-250 bottom-left"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-12">
            <div class="feature-img-content">
              <div class="section-heading" data-aos="fade-up">
                <h2>{{ $t('conseil') }}</h2>
                <p>&nbsp&nbsp{{ $t('ConseilTexte') }}</p>
              </div>
              <ul class="list-unstyled d-flex flex-wrap list-two-col mt-5" data-aos="fade-up" data-aos-delay="100">
                <li>
                  <div class="icon-box">
                    <i class="fas fa-briefcase text-white bg-warning rounded"></i>
                  </div>
                  <h3 class="h5">{{ $t('CIconetitre1') }}</h3>
                  <p>&nbsp{{ $t('CIconetexte1') }}</p>
                </li>
                <li>
                  <div class="icon-box">
                    <i class="fas fa-truck text-white bg-info rounded"></i>
                  </div>
                  <h3 class="h5">{{ $t('CIconetitre2') }}</h3>
                  <p>&nbsp{{ $t('CIconetexte2') }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ImgContentThree",
};
</script>
