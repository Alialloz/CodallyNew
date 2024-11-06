<template>
  <section class="blog-details ptb-120">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8 pe-lg-5">
          <div class="blog-details-wrap">
            <p class="text-indent">
              {{ $t('article3Intro') }}
            </p>
            <div class="blog-details-info mt-5">
              <h3 class="h5">{{ $t('article3objectfisIntro') }}</h3>
              <ul class="content-list list-unstyled">
                <li>
                  {{ $t('article3objectfis1') }}
                </li>
                <li>
                  {{ $t('article3objectfis2') }}
                </li>
                <li>
                  {{ $t('article3objectfis3') }}
                </li>
              </ul>
              <p class="text-indent">{{ $t('article3conclusion') }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="author-wrap text-center bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0"
          >
            <img
              src="/img/team/team-3.jpg"
              alt="author"
              width="120"
              class="img-fluid shadow-sm rounded-circle"
            />
            <div class="author-info my-4">
              <h5 class="mb-0">Essongue Oswald</h5>
              <span class="small">Full Stack Developer</span>
            </div>
            <p>
              {{ $t('article3desPoste') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.text-indent {
    text-indent: 1em; 
}
</style>

<script>
export default {};
</script>
