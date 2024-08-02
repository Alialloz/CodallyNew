<template>
  <header class="main-header w-100" :class="[darkNav ? 'position-absolute' : '', classOption]">
    <nav class="navbar navbar-expand-xl sticky-header z-10" :class="[
      darkNav ? 'navbar-dark' : 'navbar-light',
      isSticky ? 'affix' : '',
    ]">
      <div class="container d-flex align-items-center justify-content-lg-between position-relative">
        <router-link to="/" class="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
          <img src="@/assets/img/logo-white.png" alt="Logo" class="img-fluid logo-white" />
          <img src="logoAssets\logoCodallyFondTransparent.png" alt="Logo de l'entreprise codally"
            class="img-fluid logo-color" />
        </router-link>

        <router-link class="navbar-toggler position-absolute right-0 border-0" to="#offcanvasWithBackdrop"
          role="button">
          <span class="far fa-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop"
            aria-controls="offcanvasWithBackdrop"></span>
        </router-link>

        <div class="collapse navbar-collapse justify-content-center">
          <ul class="nav col-12 col-md-auto justify-content-center main-menu">
            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </a>

              <div
                class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white"
              >
                <div class="dropdown-grid rounded-custom width-full">
                  <div class="dropdown-grid-item">
                    <h6 class="drop-heading">Different Home</h6>
                    <router-link to="/" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                        >1</span
                      >
                      <div class="dropdown-info">
                        <div class="drop-title">Saas Company 1</div>
                        <p>It's for <strong>SaaS Software</strong> Company</p>
                      </div>
                    </router-link>
                    <router-link to="/home-two" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                        >2</span
                      >
                      <div class="dropdown-info">
                        <div class="drop-title">Saas Company 2</div>
                        <p>Modern <strong>Saas agency</strong></p>
                      </div>
                    </router-link>
                    <router-link to="/home-three" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                        >3</span
                      >
                      <div class="dropdown-info">
                        <div class="drop-title">Desktop App</div>
                        <p><strong>Web Software</strong> Company</p>
                      </div>
                    </router-link>
                    <router-link to="/home-four" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                        >4</span
                      >
                      <div class="dropdown-info">
                        <div class="drop-title">App Landing</div>
                        <p>App and <strong>Software</strong> Landing</p>
                      </div>
                    </router-link>
                    <router-link to="/home-five" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                        >5</span
                      >
                      <div class="dropdown-info">
                        <div class="drop-title">Software Application</div>
                        <p>
                          IT solutions and <strong>SaaS Application</strong>
                        </p>
                      </div>
                    </router-link>
                    <router-link to="/home-six" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                        >6</span
                      >
                      <div class="dropdown-info">
                        <div class="drop-title">Startup Agency</div>
                        <p>Different type of <strong>Agency</strong>&lrm;</p>
                      </div>
                    </router-link>
                    <router-link to="/home-seven" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                        >7</span
                      >
                      <div class="dropdown-info">
                        <div class="drop-title">Data Analysis</div>
                        <p>Software & <strong>Data Analysis</strong>&lrm;</p>
                      </div>
                    </router-link>
                    <router-link to="/home-eight" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                        >8</span
                      >
                      <div class="dropdown-info">
                        <div class="drop-title">App Landing Two</div>
                        <p>App and<strong> Software</strong> Landing&lrm;</p>
                      </div>
                    </router-link>
                  </div>
                  <div class="dropdown-grid-item radius-right-side bg-light">
                    <router-link to="/home-nine" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                        >9</span
                      >
                      <div class="dropdown-info">
                        <div class="drop-title">IT Solution</div>
                        <p>
                          <strong>IT Solution</strong> Sass Application&lrm;
                        </p>
                      </div>
                    </router-link>
                    <router-link to="/home-ten" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                        >10</span
                      >
                      <div class="dropdown-info">
                        <div class="drop-title">Cyber Security</div>
                        <p><strong>Cyber Security</strong> Landing Page;</p>
                      </div>
                    </router-link>
                    <router-link to="/home-eleven" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                        >11</span
                      >
                      <div class="dropdown-info">
                        <div class="drop-title">Crypto Currency</div>
                        <p><strong>Crypto Currency</strong> Landing Page;</p>
                      </div>
                    </router-link>
                    <router-link to="/home-twelve" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                        >12</span
                      >
                      <div class="dropdown-info">
                        <div class="drop-title">Game Solution</div>
                        <p><strong>Game Server</strong> Landing Page;</p>
                      </div>
                    </router-link>
                    <router-link to="/home-thirteen" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                        >13</span
                      >
                      <div class="dropdown-info">
                        <div class="drop-title">Payment Gateway</div>
                        <p><strong>Payment Gateway</strong> Landing Page;</p>
                      </div>
                    </router-link>
                    <router-link to="/home-fourteen" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                      >
                        14
                      </span>
                      <div class="dropdown-info">
                        <div class="drop-title">Digital Marketing</div>
                        <p><strong>Digital Marketing</strong> landing page</p>
                      </div>
                    </router-link>
                    <router-link to="/home-fifteen" class="dropdown-link">
                      <span
                        class="demo-list bg-primary rounded text-white fw-bold"
                      >
                        15
                      </span>
                      <div class="dropdown-info">
                        <div class="drop-title">Conference & Event</div>
                        <p><strong>Conference & Event</strong> landing</p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </li> -->
            <li>
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li>
              <router-link to="/services" class="nav-link">Services</router-link>
            </li>
            <li>
              <router-link to="/about-us" class="nav-link">Our projects</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact Us</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Pages</a>
              <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                <div class="dropdown-grid rounded-custom width-full">
                  <div class="dropdown-grid-item">
                    <h6 class="drop-heading">Useful Links</h6>
                    <router-link to="/contact" class="dropdown-link px-0">
                      <span class="me-2"><i class="far fa-address-book"></i></span>
                      <div class="drop-title">Contact Us</div>
                    </router-link>
                    <router-link to="/service-single" class="dropdown-link px-0">
                      <span class="me-2"><i class="far fa-server"></i></span>
                      <div class="drop-title">Services Single</div>
                    </router-link>
                    <router-link to="/news" class="dropdown-link">
                      <span class="me-2"><i class="far fa-th-large"></i></span>
                      <div class="drop-title">Our Latest News</div>
                    </router-link>
                    <router-link to="/news-details" class="dropdown-link">
                      <span class="me-2"><i class="far fa-bars"></i></span>
                      <div class="drop-title">News Details</div>
                    </router-link>
                    <router-link to="/career" class="dropdown-link px-0">
                      <span class="me-2"><i class="far fa-graduation-cap"></i></span>
                      <div class="drop-title">Career</div>
                    </router-link>
                    <router-link to="/career-single" class="dropdown-link px-0">
                      <span class="me-2"><i class="far fa-user-graduate"></i></span>
                      <div class="drop-title">Career Single</div>
                    </router-link>
                    <router-link to="/integrations" class="dropdown-link">
                      <span class="me-2"><i class="far fa-rocket-launch"></i></span>
                      <div class="drop-title">Integrations</div>
                    </router-link>
                    <router-link to="/integration-single" class="dropdown-link px-0">
                      <span class="me-2"><i class="far fa-paper-plane"></i></span>
                      <div class="drop-title">Integration Single</div>
                    </router-link>
                  </div>
                  <div class="dropdown-grid-item radius-right-side bg-light">
                    <h6 class="drop-heading">Utility Pages</h6>
                    <router-link to="/helps" class="dropdown-link">
                      <span class="me-2"><i class="far fa-life-ring"></i></span>
                      <div class="drop-title">Help Center</div>
                    </router-link>
                    <router-link to="/help-single" class="dropdown-link">
                      <span class="me-2"><i class="far fa-headset"></i></span>
                      <div class="drop-title">Help Details</div>
                    </router-link>
                    <router-link to="/request-for-demo" class="dropdown-link">
                      <span class="me-2"><i class="far fa-laptop-code"></i></span>
                      <div class="drop-title">Request for Demo</div>
                    </router-link>
                    <router-link to="/login" class="dropdown-link">
                      <span class="me-2"><i class="far fa-sign-in"></i></span>
                      <div class="drop-title">User Login</div>
                    </router-link>
                    <router-link to="/signup" class="dropdown-link">
                      <span class="me-2"><i class="far fa-user-plus"></i></span>
                      <div class="drop-title">User SignUp</div>
                    </router-link>
                    <router-link to="/recovery" class="dropdown-link">
                      <span class="me-2"><i class="far fa-trash-undo"></i></span>
                      <div class="drop-title">Recovery Account</div>
                    </router-link>
                    <router-link to="/notfound" class="dropdown-link">
                      <span class="me-2"><i class="far fa-exclamation-triangle"></i></span>
                      <div class="drop-title">404 Page</div>
                    </router-link>
                    <router-link to="/coming-soon" class="dropdown-link">
                      <span class="me-2"><i class="far fa-clock"></i></span>
                      <div class="drop-title">Coming Soon</div>
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
          <router-link to="/login" class="btn btn-link text-decoration-none me-2">Sign In</router-link>
          <router-link to="/request-for-demo" class="btn btn-primary">Get Started</router-link>
        </div>

        <div class="language-switcher ms-3 dropdown" @mouseover="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
    <button
      class="btn dropdown-toggle"
      type="button"
      id="languageDropdown"
      :class="dropdownButtonClass"
    >
      <img :src="currentFlag" class="language-icon" alt="Current language flag" />
    </button>
    <ul
      class="dropdown-menu"
      :class="{'show': isDropdownOpen}"
      aria-labelledby="languageDropdown"
    >
      <li>
        <a class="dropdown-item" href="#" @click="changeLanguage('en')">
          <img src="@/assets/img/flags/US.jpg" alt="English (EN)" class="language-icon" /> English (EN)
        </a>
      </li>
      <li>
        <a class="dropdown-item" href="#" @click="changeLanguage('fr')">
          <img src="@/assets/img/flags/FR.png" alt="Français (FR)" class="language-icon" /> Français (FR) 
        </a>
      </li>
    </ul>
  </div>


        <Offcanvas />
      </div>
    </nav>
  </header>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { ref, computed } from 'vue';
import Offcanvas from './Offcanvas.vue';
import USFlag from '@/assets/img/flags/US.jpg';
import FRFlag from '@/assets/img/flags/FR.png';

export default {
  components: { Offcanvas },
  name: 'Navbar',
  props: {
    darkNav: String,
    classOption: String,
  },
  setup() {
    const { locale } = useI18n();
    const isDropdownOpen = ref(false);

    const currentFlag = computed(() => 
      locale.value === 'en' ? USFlag : FRFlag
    );

    function changeLanguage(lang) {
      locale.value = lang;
      isDropdownOpen.value = false;
    }

    return {
      isDropdownOpen,
      currentFlag,
      changeLanguage,
    };
  },
  data() {
    return {
      isSticky: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },
};
</script>



