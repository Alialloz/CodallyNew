<template>
  <section
    class="page-header position-relative overflow-hidden ptb-120 bg-dark"
    style="
      background: url('@/assets/img/page-header-bg.svg') no-repeat bottom left;
    "
  >
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-8 col-12">
          <div class="company-info-wrap">
            <div
              class="company-logo p-4 bg-white shadow rounded-custom me-4 mt-2"
            >
              <div class="logo">
                <img
                  src="@/assets/img/imgSite/logoCouleurUni.png"
                  alt="company logo"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="company-overview">
              <h1 class="display-5 fw-bold">Projet manager</h1>

              <h6>{{ $t('horaireEmploie') }}</h6>
              <ul class="list-unstyled list-inline mb-0 mt-3">
                <li class="list-inline-item me-4">
                  <i class="far fa-house-building me-2"></i> Montreal
                
                </li>

                <li class="list-inline-item me-4">
                  <i class="far fa-map-marker-alt me-2"></i>Québec QC
                
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-12">
          <div class="annual-salary-wrap rounded-custom">
            <h6>{{ $t('salaireAnnuel') }}</h6>
            <span class="display-6 fw-semi-bold text-dark mb-0"
              >$50k - $70k</span
            >
            <h6>{{ $t('payeEmploie') }}</h6>
          </div>
        </div>
      </div>

      <div
        class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"
      ></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
