<template>
  <section>
    <div class="container">
      <div class="ev-schedule mt--50 ptb-100 rounded-top">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center ev-schedule-btn mb-5">
              <span class="text-pink fw-bold">Aug 23rd, 24th, & 25th 2022</span>
              <h2 class="mb-4">Our Conferenc Schedule</h2>
              <ul
                class="nav list-unstyled d-flex justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item mb-3 mb-lg-0" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-day1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-day1"
                    type="button"
                    role="tab"
                    aria-controls="pills-day1"
                    aria-selected="true"
                  >
                    Day-1
                  </button>
                </li>
                <li class="nav-item mb-3 mb-lg-0" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-day2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-day2"
                    type="button"
                    role="tab"
                    aria-controls="pills-day2"
                    aria-selected="false"
                  >
                    Day-2
                  </button>
                </li>
                <li class="nav-item mb-3 mb-lg-0" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-day3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-day3"
                    type="button"
                    role="tab"
                    aria-controls="pills-day3"
                    aria-selected="false"
                  >
                    Day-3
                  </button>
                </li>
                <li class="nav-item mb-3 mb-lg-0" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-day4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-day4"
                    type="button"
                    role="tab"
                    aria-controls="pills-day4"
                    aria-selected="false"
                  >
                    Day-4
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-day1"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div class="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                  <div class="row align-items-center">
                    <div class="col-lg-3">
                      <div
                        class="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0"
                      >
                        <img
                          src="@/assets/img/event/sp-1.png"
                          alt="speaker"
                          class="mb-3"
                        />
                        <h5 class="h6 m-0">Thorsten Gerber</h5>
                        <span class="small">Creative Director</span>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="single-ev px-lg-4">
                        <div class="d-md-flex mb-2">
                          <div class="date pe-4 small text-muted">
                            <i class="far fa-alarm-clock pe-2"></i
                            ><span>Aug 5, 2022</span>
                          </div>
                          <div class="location small text-muted">
                            <i class="far fa-map-marker-alt pe-2"></i>
                            <span>Time Square , New York</span>
                          </div>
                        </div>
                        <h5 class="mb-3 h6">Registration & Breakfast</h5>
                        <p class="mb-3">
                          Authoritatively orchestrate performance based human
                          capital for high standards in materials. Interactively
                          fabricate timely ideas after premier
                          opportunitiesObjectively based human capital
                          implement.
                        </p>
                        <router-link to="/about-us" class="link-with-icon"
                          >More Information<i class="far fa-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                  <div class="row align-items-center">
                    <div class="col-lg-3">
                      <div
                        class="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0"
                      >
                        <img
                          src="@/assets/img/event/sp-2.png"
                          alt="speaker"
                          class="mb-3"
                        />
                        <h5 class="h6 m-0">Phillipp Wannemaker</h5>
                        <span class="small">Creative Director</span>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="single-ev px-lg-4">
                        <div class="d-md-flex mb-2">
                          <div class="date pe-4 small text-muted">
                            <i class="far fa-alarm-clock pe-2"></i
                            ><span>Aug 5, 2022</span>
                          </div>
                          <div class="location small text-muted">
                            <i class="far fa-map-marker-alt pe-2"></i>
                            <span>Time Square , New York</span>
                          </div>
                        </div>
                        <h5 class="mb-3 h6">Speech: Marketing Matters!</h5>
                        <p class="mb-3">
                          Authoritatively orchestrate performance based human
                          capital for high standards in materials. Interactively
                          fabricate timely ideas after premier
                          opportunitiesObjectively based human capital
                          implement.
                        </p>
                        <router-link to="/about-us" class="link-with-icon"
                          >More Information<i class="far fa-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                  <div class="row align-items-center">
                    <div class="col-lg-3">
                      <div
                        class="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0"
                      >
                        <img
                          src="@/assets/img/event/sp-3.png"
                          alt="speaker"
                          class="mb-3"
                        />
                        <h5 class="h6 m-0">Sven Diederich</h5>
                        <span class="small">Creative Director</span>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="single-ev px-lg-4">
                        <div class="d-md-flex mb-2">
                          <div class="date pe-4 small text-muted">
                            <i class="far fa-alarm-clock pe-2"></i
                            ><span>Aug 5, 2022</span>
                          </div>
                          <div class="location small text-muted">
                            <i class="far fa-map-marker-alt pe-2"></i>
                            <span>Time Square , New York</span>
                          </div>
                        </div>
                        <h5 class="mb-3 h6">Speech: Cultures of Creativity</h5>
                        <p class="mb-3">
                          Authoritatively orchestrate performance based human
                          capital for high standards in materials. Interactively
                          fabricate timely ideas after premier
                          opportunitiesObjectively based human capital
                          implement.
                        </p>
                        <router-link to="/about-us" class="link-with-icon"
                          >More Information<i class="far fa-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-day2"
                role="tabpanel"
                aria-labelledby="pills-day2-tab"
              >
                <div class="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                  <div class="row align-items-center">
                    <div class="col-lg-3">
                      <div
                        class="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0"
                      >
                        <img
                          src="@/assets/img/event/sp-1.png"
                          alt="speaker"
                          class="mb-3"
                        />
                        <h5 class="h6 m-0">Thorsten Gerber</h5>
                        <span class="small">Creative Director</span>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="single-ev px-lg-4">
                        <div class="d-md-flex mb-2">
                          <div class="date pe-4 small text-muted">
                            <i class="far fa-alarm-clock pe-2"></i
                            ><span>Aug 5, 2022</span>
                          </div>
                          <div class="location small text-muted">
                            <i class="far fa-map-marker-alt pe-2"></i>
                            <span>Time Square , New York</span>
                          </div>
                        </div>
                        <h5 class="mb-3 h6">Registration & Breakfast</h5>
                        <p class="mb-3">
                          Authoritatively orchestrate performance based human
                          capital for high standards in materials. Interactively
                          fabricate timely ideas after premier
                          opportunitiesObjectively based human capital
                          implement.
                        </p>
                        <router-link to="/about-us" class="link-with-icon"
                          >More Information<i class="far fa-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                  <div class="row align-items-center">
                    <div class="col-lg-3">
                      <div
                        class="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0"
                      >
                        <img
                          src="@/assets/img/event/sp-2.png"
                          alt="speaker"
                          class="mb-3"
                        />
                        <h5 class="h6 m-0">Phillipp Wannemaker</h5>
                        <span class="small">Creative Director</span>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="single-ev px-lg-4">
                        <div class="d-md-flex mb-2">
                          <div class="date pe-4 small text-muted">
                            <i class="far fa-alarm-clock pe-2"></i
                            ><span>Aug 5, 2022</span>
                          </div>
                          <div class="location small text-muted">
                            <i class="far fa-map-marker-alt pe-2"></i>
                            <span>Time Square , New York</span>
                          </div>
                        </div>
                        <h5 class="mb-3 h6">Speech: Marketing Matters!</h5>
                        <p class="mb-3">
                          Authoritatively orchestrate performance based human
                          capital for high standards in materials. Interactively
                          fabricate timely ideas after premier
                          opportunitiesObjectively based human capital
                          implement.
                        </p>
                        <router-link to="/about-us" class="link-with-icon"
                          >More Information<i class="far fa-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                  <div class="row align-items-center">
                    <div class="col-lg-3">
                      <div
                        class="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0"
                      >
                        <img
                          src="@/assets/img/event/sp-3.png"
                          alt="speaker"
                          class="mb-3"
                        />
                        <h5 class="h6 m-0">Sven Diederich</h5>
                        <span class="small">Creative Director</span>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="single-ev px-lg-4">
                        <div class="d-md-flex mb-2">
                          <div class="date pe-4 small text-muted">
                            <i class="far fa-alarm-clock pe-2"></i
                            ><span>Aug 5, 2022</span>
                          </div>
                          <div class="location small text-muted">
                            <i class="far fa-map-marker-alt pe-2"></i>
                            <span>Time Square , New York</span>
                          </div>
                        </div>
                        <h5 class="mb-3 h6">Speech: Cultures of Creativity</h5>
                        <p class="mb-3">
                          Authoritatively orchestrate performance based human
                          capital for high standards in materials. Interactively
                          fabricate timely ideas after premier
                          opportunitiesObjectively based human capital
                          implement.
                        </p>
                        <router-link to="/about-us" class="link-with-icon"
                          >More Information<i class="far fa-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-day3"
                role="tabpanel"
                aria-labelledby="pills-day3-tab"
              >
                <div class="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                  <div class="row align-items-center">
                    <div class="col-lg-3">
                      <div
                        class="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0"
                      >
                        <img
                          src="@/assets/img/event/sp-1.png"
                          alt="speaker"
                          class="mb-3"
                        />
                        <h5 class="h6 m-0">Thorsten Gerber</h5>
                        <span class="small">Creative Director</span>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="single-ev px-lg-4">
                        <div class="d-md-flex mb-2">
                          <div class="date pe-4 small text-muted">
                            <i class="far fa-alarm-clock pe-2"></i
                            ><span>Aug 5, 2022</span>
                          </div>
                          <div class="location small text-muted">
                            <i class="far fa-map-marker-alt pe-2"></i>
                            <span>Time Square , New York</span>
                          </div>
                        </div>
                        <h5 class="mb-3 h6">Registration & Breakfast</h5>
                        <p class="mb-3">
                          Authoritatively orchestrate performance based human
                          capital for high standards in materials. Interactively
                          fabricate timely ideas after premier
                          opportunitiesObjectively based human capital
                          implement.
                        </p>
                        <router-link to="/about-us" class="link-with-icon"
                          >More Information<i class="far fa-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                  <div class="row align-items-center">
                    <div class="col-lg-3">
                      <div
                        class="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0"
                      >
                        <img
                          src="@/assets/img/event/sp-2.png"
                          alt="speaker"
                          class="mb-3"
                        />
                        <h5 class="h6 m-0">Phillipp Wannemaker</h5>
                        <span class="small">Creative Director</span>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="single-ev px-lg-4">
                        <div class="d-md-flex mb-2">
                          <div class="date pe-4 small text-muted">
                            <i class="far fa-alarm-clock pe-2"></i
                            ><span>Aug 5, 2022</span>
                          </div>
                          <div class="location small text-muted">
                            <i class="far fa-map-marker-alt pe-2"></i>
                            <span>Time Square , New York</span>
                          </div>
                        </div>
                        <h5 class="mb-3 h6">Speech: Marketing Matters!</h5>
                        <p class="mb-3">
                          Authoritatively orchestrate performance based human
                          capital for high standards in materials. Interactively
                          fabricate timely ideas after premier
                          opportunitiesObjectively based human capital
                          implement.
                        </p>
                        <router-link to="/about-us" class="link-with-icon"
                          >More Information<i class="far fa-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                  <div class="row align-items-center">
                    <div class="col-lg-3">
                      <div
                        class="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0"
                      >
                        <img
                          src="@/assets/img/event/sp-3.png"
                          alt="speaker"
                          class="mb-3"
                        />
                        <h5 class="h6 m-0">Sven Diederich</h5>
                        <span class="small">Creative Director</span>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="single-ev px-lg-4">
                        <div class="d-md-flex mb-2">
                          <div class="date pe-4 small text-muted">
                            <i class="far fa-alarm-clock pe-2"></i
                            ><span>Aug 5, 2022</span>
                          </div>
                          <div class="location small text-muted">
                            <i class="far fa-map-marker-alt pe-2"></i>
                            <span>Time Square , New York</span>
                          </div>
                        </div>
                        <h5 class="mb-3 h6">Speech: Cultures of Creativity</h5>
                        <p class="mb-3">
                          Authoritatively orchestrate performance based human
                          capital for high standards in materials. Interactively
                          fabricate timely ideas after premier
                          opportunitiesObjectively based human capital
                          implement.
                        </p>
                        <router-link to="/about-us" class="link-with-icon"
                          >More Information<i class="far fa-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-day4"
                role="tabpanel"
                aria-labelledby="pills-day4-tab"
              >
                <div class="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                  <div class="row align-items-center">
                    <div class="col-lg-3">
                      <div
                        class="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0"
                      >
                        <img
                          src="@/assets/img/event/sp-1.png"
                          alt="speaker"
                          class="mb-3"
                        />
                        <h5 class="h6 m-0">Thorsten Gerber</h5>
                        <span class="small">Creative Director</span>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="single-ev px-lg-4">
                        <div class="d-md-flex mb-2">
                          <div class="date pe-4 small text-muted">
                            <i class="far fa-alarm-clock pe-2"></i
                            ><span>Aug 5, 2022</span>
                          </div>
                          <div class="location small text-muted">
                            <i class="far fa-map-marker-alt pe-2"></i>
                            <span>Time Square , New York</span>
                          </div>
                        </div>
                        <h5 class="mb-3 h6">Registration & Breakfast</h5>
                        <p class="mb-3">
                          Authoritatively orchestrate performance based human
                          capital for high standards in materials. Interactively
                          fabricate timely ideas after premier
                          opportunitiesObjectively based human capital
                          implement.
                        </p>
                        <router-link to="/about-us" class="link-with-icon"
                          >More Information<i class="far fa-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                  <div class="row align-items-center">
                    <div class="col-lg-3">
                      <div
                        class="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0"
                      >
                        <img
                          src="@/assets/img/event/sp-2.png"
                          alt="speaker"
                          class="mb-3"
                        />
                        <h5 class="h6 m-0">Phillipp Wannemaker</h5>
                        <span class="small">Creative Director</span>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="single-ev px-lg-4">
                        <div class="d-md-flex mb-2">
                          <div class="date pe-4 small text-muted">
                            <i class="far fa-alarm-clock pe-2"></i
                            ><span>Aug 5, 2022</span>
                          </div>
                          <div class="location small text-muted">
                            <i class="far fa-map-marker-alt pe-2"></i>
                            <span>Time Square , New York</span>
                          </div>
                        </div>
                        <h5 class="mb-3 h6">Speech: Marketing Matters!</h5>
                        <p class="mb-3">
                          Authoritatively orchestrate performance based human
                          capital for high standards in materials. Interactively
                          fabricate timely ideas after premier
                          opportunitiesObjectively based human capital
                          implement.
                        </p>
                        <router-link to="/about-us" class="link-with-icon"
                          >More Information<i class="far fa-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-eve-session py-5 rounded px-4 px-lg-0 mb-4">
                  <div class="row align-items-center">
                    <div class="col-lg-3">
                      <div
                        class="text-lg-center speaker-info mb-3 mb-lg-0 py-3 md-py-0"
                      >
                        <img
                          src="@/assets/img/event/sp-3.png"
                          alt="speaker"
                          class="mb-3"
                        />
                        <h5 class="h6 m-0">Sven Diederich</h5>
                        <span class="small">Creative Director</span>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <div class="single-ev px-lg-4">
                        <div class="d-md-flex mb-2">
                          <div class="date pe-4 small text-muted">
                            <i class="far fa-alarm-clock pe-2"></i
                            ><span>Aug 5, 2022</span>
                          </div>
                          <div class="location small text-muted">
                            <i class="far fa-map-marker-alt pe-2"></i>
                            <span>Time Square , New York</span>
                          </div>
                        </div>
                        <h5 class="mb-3 h6">Speech: Cultures of Creativity</h5>
                        <p class="mb-3">
                          Authoritatively orchestrate performance based human
                          capital for high standards in materials. Interactively
                          fabricate timely ideas after premier
                          opportunitiesObjectively based human capital
                          implement.
                        </p>
                        <router-link to="/about-us" class="link-with-icon"
                          >More Information<i class="far fa-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-3">
          <router-link
            to="/request-for-demo"
            class="btn btn-primary bg-dark-blue"
            >Download Brochure</router-link
          >
        </div>
        <ul class="circel-shape list-unstyled d-none d-lg-block mb-0">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
