<template>
  <section class="ptb-120 bg-dark">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-6">
          <div class="text-center">
            <h2>{{ $t('titre') }}</h2>
            <p>
              {{ $t('titreDes') }}
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
  <div class="col-lg-8">
    <div class="service-tabs">
      <ul
        class="nav nav-pills d-flex justify-content-center flex-wrap"
        id="pills-tab"
        role="tablist"
        style="gap: 10px;"
      >
        <li class="nav-item flex-grow-1" role="presentation" style="flex-basis: 30%;">
          <button
            class="nav-link active w-100"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <i class="fas fa-desktop me-2"></i>
            <span>{{ $t('designWeb') }}</span>
          </button>
        </li>
        <li class="nav-item flex-grow-1" role="presentation" style="flex-basis: 30%;">
          <button
            class="nav-link w-100"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            <i class="fas fa-tablet-alt me-2"></i>
            <span> {{ $t('developpementApplication') }} </span>
          </button>
        </li>
        <li class="nav-item flex-grow-1" role="presentation" style="flex-basis: 30%;">
          <button
            class="nav-link w-100"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            <i class="fas fa-vector-square me-2"></i>
            <span> {{ $t('DéveloppementFullStack') }} </span>
          </button>
        </li>
        <li class="nav-item flex-grow-1" role="presentation" style="flex-basis: 30%;">
          <button
            class="nav-link w-100"
            id="pills-custom-software-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-custom-software"
            type="button"
            role="tab"
            aria-controls="pills-custom-software"
            aria-selected="false"
          >
            <i class="fas fa-laptop-code me-2"></i>
            <span>{{ $t('logicielsPerso') }}</span>
          </button>
        </li>
        <li class="nav-item flex-grow-1" role="presentation" style="flex-basis: 30%;">
          <button
            class="nav-link w-100"
            id="pills-ai-solutions-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-ai-solutions"
            type="button"
            role="tab"
            aria-controls="pills-ai-solutions"
            aria-selected="false"
          >
            <i class="fas fa-brain me-2"></i>
            <span>{{ $t('solutionIA') }}</span>
          </button>
        </li>
        <li class="nav-item flex-grow-1" role="presentation" style="flex-basis: 30%;">
          <button
            class="nav-link w-100"
            id="pills-tech-consulting-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-tech-consulting"
            type="button"
            role="tab"
            aria-controls="pills-tech-consulting"
            aria-selected="false"
          >
            <i class="fas fa-comments me-2"></i>
            <span>{{ $t('conseil') }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
      <div class="row">
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div class="tab-content-wrapper pt-60">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="text-center mb-5 mb-lg-0">
                    <img
                      src="@/assets/img/tab_img1.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="tab-right-content">
                    <h2>
                      We are working with <br />
                      15 years exprience
                    </h2>
                    <p>
                      Continually network effective bandwidth whereas
                      goal-oriented schemas. Intrinsicly incentivize corporate
                      synergy with accurate task bricks-and-clicks leadership
                      skills.
                    </p>
                    <ul class="list-unstyled">
                      <li>
                        <i class="fas fa-check text-primary"></i>
                        <span>Digital Conferance</span>
                      </li>
                      <li>
                        <i class="fas fa-check text-primary"></i>
                        <span>Great Speak</span>
                      </li>
                      <li>
                        <i class="fas fa-check text-primary"></i>
                        <span>Event Mangement</span>
                      </li>
                    </ul>
                    <router-link
                      to="/about-us"
                      class="text-white link-with-icon text-decoration-none mt-4"
                    >
                      Know More About Us
                      <i class="fas fa-arrow-right"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div class="tab-content-wrapper pt-60">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="pe-5 mb-5 mb-lg-0">
                    <img
                      src="@/assets/img/tab_img2.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="tab-right-content">
                    <h2>Automation Power</h2>
                    <p>
                      Continually network effective bandwidth whereas
                      goal-oriented schemas. Intrinsicly incentivize corporate
                      synergy with accurate task bricks-and-clicks leadership
                      skills.
                    </p>
                    <ul class="list-unstyled">
                      <li>
                        <i class="fas fa-check text-primary"></i>
                        <span>Digital Conferance</span>
                      </li>
                      <li>
                        <i class="fas fa-check text-primary"></i>
                        <span>Great Speak</span>
                      </li>
                      <li>
                        <i class="fas fa-check text-primary"></i>
                        <span>Event Mangement</span>
                      </li>
                    </ul>
                    <router-link
                      to="/about-us"
                      class="text-white link-with-icon text-decoration-none mt-4"
                    >
                      Know More About Us
                      <i class="fas fa-arrow-right"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div class="tab-content-wrapper pt-60">
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="mb-5 mb-lg-0">
                    <img
                      src="@/assets/img/tab_img3.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="tab-right-content">
                    <h2>Advanced Technology</h2>
                    <p>
                      Continually network effective bandwidth whereas
                      goal-oriented schemas. Intrinsicly incentivize corporate
                      synergy with accurate task bricks-and-clicks leadership
                      skills.
                    </p>
                    <ul class="list-unstyled">
                      <li>
                        <i class="fas fa-check text-primary"></i>
                        <span>Digital Conferance</span>
                      </li>
                      <li>
                        <i class="fas fa-check text-primary"></i>
                        <span>Great Speak</span>
                      </li>
                      <li>
                        <i class="fas fa-check text-primary"></i>
                        <span>Event Mangement</span>
                      </li>
                    </ul>
                    <router-link
                      to="/about-us"
                      class="text-white link-with-icon text-decoration-none mt-4"
                    >
                      Know More About Us
                      <i class="fas fa-arrow-right"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
