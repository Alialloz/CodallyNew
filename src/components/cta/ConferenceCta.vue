<template>
  <section class="ev-cta bg-light-blue">
    <div class="container">
      <div class="rounded-2 eve-cta-bg ptb-100">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8">
            <div class="text-center">
              <span class="fw-bold text-pink mb-2 d-inline-block"
                >Let's do it hurry</span
              >
              <h2 class="text-white mb-4">
                Haven’t Booked Your Seat Yet? Get Ticket Now!
              </h2>
              <router-link to="/contact" class="btn btn-primary bg-pink">
                Purchase Now
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.eve-cta-bg {
  background-image: url('@/assets/img/ev-cta-bg.jpg');
  background-repeat: no-repeat;
  background-position: center right;
  background-size: cover;
}
</style>
