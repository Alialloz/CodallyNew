<template>
  <section class="feature-section two-bg-dark-light ptb-120">
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
            class="feature-content-wrap"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <h2>{{ $t('WeblerTitre') }}</h2>
            <p>
              {{ $t('WeblerTitreDes') }}
            </p>
            <ul class="list-unstyled mt-5">
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-primary rounded me-4">
                  <i class="fas fa-bezier-curve text-white"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône1Titre') }}</h3>
                  <p>
                    {{ $t('Icône1Des') }}
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
                    {{ $t('Icône2Des') }}
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
    class="feature-section-two ptb-120"
    :class="[bgLight ? 'bg-light' : '']"
  >
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-5 col-md-12">
          <div class="section-heading" data-aos="fade-up">
            <h2>{{ $t('TaskaiiITitre') }}</h2>
            <p>
              {{ $t('TaskaiiITitreDes') }}
            </p>
            <ul class="list-unstyled mt-5">
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-primary rounded me-4">
                  <i class="fas fa-bezier-curve text-white"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône3Titre') }}</h3>
                  <p>
                    {{ $t('Icône3Des') }}
                  </p>
                </div>
              </li>
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-danger rounded me-4">
                  <i class="fas fa-fingerprint text-white"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône4Titre') }}</h3>
                  <p>
                    {{ $t('Icône4Des') }}
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
  <section class="feature-section two-bg-dark-light ptb-120">
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
            class="feature-content-wrap"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <h2>{{ $t('ServiceClientèleTitre') }}</h2>
            <p>
              {{ $t('ServiceClientèleDes') }}
            </p>
            <ul class="list-unstyled mt-5">
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-primary rounded me-4">
                  <i class="fas fa-bezier-curve text-white"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône5Titre') }}</h3>
                  <p>
                    {{ $t('Icône5Des') }}
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
                    {{ $t('Icône6Des') }}
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
      class="feature-section-two ptb-120"
      :class="[bgLight ? 'bg-light' : '']"
    >
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-5 col-md-12">
            <div class="section-heading" data-aos="fade-up">
              <h2>{{ $t('GestionclientèleTitre') }}</h2>
              <p>
                {{ $t('GestionclientèleTitreDes') }}
              </p>
              <ul class="list-unstyled mt-5">
                <li class="d-flex align-items-start mb-4">
                  <div class="icon-box bg-primary rounded me-4">
                    <i class="fas fa-bezier-curve text-white"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="h5">{{ $t('Icône7Titre') }}</h3>
                    <p>
                      {{ $t('Icône7Des') }}
                    </p>
                  </div>
                </li>
                <li class="d-flex align-items-start mb-4">
                  <div class="icon-box bg-danger rounded me-4">
                    <i class="fas fa-fingerprint text-white"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="h5">{{ $t('Icône8Titre') }}</h3>
                    <p>
                      {{ $t('Icône8Des') }}
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
  <section class="feature-section two-bg-dark-light ptb-120">
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
            class="feature-content-wrap"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <h2>{{ $t('ServiceFactureTitre') }}</h2>
            <p>
              {{ $t('ServiceFactureTitreDes') }}
            </p>
            <ul class="list-unstyled mt-5">
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-primary rounded me-4">
                  <i class="fas fa-bezier-curve text-white"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône9Titre') }}</h3>
                  <p>
                    {{ $t('Icône9Des') }}
                  </p>
                </div>
              </li>
              <li class="d-flex align-items-start mb-4">
                <div class="icon-box bg-danger rounded me-4">
                  <i class="fas fa-fingerprint text-white"></i>
                </div>
                <div class="icon-content">
                  <h3 class="h5">{{ $t('Icône10Titre') }}</h3>
                  <p>
                    {{ $t('Icône10Des') }}
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
