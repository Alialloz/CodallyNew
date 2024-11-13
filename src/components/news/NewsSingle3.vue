<template>
  <section class="blog-details ptb-120">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8 pe-lg-5">
          <div class="blog-details-wrap">
            <p class="text-indent">
              {{ $t('article3Intro') }}
            </p>
            <div class="image-paragraph-wrap">
              <p class="text-indent second-paragraph">
                {{ $t('article3Intro2') }}
              </p>
              <img
                src="@/assets/img/imgSite/Domotique.png"
                alt="image descriptive"
                class="blog-image"
              />
            </div>
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

.image-paragraph-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center; 
}

.second-paragraph {
  flex: 1;
  margin-top: 10px;
}

.blog-image {
  width: 40%; 
  height: auto; 
  display: inline-block; 
  margin-left: 20px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  border-radius: 8px; 
  transition: all 0.3s ease; 
}

.blog-image:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); 
  transform: scale(1.05); 
}
</style>

<script>
export default {};
</script>
