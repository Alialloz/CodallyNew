<template>
  <section class="blog-details ptb-120">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8 pe-lg-5">
          <div class="blog-details-wrap">
            <p class="text-indent">
              {{ $t('article2Intro') }}
            </p>
            <div class="blog-details-info mt-5">
              <h3 class="h5">{{ $t('article2objectfisIntro') }}</h3>
              <ul class="content-list list-unstyled">
                <li>
                  {{ $t('article2objectfis1') }}
                </li>
                <li>
                  {{ $t('article2objectfis2') }}
                </li>
                <li>
                  {{ $t('article2objectfis3') }}
                </li>
              </ul>
              <p class="text-indent"> {{ $t('article2conclusion') }} </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="author-wrap text-center bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0"
          >
            <img
              src="@/assets/img/team/team-1.jpg"
              alt="author"
              width="120"
              class="img-fluid shadow-sm rounded-circle"
            />
            <div class="author-info my-4">
              <h5 class="mb-0">Nayeri Ali</h5>
              <span class="small">CEO - Project Manager</span>
            </div>
            <p>
              {{ $t('article2desPoste') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
export default {};
</script>
