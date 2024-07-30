<template>
  <section
    class="about-header-section ptb-120 position-relative overflow-hidden bg-dark"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="section-heading-wrap d-flex justify-content-between z-5 position-relative"
          >
            <div class="about-content-left">
              <div class="about-info mb-5">
                <h1 class="fw-bold display-5">
                  Grow your Business & Customer Satisfaction with Quiety
                </h1>
                <p class="lead">
                  Dynamically disintermediate technically sound technologies
                  with compelling quality vectors error-free communities.
                </p>
                <router-link to="/career" class="btn btn-primary mt-4 me-3"
                  >Open Positions</router-link
                >
                <router-link to="/about-us" class="btn btn-soft-primary mt-4"
                  >Meet Our Team</router-link
                >
              </div>
              <img
                src="@/assets/img/about-img-1.jpg"
                alt="about"
                class="img-fluid about-img-first mt-5 rounded-custom shadow"
              />
            </div>
            <div class="about-content-right">
              <img
                src="@/assets/img/about-img-2.jpg"
                alt="about"
                class="img-fluid mb-5 rounded-custom shadow"
              />
              <img
                src="@/assets/img/about-img-3.jpg"
                alt="about"
                class="rounded-custom about-img-last shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"
    ></div>
  </section>
</template>
