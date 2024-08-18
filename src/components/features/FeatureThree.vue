<template>
    <section
    class="position-relative overflow-hidden ptb-120 bg-dark" style="background-image: url('src/assets/img/shop_bg.png'); background-size: cover; background-position: center;"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <h1 class="display-5 fw-bold">{{ $t('Slo') }}</h1>
          <p class="lead">
            &nbsp&nbsp{{ $t('SloDef') }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="feature-section ptb-120">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-md-6">
          <div
            class="image-wrap mb-5 mb-md-0 mb-lg-0 mb-xl-0"
            data-aos="fade-up"
          >
            <img
              src="@/assets/img/dashboard-img-2.png"
              alt="feature img"
              class="img-fluid shadow rounded-custom"
            />
          </div>
        </div>
        <div class="col-lg-5 col-md-6">
          <div
            class="feature-content-wrap"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <h2>{{ $t('WeblerTitre') }}</h2>
            <p>
              &nbsp;&nbsp;{{ $t(' ') }}
            </p>
            <ul class="list-unstyled mt-5">
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-primary rounded me-4">
                  <i class="fas fa-bezier-curve text-white"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône1Titre') }}</h3>
                  <p>
                    &nbsp;&nbsp;{{ $t('Icône1Des') }}
                  </p>
                </div>
              </li>
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-danger rounded me-4">
                  <i class="fas fa-fingerprint text-white"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône2Titre') }}</h3>
                  <p>
                    &nbsp;&nbsp;{{ $t('Icône2Des') }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="feature-section ptb-120"
  >
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-5 col-md-12">
          <div class="section-heading" data-aos="fade-up">
            <h2>{{ $t('TaskaiiITitre') }}</h2>
            <p>
              &nbsp;&nbsp;{{ $t('TaskaiiITitreDes') }}
            </p>
            <ul class="list-unstyled mt-5">
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-primary rounded me-4">
                  <i class="fas fa-briefcase text-white bg-warning rounded"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône3Titre') }}</h3>
                  <p>
                    &nbsp;&nbsp;{{ $t('Icône3Des') }}
                  </p>
                </div>
              </li>
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-danger rounded me-4">
                  <i class="fas fa-truck text-white bg-info rounded"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône4Titre') }}</h3>
                  <p>
                    &nbsp;&nbsp;{{ $t('Icône4Des') }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-7">
          <div
            class="feature-img-wrap position-relative d-flex flex-column align-items-end"
          >

            <img
              src="@/assets/img/feature-img3.jpg"
              alt="feature image"
              class="img-fluid rounded-custom"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="feature-section ptb-120">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-md-6">
          <div
            class="image-wrap mb-5 mb-md-0 mb-lg-0 mb-xl-0"
            data-aos="fade-up"
          >
            <img
              src="@/assets/img/dashboard-img2.png"
              alt="feature img"
              class="img-fluid shadow rounded-custom"
            />
          </div>
        </div>
        <div class="col-lg-5 col-md-6">
          <div
            class="feature-content-wrap text-dark"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <h2>{{ $t('ServiceClientèleTitre') }}</h2>
            <p>
              &nbsp;&nbsp;{{ $t('ServiceClientèleDes') }}
            </p>
            <ul class="list-unstyled mt-5">
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-primary rounded me-4">
                  <i class="fas fa-bezier-curve text-white"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône5Titre') }}</h3>
                  <p>
                    &nbsp;&nbsp;{{ $t('Icône5Des') }}
                  </p>
                </div>
              </li>
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-danger rounded me-4">
                  <i class="fas fa-fingerprint text-white"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône6Titre') }}</h3>
                  <p>
                    &nbsp;&nbsp;{{ $t('Icône6Des') }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="feature-section ptb-120">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-lg-5 col-md-12">
                <div class="section-heading text-dark" data-aos="fade-up">
                    <h2>{{ $t('GestionclientèleTitre') }}</h2>
                    <p>&nbsp;&nbsp;{{ $t('GestionclientèleTitreDes') }}</p>
                    <ul class="list-unstyled mt-5">
                        <li class="d-flex align-items-start mb-4">
                            <div class="icon-box bg-primary rounded me-4">
                                <i class="fas fa-users text-white bg-primary rounded"></i>
                            </div>
                            <div class="icon-content text-dark">
                                <h3 class="h5">{{ $t('Icône7Titre') }}</h3>
                                <p>
                                  &nbsp;&nbsp;{{ $t('Icône7Des') }}
                                </p>
                            </div>
                        </li>
                        <li class="d-flex align-items-start mb-4">
                            <div class="icon-box bg-danger rounded me-4">
                                <i class="fas fa-briefcase text-white bg-warning rounded"></i>
                            </div>
                            <div class="icon-content text-dark">
                                <h3 class="h5">{{ $t('Icône8Titre') }}</h3>
                                <p>
                                  &nbsp;&nbsp;{{ $t('Icône8Des') }}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6 col-md-7">
                <div class="feature-img-wrap position-relative d-flex flex-column align-items-end">
                    <img src="@/assets/img/feature-img3.jpg" alt="feature image"
                        class="img-fluid rounded-custom" />
                </div>
            </div>
        </div>
    </div>
</section>
  <section class="feature-section ptb-120">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-md-6">
          <div
            class="image-wrap mb-5 mb-md-0 mb-lg-0 mb-xl-0"
            data-aos="fade-up"
          >
            <img
              src="@/assets/img/dashboard-img.png"
              alt="feature img"
              class="img-fluid shadow rounded-custom"
            />
          </div>
        </div>
        <div class="col-lg-5 col-md-6">
          <div
            class="feature-content-wrap text-dark "
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <h2>{{ $t('ServiceFactureTitre') }}</h2>
            <p>
              &nbsp;&nbsp;{{ $t('ServiceFactureTitreDes') }}
            </p>
            <ul class="list-unstyled mt-5">
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-primary rounded me-4">
                  <i class="fas fa-bezier-curve text-white"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône9Titre') }}</h3>
                  <p>
                    &nbsp;&nbsp;{{ $t('Icône9Des') }}
                  </p>
                </div>
              </li>
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-danger rounded me-4">
                  <i class="fas fa-headset text-white bg-dark rounded"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône10Titre') }}</h3>
                  <p>
                    &nbsp;&nbsp;{{ $t('Icône10Des') }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FetureThree",
};
</script>
