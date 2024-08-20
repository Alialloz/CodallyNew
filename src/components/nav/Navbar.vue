<template>
  <header class="main-header w-100" :class="[darkNav ? 'position-absolute' : '', classOption]">
    <nav class="navbar navbar-expand-xl sticky-header z-10" :class="[
      darkNav ? 'navbar-dark' : 'navbar-light',
      isSticky ? 'affix' : '',
    ]">
      <div class="container d-flex align-items-center justify-content-lg-between position-relative">
        <router-link to="/" class="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
          <img src="@/assets/img/logo-white.png" alt="Logo" class="img-fluid logo-white" />
          <img src="/src\assets\img\logoCodallyFondTransparent.png" alt="Logo de l'entreprise codally"
            class="img-fluid logo-color" />
        </router-link>

        <router-link class="navbar-toggler position-absolute right-0 border-0" to="#offcanvasWithBackdrop"
          role="button">
          <span class="far fa-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop"
            aria-controls="offcanvasWithBackdrop"></span>
        </router-link>

        <div class="collapse navbar-collapse justify-content-center">
          <ul class="nav col-12 col-md-auto justify-content-center main-menu">
            <li class="nav-item dropdown">
            </li>
            <li>
              <router-link to="/" class="nav-link">&nbsp&nbsp{{ $t('Home') }}&nbsp&nbsp&nbsp</router-link>
            </li>
            <li>
              <router-link to="/services" class="nav-link">&nbsp&nbsp{{ $t('service') }}&nbsp&nbsp</router-link>
            </li>
            <li>
              <router-link to="/about-us" class="nav-link">&nbsp&nbsp{{ $t('Project') }}&nbsp&nbsp</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">&nbsp&nbsp{{ $t('about') }}&nbsp&nbsp</router-link>
            </li>
            
          </ul>
        </div>
        <div class="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
          <router-link to="/request-for-demo" class="btn btn-primary">{{ $t('contact') }}</router-link>
        </div>

        <div class="language-switcher ms-3 dropdown" @mouseover="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
    <button
      class="btn dropdown-toggle"
      type="button"
      id="languageDropdown"
      :class="dropdownButtonClass"
    >
    <img :src="currentFlag" class="language-icon" alt="Drapeau de la langue actuelle" />
    </button>
    <ul
      class="dropdown-menu"
      :class="{'show': isDropdownOpen}"
      aria-labelledby="languageDropdown"
    >
          <li>
        <a class="dropdown-item" href="#" @click="changeLanguage('fr')">
          <img src="@/assets/img/flags/FR.png" alt="Français (FR)" class="language-icon" /> Français (FR)
        </a>
      </li>
      <li>
        <a class="dropdown-item" href="#" @click="changeLanguage('en')">
          <img src="@/assets/img/flags/US.jpg" alt="English (EN)" class="language-icon" /> English (EN)
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
import { ref, computed, onMounted, watch } from 'vue';
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

    const storedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
    locale.value = storedLanguage;

    const currentFlag = computed(() =>
      locale.value === 'fr' ? FRFlag : USFlag
    );

    function changeLanguage(lang) {
      locale.value = lang;
      isDropdownOpen.value = false;
      localStorage.setItem('selectedLanguage', lang);
    }

    watch(locale, (newLocale) => {
      localStorage.setItem('selectedLanguage', newLocale);
    });

    onMounted(() => {
      const savedLanguage = localStorage.getItem('selectedLanguage');
      if (savedLanguage) {
        locale.value = savedLanguage;
      }
    });

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
