<template>
  <section class="app-two-download-cta cta-bg ptb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-xl-6 col-md-10">
          <div class="section-heading text-center">
            <h2 class="text-white">Get The App Now and Start Learning Today</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-xl-7 col-12">
          <div class="action-btns mt-3">
            <ul class="list-unstyled text-center">
              <li class="d-inline-block me-2 mb-lg-0">
                <router-link
                  class="d-flex align-items-center text-decoration-none rounded"
                  to="/"
                  ><i class="fab fa-apple pe-2"></i
                  ><span
                    >Available on the <span>App Store</span></span
                  ></router-link
                >
              </li>
              <li class="d-inline-block me-2 mb-lg-0">
                <router-link
                  class="d-flex align-items-center text-decoration-none rounded"
                  to="/"
                  ><i class="fab fa-google-play pe-2"></i
                  ><span
                    >Available on the <span>Google Play</span></span
                  ></router-link
                >
              </li>
              <li class="d-inline-block mb-lg-0">
                <router-link
                  class="d-flex align-items-center text-decoration-none rounded"
                  to="/"
                  ><i class="fab fa-windows pe-2"></i
                  ><span
                    >Available on the <span>Google Play</span></span
                  ></router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
