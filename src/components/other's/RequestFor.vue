<template>
  <section class="sign-up-in-section bg-dark ptb-120 page-header">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-xl-5 col-lg-5 col-md-12 order-1 order-lg-0">
          <div class="testimonial-tab-slider-wrap mt-5">
            <h1 class="fw-bold text-white display-5">
              Start Your Project with Us
            </h1>
            <p>
              Whatever your goal or project size we will handel it utilize
              standards compliant. We hope you will be 100% satisfied.
            </p>
            <hr />
            <div
              class="tab-content testimonial-tab-content text-white-80"
              id="pills-tabContent"
            >
              <div
                class="tab-pane fade show active"
                id="testimonial-tab-1"
                role="tabpanel"
              >
                <blockquote class="blockquote">
                  <em
                    >"Globally actualize economically sound alignments before
                    tactical systems. Rapidiously actualize processes
                    technically sound infomediaries. Holisticly pursue team
                    building catalysts for change before team driven products.
                    "</em
                  >
                </blockquote>
                <div class="author-info mt-3">
                  <span class="h6">Veronica P. Byrd</span>
                  <span class="d-block small">Veterinary technician</span>
                </div>
              </div>
              <div class="tab-pane fade" id="testimonial-tab-2" role="tabpanel">
                <blockquote class="blockquote">
                  <em
                    >"Synergistically evisculate market positioning technology
                    vis-a-vis team driven innovation. Phosfluorescently morph
                    tactical communities for superior applications.
                    Distinctively pontificate resource-leveling infomediaries
                    and parallel models. "</em
                  >
                </blockquote>
                <div class="author-info mt-3">
                  <span class="h6">Raymond H. Gilbert</span>
                  <span class="d-block small">Forest fire inspector</span>
                </div>
              </div>
              <div class="tab-pane fade" id="testimonial-tab-3" role="tabpanel">
                <blockquote class="blockquote">
                  <em
                    >"Professionally myocardinate corporate e-commerce through
                    alternative functionalities. Compellingly matrix distributed
                    convergence with goal-oriented synergy. Professionally
                    embrace interactive opportunities through parallel
                    innovation. "</em
                  >
                </blockquote>
                <div class="author-info mt-3">
                  <span class="h6">Donna R. Book</span>
                  <span class="d-block small">Extractive engineer</span>
                </div>
              </div>
            </div>
            <ul
              class="nav nav-pills mb-0 testimonial-tab-indicator mt-5"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  data-bs-toggle="pill"
                  data-bs-target="#testimonial-tab-1"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  <img
                    src="@/assets/img/testimonial/1.jpg"
                    alt="testimonial"
                    width="55"
                    class="img-fluid rounded-circle"
                  />
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#testimonial-tab-2"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <img
                    src="@/assets/img/testimonial/4.jpg"
                    alt="testimonial"
                    width="55"
                    class="img-fluid rounded-circle"
                  />
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#testimonial-tab-3"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <img
                    src="@/assets/img/testimonial/6.jpg"
                    alt="testimonial"
                    width="55"
                    class="img-fluid rounded-circle"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-5 col-lg-7 col-md-12 order-0 order-lg-1">
          <ContForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContForm from "../contacts/ContForm.vue";
export default {
  components: { ContForm },
};
</script>
