<template>
  <footer class="footer-section">
    <!--footer top start-->
    <!--for light footer add .footer-light class and for dark footer add .bg-dark .text-white class-->
    <div class="footer-top ptb-120 bg" :class="footerDark ? 'bg-gradient text-white' : 'dark-bg'">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
            <div class="footer-single-col">
              <div class="footer-single-col mb-4">
                <img src="\src\assets\img\logoCodallyFondTransparent.png" alt="Logo de l'entreprise Codally"
                  class="img-fluid logo-white" />
                <img src="@/assets/img/logo-color.png" alt="logo" class="img-fluid logo-color" />
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
            <div class="row">
              <div class="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                <div class="footer-single-col">
                  <h3>{{ $t('important') }}</h3>
                  <ul class="list-unstyled footer-nav-list mb-lg-0">
                    <li>
                      <router-link to="/" class="text-decoration-none">{{ $t('Home') }}</router-link>
                    </li>
                    <li>
                      <router-link to="/services" class="text-decoration-none">Services</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                <div class="footer-single-col">
                  <h3>{{ $t('apropo') }}</h3>
                  <ul class="list-unstyled footer-nav-list mb-lg-0">
                    <li>
                      <router-link to="/our-projects" class="text-decoration-none">{{ $t('Project') }}</router-link>
                    <li>
                      <router-link to="/our-team" class="text-decoration-none">{{ $t('notreÉquipe') }}</router-link>
                    </li>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                <div class="footer-single-col">
                  <h3>{{ $t('autre') }}</h3>
                  <ul class="list-unstyled footer-nav-list mb-lg-0">
                    <li>
                      <router-link to="/contact-us" class="text-decoration-none">{{ $t('contact') }}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--footer top end-->

    <!--footer bottom start-->
    <div class="footer-bottom text-white py-4" :class="footerDark ? 'bg-dark bg-gradient' : 'footer-light'">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-7 col-lg-7">
            <div class="copyright-text">
              <p class="mb-lg-0 mb-md-0">
                &copy; 2022 Quiety Rights Reserved. Designed By
                <a href="https://themetags.com/" class="text-decoration-none">ThemeTags</a>
              </p>
            </div>
          </div>
          <div class="col-md-4 col-lg-4">
            <div class="footer-single-col text-start text-lg-end text-md-end">
              <ul class="list-unstyled list-inline footer-social-list mb-0">
                <li class="list-inline-item">
                  <a href="https://github.com/CodAlly-Agency"><i class="fab fa-github"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/people/CodAlly/61556088625053/?is_tour_dismissed=true"><i
                      class="fab fa-facebook-f"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="https://ca.linkedin.com/company/codally"><i class="fab fa-linkedin"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fab fa-instagram"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="https://x.com/CodAllyAgency"><i class="fab fa-twitter"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bouton pour remonter en haut de la page -->
    <button @click="scrollToTop" class="scroll-to-top-btn">↑</button>
  </footer>
</template>

<script>
import Rating from "../common/Rating.vue";
export default {
  components: { Rating },
  name: "Footer",
  props: {
    footerDark: {
      type: String,
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0d1d53;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.scroll-to-top-btn:hover {
  background-color: #0056b3;
}
</style>