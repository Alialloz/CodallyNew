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
</template>

<script>
export default {
  name: "FetureThree",
};
</script>
