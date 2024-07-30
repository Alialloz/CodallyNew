<template>
  <section class="event-about event-about-bg">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="ev-ab-img position-relative ms-0 ms-lg-5">
            <img
              src="@/assets/img/event/about-img-1.png"
              class="img-fluid z-5 position-relative"
              alt="men"
            />
            <img
              src="@/assets/img/event/about-img-2.png"
              class="img-fluid ev-about-img-one z-5"
              alt="men"
            />
            <ul class="list-unstyled">
              <li>
                <h4>Global Conference <span class="text-pink">2022</span></h4>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="p-3">
            <span class="text-pink fw-bold mb-3 d-inline-block"
              >About The Quiety</span
            >
            <h2 class="mb-4">The Digital Product Quiety is back</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Aenean
              faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
              sem vitae risus tristique synergy and ethical catalysts for
              change.
            </p>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div>
              <router-link
                to="/signup"
                class="btn btn-primary bg-pink me-3 mb-2 mb-lg-0 mb-md-0"
                >Register Now</router-link
              >
              <router-link to="request-for-demo" class="btn border-pink"
                >Download PDF</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <ul class="elements list-unstyled d-none d-xl-block">
        <li>
          <img src="@/assets/img/event/star.png" alt="star" />
        </li>
        <li>
          <img
            src="@/assets/img/event/human-shape.png"
            class="img-fluid"
            alt="human"
          />
        </li>
        <li></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.event-about-bg {
  background: url('@/assets/img/event/about-bg.jpg');
  background-repeat: no-repeat;
  background-position: center right;
  background-size: cover;
}
</style>
