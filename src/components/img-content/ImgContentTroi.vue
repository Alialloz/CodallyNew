<template>
  <div>
    <section class="image-feature ptb-120">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6 col-12">
            <div class="feature-img-holder p-5">
              <div class="p-5 bg-danger-soft position-relative rounded-custom d-block feature-img-wrap">
                <div class="position-relative">
                  <img src="@/assets/img/screen/widget-5.png" class="img-fluid rounded-custom position-relative" alt="feature-image" data-aos="fade-up" data-aos-delay="50" />
                  <img src="@/assets/img/screen/widget-3.png" class="img-fluid rounded-custom shadow position-absolute bottom--100 right--100 hide-medium" alt="feature-image" data-aos="fade-up" data-aos-delay="100" />
                </div>
                <div class="position-absolute bg-dark-soft z--1 dot-mask dm-size-12 dm-wh-250 top-left"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-12">
            <div class="feature-img-content">
              <div class="section-heading" data-aos="fade-up">
                <h2>{{ $t('logicielsPerso') }}</h2>
                <p>{{ $t('DevelopementLogicielPersoTexte') }}</p>
              </div>
              <ul class="list-unstyled d-flex flex-wrap list-two-col mb-0" data-aos="fade-up" data-aos-delay="50">
                <li>
                  <div class="icon-box">
                    <i class="fas fa-users text-white bg-primary rounded"></i>
                  </div>
                  <h3 class="h5">{{ $t('DLPiconetitre1') }}</h3>
                  <p>{{ $t('DLPiconetexte1') }}</p>
                </li>
                <li>
                  <div class="icon-box">
                    <i class="fas fa-fingerprint text-white bg-danger rounded"></i>
                  </div>
                  <h3 class="h5">{{ $t('DLPiconetitre2') }}</h3>
                  <p>{{ $t('DLPconetexte2') }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="image-feature ptb-60">
  <div class="container">
    <div class="row justify-content-between align-items-center">
      <div class="col-lg-5 col-12">
        <div class="feature-img-content">
          <div class="section-heading" data-aos="fade-up">
            <h2>{{ $t('solutionIA') }}</h2>
            <p>{{ $t('DevelopementIATexte') }}</p>
          </div>
          <ul class="list-unstyled d-flex flex-wrap list-two-col mb-0" data-aos="fade-up" data-aos-delay="50">
            <li>
              <div class="icon-box">
                <i class="fas fa-dollar-sign text-white bg-success rounded"></i>
              </div>
              <h3 class="h5">{{ $t('DIAiconetitre1') }}</h3>
              <p>{{ $t('DIAiconetexte1') }}</p>
            </li>
            <li>
              <div class="icon-box">
                <i class="fas fa-headset text-white bg-dark rounded"></i>
              </div>
              <h3 class="h5">{{ $t('DIAiconetitre2') }}</h3>
              <p>{{ $t('DIAconetexte2') }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 col-12">
        <div class="feature-img-holder p-5">
          <div class="bg-primary-soft p-5 rounded-custom position-relative d-block feature-img-wrap">
            <div class="position-relative">
              <img src="@/assets/img/screen/widget-8.png" class="img-fluid rounded-custom position-relative" alt="feature-image" data-aos="fade-up" data-aos-delay="50" />
              <img src="@/assets/img/screen/widget-6.png" class="img-fluid rounded-custom shadow position-absolute top--100 left--100 hide-medium" alt="feature-image" data-aos="fade-up" data-aos-delay="100" />
            </div>
            <div class="position-absolute bg-dark-soft z--1 dot-mask dm-size-12 dm-wh-250 bottom-right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <section class="image-feature ptb-120">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6 col-12">
            <div class="feature-img-holder p-5">
              <div class="bg-danger-soft p-5 rounded-custom position-relative d-block feature-img-wrap">
                <div class="position-relative">
                  <img src="@/assets/img/screen/widget-9.png" class="img-fluid rounded-custom position-relative" alt="feature-image" data-aos="fade-up" data-aos-delay="50" />
                  <img src="@/assets/img/screen/widget-10.png" class="img-fluid rounded-custom shadow position-absolute top--100 right--100 hide-medium" alt="feature-image" data-aos="fade-up" data-aos-delay="100" />
                </div>
                <div class="position-absolute bg-dark-soft z--1 dot-mask dm-size-12 dm-wh-250 bottom-left"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-12">
            <div class="feature-img-content">
              <div class="section-heading" data-aos="fade-up">
                <h2>{{ $t('conseil') }}</h2>
                <p>{{ $t('ConseilTexte') }}</p>
              </div>
              <ul class="list-unstyled d-flex flex-wrap list-two-col mt-5" data-aos="fade-up" data-aos-delay="100">
                <li>
                  <div class="icon-box">
                    <i class="fas fa-briefcase text-white bg-warning rounded"></i>
                  </div>
                  <h3 class="h5">{{ $t('CIconetitre1') }}</h3>
                  <p>{{ $t('CIconetexte1') }}</p>
                </li>
                <li>
                  <div class="icon-box">
                    <i class="fas fa-truck text-white bg-info rounded"></i>
                  </div>
                  <h3 class="h5">{{ $t('CIconetitre2') }}</h3>
                  <p>{{ $t('CIconetexte2') }}</p>
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
  name: "ImgContentTroi",
};
</script>