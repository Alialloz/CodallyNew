<template>
  <footer class="footer-section">
    <!--footer top start-->
    <!--for light footer add .footer-light class and for dark footer add .bg-dark .text-white class-->
    <div
      class="footer-top ptb-120"
      :class="footerDark ? 'bg-gradient text-white' : 'footer-light'"
    >
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
            <div class="footer-single-col">
              <div class="footer-single-col mb-4">
                <img
                  src="@/assets/img/logo-white.png"
                  alt="logo"
                  class="img-fluid logo-white"
                />
                <img
                  src="@/assets/img/logo-color.png"
                  alt="logo"
                  class="img-fluid logo-color"
                />
              </div>
              <p>
                Our latest news, articles, and resources, we will sent to your
                inbox weekly.
              </p>

              <form
                class="newsletter-form position-relative d-block d-lg-flex d-md-flex"
              >
                <input
                  type="text"
                  class="input-newsletter form-control me-2"
                  placeholder="Enter your email"
                  name="email"
                  required=""
                  autocomplete="off"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  data-wait="Please wait..."
                  class="btn btn-primary mt-3 mt-lg-0 mt-md-0"
                />
              </form>
              <div class="ratting-wrap mt-4">
                <h6 class="mb-0">10/10 Overall rating</h6>
                <rating />
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
            <div class="row">
              <div class="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                <div class="footer-single-col">
                  <h3>Primary Pages</h3>
                  <ul class="list-unstyled footer-nav-list mb-lg-0">
                    <li>
                      <router-link to="/" class="text-decoration-none"
                        >Home</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/about-us" class="text-decoration-none"
                        >About Us</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/services" class="text-decoration-none"
                        >Services</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/career" class="text-decoration-none"
                        >Career</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/integrations"
                        class="text-decoration-none"
                        >Integrations</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/integration-single"
                        class="text-decoration-none"
                        >Integration Single</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                <div class="footer-single-col">
                  <h3>Pages</h3>
                  <ul class="list-unstyled footer-nav-list mb-lg-0">
                    <li>
                      <router-link to="/pricing" class="text-decoration-none"
                        >Pricing</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/news" class="text-decoration-none"
                        >News</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/news-details"
                        class="text-decoration-none"
                        >News Details</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/contact" class="text-decoration-none"
                        >Contact</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/career-single"
                        class="text-decoration-none"
                        >Career Single</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/service-single"
                        class="text-decoration-none"
                        >Services Single</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                <div class="footer-single-col">
                  <h3>Template</h3>
                  <ul class="list-unstyled footer-nav-list mb-lg-0">
                    <li>
                      <router-link to="/contact" class="text-decoration-none"
                        >Contact</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/support" class="text-decoration-none"
                        >Support</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/help-single"
                        class="text-decoration-none"
                        >Support Single</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/about-us" class="text-decoration-none"
                        >Our Team</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/login" class="text-decoration-none"
                        >User Login</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/career-single"
                        class="text-decoration-none"
                        >Career Single</router-link
                      >
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
    <div
      class="footer-bottom text-white py-4"
      :class="footerDark ? 'bg-dark bg-gradient' : 'footer-light'"
    >
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-7 col-lg-7">
            <div class="copyright-text">
              <p class="mb-lg-0 mb-md-0">
                &copy; 2022 Quiety Rights Reserved. Designed By
                <a href="https://themetags.com/" class="text-decoration-none"
                  >ThemeTags</a
                >
              </p>
            </div>
          </div>
          <div class="col-md-4 col-lg-4">
            <div class="footer-single-col text-start text-lg-end text-md-end">
              <ul class="list-unstyled list-inline footer-social-list mb-0">
                <li class="list-inline-item">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"><i class="fab fa-dribbble"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"><i class="fab fa-github"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--footer bottom end-->
  </footer>
</template>

<script>
import Rating from "../common/Rating.vue";
export default {
  components: { Rating },
  name: "Footer",
  props: {
    footerDark: String,
  },
};
</script>
