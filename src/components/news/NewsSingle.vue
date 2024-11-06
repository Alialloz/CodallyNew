<template>
  <section class="blog-details ptb-120">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8 pe-lg-5">
          <div class="blog-details-wrap">
            <p class="text-indent">
              {{ $t('article1Intro') }}
            </p>
            <div class="blog-details-info mt-5">
              <h3 class="h5"> {{ $t('article1objectfisIntro') }}</h3>
              <ul class="content-list list-unstyled">
                <li>
                  {{ $t('article1objectfis1') }}
                </li>
                <li>
                  {{ $t('article1objectfis2') }}
                </li>
                <li>
                  {{ $t('article1objectfis3') }}
                </li>
              </ul>
              <p class="text-indent">
                {{ $t('article1conclusion') }}
            </p>
            <blockquote class="bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top">
              <p class="text-muted">
                <i class="fas fa-quote-left me-2 text-primary"></i>
                {{ $t('article1Citation') }}
                <i class="fas fa-quote-right ms-2 text-primary"></i>
                <span class="ms-3">Steve Jobs (1955 - 2011)</span>
              </p>
            </blockquote>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div
            class="author-wrap text-center bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0"
          >
          <img
            src="@/assets/img/banner_image.png"
            alt="author"
            width="120"
            class="img-fluid shadow-sm rounded-circle"
          />
            <div class="author-info my-4">
              <h5 class="mb-0">{{ $t('article1NomPrenom') }}</h5>
            </div>
            <p>
              {{ $t('article1desPoste') }}
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
