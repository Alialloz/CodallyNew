<template>
  <section class="ptb-120">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="about-left text-lg-center mb-32 mb-lg-0" data-aos="fade-right" data-aos-duration="1000">
            <img src="\src\assets\img\globeTerrestre.png" alt="Image d'un globe terrestre représentant divers connexion à travers le monde (codally équipe)" class="img-fluid" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-right" data-aos="fade-left" data-aos-duration="1000">
            <h4 class="text-primary h5 mb-3">{{ $t('whyChooseUs') }}</h4>
            <h2 class="mb-4" data-aos="fade-up" data-aos-duration="1000">{{ $t('experience') }}</h2>
            <p data-aos="fade-up" data-aos-duration="1200">
              &nbsp&nbsp{{ $t('experienceDesc') }}
            </p>
            <ul class="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
              <li class="py-1" data-aos="zoom-in" data-aos-duration="1300">
                <div class="d-flex about-icon-box align-items-center">
                  <div class="me-3">
                    <img src="@/assets/img/pie-chart.png" alt="" />
                  </div>
                  <div>
                    <h5>{{ $t('expertAroundWorld') }}</h5>
                  </div>
                </div>
              </li>
              <li class="py-1" data-aos="zoom-in" data-aos-duration="1400">
                <div class="d-flex about-icon-box align-items-center">
                  <div class="me-3">
                    <img src="@/assets/img/team.png" alt="" />
                  </div>
                  <div>
                    <h5>{{ $t('bestPractice') }}</h5>
                  </div>
                </div>
              </li>
            </ul>

            <ul class="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
              <li class="py-1" data-aos="fade-up" data-aos-duration="1500">
                <i class="fad fa-check-circle me-2 text-primary"></i>
                {{ $t('digitalConference') }}
              </li>
              <li class="py-1" data-aos="fade-up" data-aos-duration="1600">
                <i class="fad fa-check-circle me-2 text-primary"></i>
                {{ $t('greatSpeakers') }}
              </li>
              <li class="py-1" data-aos="fade-up" data-aos-duration="1700">
                <i class="fad fa-check-circle me-2 text-primary"></i>
                {{ $t('eventManagement') }}
              </li>
              <li class="py-1" data-aos="fade-up" data-aos-duration="1800">
                <i class="fad fa-check-circle me-2 text-primary"></i>
                {{ $t('funOnEvent') }}
              </li>
              <li class="py-1" data-aos="fade-up" data-aos-duration="1900">
                <i class="fad fa-check-circle me-2 text-primary"></i>
                {{ $t('salesCompliance') }}
              </li>
              <li class="py-1" data-aos="fade-up" data-aos-duration="2000">
                <i class="fad fa-check-circle me-2 text-primary"></i>
                {{ $t('showcasingSuccess') }}
              </li>
            </ul>
            <router-link
              to="/our-team"
              class="link-with-icon text-decoration-none mt-3 btn btn-primary"
              data-aos="fade-up" data-aos-duration="2100"
            >
              {{ $t('learnMore') }}
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>