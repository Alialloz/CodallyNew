<template>
  <section class="home-blog-section pt-60 pb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-12">
          <div class="section-heading text-center">
            <h4 class="text-primary h5">Recent Post</h4>
            <h2>Read our News & Articles</h2>
            <p>
              Assertively maximize cost effective methods of iterate team driven
              manufactured products through equity invested via customized
              benefits.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div ref="cyberBlog" class="cyberBlog swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="cyber-single-article mb-4 mb-lg-0 p-3 border">
                <a to="news-details" class="cyber-article-img">
                  <img
                    src="@/assets/img/blog/c-blog-1.jpg"
                    alt="article"
                    class="img-fluid"
                  />
                </a>
                <div class="article-content">
                  <div class="article-info d-flex py-3">
                    <div class="pe-3">
                      <i class="fas fa-user pe-2"></i>
                      <span class="text-secondary">Admin</span>
                    </div>
                    <div>
                      <i class="fas fa-calendar pe-2"></i>
                      <span class="text-secondary">October 13, 2022</span>
                    </div>
                  </div>
                  <router-link to="/news-details" class="text-decoration-none">
                    <h2 class="h5 article-title limit-2-line-text">
                      The Steps to GainingPrivileged Access Security
                    </h2>
                  </router-link>
                  <router-link
                    to="/news-details"
                    class="link-with-icon text-decoration-none"
                    >Read more <i class="far fa-arrow-right"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cyber-single-article mb-4 mb-lg-0 p-3 border">
                <router-link to="/news-details" class="cyber-article-img">
                  <img
                    src="@/assets/img/blog/c-blog-2.jpg"
                    alt="article"
                    class="img-fluid"
                  />
                </router-link>
                <div class="article-content">
                  <div class="article-info d-flex py-3">
                    <div class="pe-3">
                      <i class="fas fa-user pe-2"></i>
                      <span class="text-secondary">Admin</span>
                    </div>
                    <div>
                      <i class="fas fa-calendar pe-2"></i>
                      <span class="text-secondary">October 13, 2022</span>
                    </div>
                  </div>
                  <router-link to="/news-details" class="text-decoration-none">
                    <h2 class="h5 article-title limit-2-line-text">
                      Protect Your Workplace FromCyber Attacks
                    </h2>
                  </router-link>
                  <router-link
                    to="/news-details"
                    class="link-with-icon text-decoration-none"
                    >Read more <i class="far fa-arrow-right"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="cyber-single-article mb-4 mb-lg-0 p-3 border">
                <router-link to="/news-details" class="cyber-article-img">
                  <img
                    src="@/assets/img/blog/c-blog-3.jpg"
                    alt="article"
                    class="img-fluid"
                  />
                </router-link>
                <div class="article-content">
                  <div class="article-info d-flex py-3">
                    <div class="pe-3">
                      <i class="fas fa-user pe-2"></i>
                      <span class="text-secondary">Admin</span>
                    </div>
                    <div>
                      <i class="fas fa-calendar pe-2"></i>
                      <span class="text-secondary">October 13, 2022</span>
                    </div>
                  </div>
                  <router-link to="/news-details" class="text-decoration-none">
                    <h2 class="h5 article-title limit-2-line-text">
                      The Steps to GainingPrivileged Access Security
                    </h2>
                  </router-link>
                  <router-link
                    to="/news-details"
                    class="link-with-icon text-decoration-none"
                    >Read more <i class="far fa-arrow-right"></i
                  ></router-link>
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
// Import Swiper Vue.js components
import Swiper from "swiper";

export default {
  name: "CyberBlog",
  mounted() {
    new Swiper(this.$refs.cyberBlog, {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1000,
      autoplay: {
        delay: 2500,
      },
      slidesPerGroup: 1,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });
  },
};
</script>
