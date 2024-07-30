<template>
  <section class="ev-counter pt-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center">
            <span class="fw-bold text-white">Conference Countdown</span>
            <h2 class="text-white mb-4">
              Never Miss Another Speaker Announcement
            </h2>
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="ev-count-down">
                  <div class="ev-cd-box">
                    <h4 class="h3 mb-0">36</h4>
                    <span class="small">Day</span>
                  </div>
                  <div class="ev-cd-box">
                    <h4 class="h3 mb-0">19</h4>
                    <span class="small">Hours</span>
                  </div>
                  <div class="ev-cd-box">
                    <h4 class="h3 mb-0">48</h4>
                    <span class="small">Minutes</span>
                  </div>
                  <div class="ev-cd-box">
                    <h4 class="h3 mb-0">16</h4>
                    <span class="small">Seconds</span>
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

<script>
export default {};
</script>

<style>
.ev-counter {
  background-image: url('@/assets/img/ev-counter-bg.jpg');
  background-repeat: no-repeat;
  background-position: center right;
  background-size: cover;
}
</style>
