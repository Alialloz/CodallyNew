<template>
  <section class="masonary-blog-section ptb-120">
    <div class="container">
      <div class="row">
        <!-- Premier article -->
        <div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration="1000">
          <div class="single-article feature-article rounded-custom my-3">
            <router-link to="/news-details" class="article-img">
              <img src="@/assets/img/imgSite/Merci.png" alt="article" class="img-fluid" />
            </router-link>
            <div class="article-content p-4">
              <div class="article-category mb-4 d-block">
                <a href="javascript:;" class="d-inline-block text-dark badge bg-primary-soft">{{ $t('OurLatestNewMotsClé1') }} - {{ $t('OurLatestNewMotsClé9') }}</a>
              </div>
              <router-link to="/news-details">
                <h2 class="h5 article-title limit-2-line-text">{{ $t('newsTitre1') }}</h2>
              </router-link>
              <p class="limit-2-line-text">{{ $t('newsDes1') }}</p>
              <a href="javascript:;">
                <div class="d-flex align-items-center pt-4">
                  <div class="avatar"></div>
                  <div class="avatar-info">
                    <h6 class="mb-0 avatar-name">{{ $t('newEquipe1') }}</h6>
                    <span class="small fw-medium text-muted">{{ $t('newsDate1') }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Deuxième article -->
        <div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div class="single-article feature-article rounded-custom my-3">
            <router-link to="/news-details2" class="article-img">
              <img src="@/assets/img/imgSite/pionierIa.jpg" alt="article" class="img-fluid" />
            </router-link>
            <div class="article-content p-4">
              <div class="article-category mb-4 d-block">
                <a href="javascript:;" class="d-inline-block text-dark badge bg-danger-soft">{{ $t('OurLatestNewMotsClé3') }} - {{ $t('OurLatestNewMotsClé8') }}</a>
              </div>
              <router-link to="/news-details2">
                <h2 class="h5 article-title limit-2-line-text">{{ $t('newsTitre2') }}</h2>
              </router-link>
              <p class="limit-2-line-text">{{ $t('newsDes2') }}</p>
              <a href="javascript:;">
                <div class="d-flex align-items-center pt-4">
                  <div class="avatar">
                    <img src="/img/team/team-1.jpg" alt="avatar" width="40" class="img-fluid rounded-circle me-3" />
                  </div>
                  <div class="avatar-info">
                    <h6 class="mb-0 avatar-name">Nayeri Ali</h6>
                    <span class="small fw-medium text-muted">{{ $t('newsDate2') }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Troisième article -->
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <div class="single-article rounded-custom my-3">
            <router-link to="/news-details3" class="article-img">
              <img src="@/assets/img/imgSite/domotique.jpg" alt="article" class="img-fluid" />
            </router-link>
            <div class="article-content p-4">
              <div class="article-category mb-4 d-block">
                <a href="javascript:;" class="d-inline-block text-dark badge bg-warning-soft">{{ $t('OurLatestNewMotsClé2') }} - {{ $t('OurLatestNewMotsClé7') }}</a>
              </div>
              <router-link to="/news-details3">
                <h2 class="h5 article-title limit-2-line-text">{{ $t('newsTitre3') }}</h2>
              </router-link>
              <p class="limit-2-line-text">{{ $t('newsDes3') }}</p>
              <a href="javascript:;">
                <div class="d-flex align-items-center pt-4">
                  <div class="avatar">
                    <img src="/img/team/team-3.jpg" alt="avatar" width="40" class="img-fluid rounded-circle me-3" />
                  </div>
                  <div class="avatar-info">
                    <h6 class="mb-0 avatar-name">Essongue Oswald</h6>
                    <span class="small fw-medium text-muted">{{ $t('newsDate3') }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Quatrième article -->
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <div class="single-article rounded-custom my-3">
            <router-link to="/news-details4" class="article-img">
              <img src="@/assets/img/imgSite/th.png" alt="article" class="img-fluid" />
            </router-link>
            <div class="article-content p-4">
              <div class="article-category mb-4 d-block">
                <a href="javascript:;" class="d-inline-block text-dark badge bg-primary-soft">{{ $t('OurLatestNewMotsClé4') }}</a>
              </div>
              <router-link to="/news-details4">
                <h2 class="h5 article-title limit-2-line-text">{{ $t('newsTitre4') }}</h2>
              </router-link>
              <p class="limit-2-line-text">{{ $t('newsDes4') }}</p>
              <a href="javascript:;">
                <div class="d-flex align-items-center pt-4">
                  <div class="avatar">
                    <img src="/img/team/team-2.jpg" alt="avatar" width="40" class="img-fluid rounded-circle me-3" />
                  </div>
                  <div class="avatar-info">
                    <h6 class="mb-0 avatar-name">Chappe Morgan</h6>
                    <span class="small fw-medium text-muted">{{ $t('newsDate4') }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Cinquième article -->
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div class="single-article rounded-custom my-3">
            <router-link to="/news-details5" class="article-img">
              <img src="@/assets/img/imgSite/IAquotidien.png" alt="article" class="img-fluid" />
            </router-link>
            <div class="article-content p-4">
              <div class="article-category mb-4 d-block">
                <a href="javascript:;" class="d-inline-block text-dark badge bg-danger-soft">{{ $t('OurLatestNewMotsClé5') }}</a>
              </div>
              <router-link to="/news-details5">
                <h2 class="h5 article-title limit-2-line-text">{{ $t('newsTitre5') }}</h2>
              </router-link>
              <p class="limit-2-line-text">{{ $t('newsDes5') }}</p>
              <a href="javascript:;">
                <div class="d-flex align-items-center pt-4">
                  <div class="avatar">
                    <img src="/img/team/team-9.png" alt="avatar" width="40" class="img-fluid rounded-circle me-3" />
                  </div>
                  <div class="avatar-info">
                    <h6 class="mb-0 avatar-name">Blancon Julien</h6>
                    <span class="small fw-medium text-muted">{{ $t('newsDate5') }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    AOS.init(); 
  }
};
</script>
