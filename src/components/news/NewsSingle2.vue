<template>
  <section class="blog-details ptb-120">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8 pe-lg-5">
          <div class="blog-details-wrap">
            <p class="text-indent">
              {{ $t('article2Intro') }}
            </p>
            <img
              src="@/assets/img/imgSite/ExpansionIa.png"
              alt="image descriptive"
              class="blog-image"
            />
            <!-- Nouveau texte en dessous de l'image -->
            <p class="image-description">
              {{ $t('Articleref2') }} 
              <a 
                href="https://fr.statista.com/infographie/8618/lintelligence-artificielle-secteur-en-plein-essor-en-europe/"
                target="_blank" 
                rel="noopener noreferrer">
                statista.fr
              </a>
            </p>
            <p class="text-indent">
              {{ $t('article2Intro2') }}
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

<style scoped>
.blog-image {
  width: 80%; 
  height: auto; 
  display: block; 
  margin: 30px 0; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  border-radius: 8px; 
  transition: all 0.3s ease; 
}
.blog-image:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); 
  transform: scale(1.05); 
}

.image-description {
  color: #808080; /* Gris */
  font-size: 14px; /* Taille de police plus petite */
  margin-top: 10px; /* Espacement au-dessus */
}

.image-description a {
  color: #0000EE; /* Couleur bleue pour le lien */
  text-decoration: none; /* Enlever le soulignement */
}

.image-description a:hover {
  text-decoration: underline; /* Soulignement au survol */
}
</style>

<script>
export default {};
</script>
