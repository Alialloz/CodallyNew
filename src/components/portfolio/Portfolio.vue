<template>
  <section class="portfolio bg-light ptb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <div class="section-heading text-center">
            <h2>{{ $t('TitrePort') }}</h2>
            <p>
              {{ $t('PortDes') }}
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="tab-button mb-5">
            <ul
              class="nav nav-pills d-flex justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-all-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-all"
                  type="button"
                  role="tab"
                  aria-controls="pills-all"
                  aria-selected="true"
                >
                  All
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-design-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-design"
                  type="button"
                  role="tab"
                  aria-controls="pills-design"
                  aria-selected="false"
                >
                  Design
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-logo-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-logo"
                  type="button"
                  role="tab"
                  aria-controls="pills-logo"
                  aria-selected="false"
                >
                  Logo
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-web-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-web"
                  type="button"
                  role="tab"
                  aria-controls="pills-web"
                  aria-selected="false"
                >
                  Web
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div class="tab-content" id="pills-tabContent">
          <!-- All -->
          <div
            class="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
          >
            <div class="row">
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio1.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Website Design Project</h5>
                      <div class="categories">
                        <span>Design,</span>
                        <span>Web</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio2.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Leafery Branding</h5>
                      <div class="categories">
                        <span>Branding,</span>
                        <span>Logo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio3.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Information Architencure</h5>
                      <div class="categories">
                        <span>Branding,</span>
                        <span>Logo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio4.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">User Interface Design</h5>
                      <div class="categories">
                        <span>Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio5.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Information Architencure</h5>
                      <div class="categories">
                        <span>Branding,</span>
                        <span>Logo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio6.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Branding & Corporate Identity</h5>
                      <div class="categories">
                        <span>Branding,</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Branding -->
          <div
            class="tab-pane fade"
            id="pills-branding"
            role="tabpanel"
            aria-labelledby="pills-branding-tab"
          >
            <div class="row">
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio2.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">>Leafery Branding</h5>
                      <div class="categories">
                        <span>Branding,</span>
                        <span>Logo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio3.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Information Architencure</h5>
                      <div class="categories">
                        <span>Branding,</span>
                        <span>Logo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio4.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">User Interface Design</h5>
                      <div class="categories">
                        <span>Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Design -->
          <div
            class="tab-pane fade"
            id="pills-design"
            role="tabpanel"
            aria-labelledby="pills-design-tab"
          >
            <div class="row">
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio1.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Website Design Project</h5>
                      <div class="categories">
                        <span>Design,</span>
                        <span>Web</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio5.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Information Architencure</h5>
                      <div class="categories">
                        <span>Branding,</span>
                        <span>Logo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio6.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Branding & Corporate Identity</h5>
                      <div class="categories">
                        <span>Branding,</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Logo -->
          <div
            class="tab-pane fade"
            id="pills-logo"
            role="tabpanel"
            aria-labelledby="pills-logo-tab"
          >
            <div class="row">
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio1.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Website Design Project</h5>
                      <div class="categories">
                        <span>Design,</span>
                        <span>Web</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio2.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Leafery Branding</h5>
                      <div class="categories">
                        <span>Branding,</span>
                        <span>Logo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio3.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Information Architencure</h5>
                      <div class="categories">
                        <span>Branding,</span>
                        <span>Logo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Web -->
          <div
            class="tab-pane fade"
            id="pills-web"
            role="tabpanel"
            aria-labelledby="pills-web-tab"
          >
            <div class="row">
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio1.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Website Design Project</h5>
                      <div class="categories">
                        <span>Design,</span>
                        <span>Web</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio5.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Information Architencure</h5>
                      <div class="categories">
                        <span>Branding,</span>
                        <span>Logo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-portfolio-item mb-30">
                  <div class="portfolio-item-img">
                    <img
                      src="@/assets/img/portfolio/portfolio2.jpg"
                      alt="portfolio photo"
                      class="img-fluid"
                    />
                    <div class="portfolio-info">
                      <h5 class="text-white">Leafery Branding</h5>
                      <div class="categories">
                        <span>Branding,</span>
                        <span>Logo</span>
                      </div>
                    </div>
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
