<template>
  <section class="up-coming-event up-coming-event-bg ptb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center mb-5">
            <span class="text-pink fw-bold">Coming Soon </span>
            <h2>Our Upcoming Events</h2>
            <p>
              Competently reintermediate future-proof e-markets via premium
              leadership skills. Energistically develop enterprise-wide systems
              with dynamic human capital.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="single-up-eve mb-4 mb-lg-0 rounded">
            <div class="position-relative">
              <img
                src="@/assets/img/event/ee-1.jpg"
                class="img-fluid"
                alt="Event"
              />
              <div class="ev-days">
                <h5 class="fw-bold text-pink m-0">03</h5>
                <span class="fw-bold">Days</span>
              </div>
            </div>
            <div class="px-4 pt-5 pb-4 event-meta">
              <div class="d-lg-flex mb-2">
                <div class="date pe-3 small text-muted">
                  <i class="far fa-alarm-clock pe-2"></i
                  ><span>Aug 5, 2022</span>
                </div>
                <div class="location small text-muted">
                  <i class="far fa-map-marker-alt pe-2"></i>
                  <span>Time Square , New York</span>
                </div>
              </div>
              <h5 class="mb-3"><a href="#">DigiMarCon East 2022</a></h5>
              <p>
                Effective alignments credibly empower backend total linkage via
                cost seize leveraged niche markets.
              </p>
              <router-link
                to="/news-details"
                class="read-more-link text-decoration-none"
                >Explore More <i class="far fa-arrow-right ms-2"></i
              ></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-up-eve mb-4 mb-lg-0 rounded">
            <div class="position-relative">
              <img
                src="@/assets/img/event/ee-2.jpg"
                class="img-fluid"
                alt="Event"
              />
              <div class="ev-days">
                <h5 class="fw-bold text-pink m-0">05</h5>
                <span class="fw-bold">Days</span>
              </div>
            </div>
            <div class="px-4 pt-5 pb-4 event-meta">
              <div class="d-lg-flex mb-2">
                <div class="date pe-3 small text-muted">
                  <i class="far fa-alarm-clock pe-2"></i
                  ><span>Aug 5, 2022</span>
                </div>
                <div class="location small text-muted">
                  <i class="far fa-map-marker-alt pe-2"></i>
                  <span>Time Square , New York</span>
                </div>
              </div>
              <h5 class="mb-3"><a href="#">Tokyo Digital Shake-Up</a></h5>
              <p>
                Dramatically seize leveraged niche markets total linkage via
                cost effective alignments empower backend.
              </p>
              <router-link
                to="/news-details"
                class="read-more-link text-decoration-none"
                >Explore More <i class="far fa-arrow-right ms-2"></i
              ></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-up-eve rounded">
            <div class="position-relative">
              <img
                src="@/assets/img/event/ee-3.jpg"
                class="img-fluid"
                alt="Event"
              />
              <div class="ev-days">
                <h5 class="fw-bold text-pink m-0">07</h5>
                <span class="fw-bold">Days</span>
              </div>
            </div>
            <div class="px-4 pt-5 pb-4 event-meta">
              <div class="d-lg-flex mb-2">
                <div class="date pe-3 small text-muted">
                  <i class="far fa-alarm-clock pe-2"></i
                  ><span>Aug 5, 2022</span>
                </div>
                <div class="location small text-muted">
                  <i class="far fa-map-marker-alt pe-2"></i>
                  <span>Time Square , New York</span>
                </div>
              </div>
              <h5 class="mb-3"><a href="#">Paris Digital Summit</a></h5>
              <p class="">
                Credibly empower backend total linkage via cost effective
                alignments. Dramatically seize niche markets.
              </p>
              <router-link
                to="/news-details"
                class="read-more-link text-decoration-none"
                >Explore More <i class="far fa-arrow-right ms-2"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-5">
        <router-link to="/news" class="btn btn-primary bg-dark-blue"
          >View More Events</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.up-coming-event-bg {
  background-image: url('@/assets/img/event/up-e-bg.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>
