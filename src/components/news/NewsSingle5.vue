<template>
    <section class="blog-details ptb-120">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8 pe-lg-5">
          <div class="blog-details-wrap">
            <!-- Premier paragraphe avec alinéa -->
            <p class="text-indent">
              {{ $t('article5Intro') }}
            </p>
            
            <!-- Deuxième paragraphe avec alinéa -->
            <p class="text-indent">
              {{ $t('article5Intro2') }}
            </p>

            <!-- Citation -->
            <blockquote class="bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top">
              <p class="text-muted">
                <i class="fas fa-quote-left me-2 text-primary"></i>
                {{ $t('article5Citation') }}
                <i class="fas fa-quote-right ms-2 text-primary"></i>
                <span class="ms-3">McKinsey & Company - 2017 study</span>
              </p>
            </blockquote>

            <!-- Liste d'objectifs -->
            <div class="blog-details-info mt-5">
              <h3 class="h5">{{ $t('article4objectfisIntro') }}</h3>
              <ul class="content-list list-unstyled">
                <li>{{ $t('article5objectfis1') }}</li>
                <li>{{ $t('article5objectfis2') }}</li>
                <li>{{ $t('article5objectfis3') }}</li>
                <li>{{ $t('article5objectfis4') }}</li>
                <li>{{ $t('article5objectfis5') }}</li>
              </ul>

              <!-- Conclusion avec alinéa -->
              <p class="text-indent">
                {{ $t('article5conclusion') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Auteur -->
        <div class="col-lg-4">
          <div class="author-wrap text-center bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0">
            <img src="@/assets/img/team/team-9.png" alt="author" width="120" class="img-fluid shadow-sm rounded-circle"/>
            <div class="author-info my-4">
              <h5 class="mb-0">Blancon Julien</h5>
              <span class="small">Full Stack Developer</span>
            </div>
            <p>{{ $t('article5desPoste') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {};
</script>
