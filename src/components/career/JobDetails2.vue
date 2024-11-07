<template>
  <section class="job-details ptb-120">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8 pe-lg-5">
          <div class="job-details-wrap">
            <h2>{{ $t('detailJob') }}</h2>
            <p>
              &nbsp;&nbsp;{{ $t('descriptionPoste2') }}
            </p>
            <div class="job-details-info mt-5">
              <h3 class="h5">{{ $t('responsabilitéDuJob') }}</h3>
              <ul class="content-list list-unstyled">
                <li>
                  {{ $t('Responsabilit1poste2') }}
                </li>
                <li>
                  {{ $t('Responsabilit2poste2') }}
                </li>
                <li>
                  {{ $t('Responsabilit3poste2') }}
                </li>
                <li>
                  {{ $t('Responsabilit4poste2') }}
                </li>
                <li>
                  {{ $t('Responsabilit5poste2') }}
                </li>
              </ul>
            </div>
            <div class="job-details-info mt-5">
              <h3 class="h5">{{ $t('necésitéduJob') }}</h3>
              <ul class="content-list list-unstyled">
                <li>
                  {{ $t('Exigence1Poste2') }}
                </li>
                <li>
                  {{ $t('Exigence2Poste2') }}
                </li>
                <li>
                  {{ $t('Exigence3Poste2') }}
                </li>
              </ul>
            </div>

            <div class="job-details-info mt-5">
              <h3 class="h5">{{ $t('expérieunceEt') }}</h3>
              <ul class="content-list list-unstyled">
                <li>
                  {{ $t('Compétence1poste2') }}
                </li>
                <li>
                  {{ $t('Compétence2poste2') }}
                </li>
                <li>
                  {{ $t('Compétence3poste2') }}
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
                  <span>Paris, FR</span>
                </div>
              </li>
              <li>
                <i class="far fa-user text-primary"></i>
                <div class="overview-item">
                  <h6 class="mb-0">{{ $t('nomJob') }}</h6>
                  <span>{{ $t('a') }}</span>
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
                  <span>$45</span>
                </div>
              </li>
              <li>
                <i class="far fa-wallet text-primary"></i>
                <div class="overview-item">
                  <h6 class="mb-0">{{ $t('salaire') }}</h6>
                  <span>$60k - $70k</span>
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
