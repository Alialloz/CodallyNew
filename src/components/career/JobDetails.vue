<template>
  <section class="job-details ptb-120">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8 pe-lg-5">
          <div class="job-details-wrap">
            <h2>{{ $t('detailJob') }}</h2>
            <p>
            &nbsp;&nbsp;{{ $t('descriptionPoste') }}
            </p>
            <div class="job-details-info mt-5">
              <h3 class="h5">{{ $t('responsabilitéDuJob') }}</h3>
              <ul class="content-list list-unstyled">
                <li>
                  {{ $t('Responsabilit1poste') }}
                </li>
                <li>
                  {{ $t('Responsabilit2poste') }}
                </li>
                <li>
                  {{ $t('Responsabilit3poste') }}
                </li>
                <li>
                  {{ $t('Responsabilit4poste') }}.
                </li>
                <li>
                  {{ $t('Responsabilit5poste') }}
                </li>
              </ul>
            </div>
            <div class="job-details-info mt-5">
              <h3 class="h5">{{ $t('necésitéduJob') }}</h3>
              <ul class="content-list list-unstyled">
                <li>
                  {{ $t('Exigence1Poste') }}
                </li>
                <li>
                  {{ $t('Exigence2Poste') }}
                </li>
                <li>
                  {{ $t('Exigence3Poste') }}
                </li>
              </ul>
            </div>

            <div class="job-details-info mt-5">
              <h3 class="h5">{{ $t('expérieunceEt') }}</h3>
              <ul class="content-list list-unstyled">
                <li>
                  {{ $t('Compétence1poste') }}
                </li>
                <li>
                  {{ $t('Compétence2poste') }}
                </li>
                <li>
                  {{ $t('Compétence3poste') }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="job-overview-wrap bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0"
          >
            <h5>{{ $t('résuméPoste') }}</h5>
            <ul class="job-overview-list list-unstyled mt-4">
              <li>
                <i class="far fa-map-marker-alt text-primary"></i>
                <div class="overview-item">
                  <h6 class="mb-0">{{ $t('localisation') }}</h6>
                  <span>Québec, QC</span>
                </div>
              </li>
              <li>
                <i class="far fa-user text-primary"></i>
                <div class="overview-item">
                  <h6 class="mb-0">{{ $t('nomJob') }}</h6>
                  <span>Projet manager</span>
                </div>
              </li>
              <li>
                <i class="far fa-clock text-primary"></i>
                <div class="overview-item">
                  <h6 class="mb-0">{{ $t('Volumehoraire') }}</h6>
                  <span>40h</span>
                </div>
              </li>
              <li>
                <i class="far fa-history text-primary"></i>
                <div class="overview-item">
                  <h6 class="mb-0">{{ $t('tauxhoraire') }}</h6>
                  <span>$30 - $50</span>
                </div>
              </li>
              <li>
                <i class="far fa-wallet text-primary"></i>
                <div class="overview-item">
                  <h6 class="mb-0">{{ $t('salaire') }}</h6>
                  <span>$50k - $70k {{ $t('payeEmploie') }}</span>
                </div>
              </li>
            </ul>
            <router-link to="/contact-us" class="btn btn-primary d-block mt-5"
              >{{ $t('postuleEmploi') }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
