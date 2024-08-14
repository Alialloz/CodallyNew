<template>
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
</template>

<script>
export default {
  name: "FeatureTwo",
  props: {
    bgLight: String,
  },
};
</script>
