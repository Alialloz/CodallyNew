<template>
  <section class="ev-price ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center mb-5">
            <span class="fw-bold text-dark-blue">Ticket</span>
            <h2>Explore Flexible Pricing Plans</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="ev-single-price text-center mb-4 mb-lg-0">
            <div class="ev-price-header text-center pb-4">
              <h5>Single day pass</h5>
              <h4>$180</h4>
            </div>
            <ul class="m-0 text-center list-unstyled mt-4">
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>One catered lunch
              </li>
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>Afternoon snacks
              </li>
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>Fun swag
              </li>
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>Entrance Afterparty
              </li>
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>Afternoon snacks
              </li>
            </ul>
            <router-link to="/request-for-demo" class="ev-price-btn mt-4">
              Purchase Now</router-link
            >
            <ul class="list-unstyled ev-price-dot mb-0">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="ev-single-price text-center mb-4 mb-lg-0">
            <div class="ev-price-header text-center pb-4">
              <h5>Day Plan</h5>
              <h4>$250</h4>
            </div>
            <ul class="m-0 text-center list-unstyled mt-4">
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>One catered lunch
              </li>
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>Afternoon snacks
              </li>
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>Fun swag
              </li>
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>Entrance Afterparty
              </li>
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>Afternoon snacks
              </li>
            </ul>
            <router-link to="/request-for-demo" class="ev-price-btn mt-4">
              Purchase Now</router-link
            >
            <ul class="list-unstyled ev-price-dot mb-0">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="ev-single-price text-center mb-4 mb-lg-0">
            <div class="ev-price-header text-center pb-4">
              <h5>VIP Seat with Food</h5>
              <h4>$180</h4>
            </div>
            <ul class="m-0 text-center list-unstyled mt-4">
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>One catered lunch
              </li>
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>Afternoon snacks
              </li>
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>Fun swag
              </li>
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>Entrance Afterparty
              </li>
              <li class="py-2">
                <i class="fas fa-check-circle me-2"></i>Afternoon snacks
              </li>
            </ul>
            <router-link to="/request-for-demo" class="ev-price-btn mt-4">
              Purchase Now</router-link
            >
            <ul class="list-unstyled ev-price-dot mb-0">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <p class="text-center mt-4 text-muted fs-sm">
        All prices exclude 25% VAT. For more details, view our
        <router-link to="/about-us" class="text-dark"
          ><b>Terms & Conditions</b></router-link
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.ev-price {
  background: url('@/assets/img/event/price-bgg.jpg');
  background-repeat: no-repeat;
  background-position: center right;
  background-size: cover;
}
</style>
