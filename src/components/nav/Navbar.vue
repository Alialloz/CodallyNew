<template>
  <header class="main-header w-100" :class="[darkNav ? 'position-absolute' : '', classOption]">
    <nav class="navbar navbar-expand-xl sticky-header z-10" :class="[
      darkNav ? 'navbar-dark' : 'navbar-light',
      isSticky ? 'affix' : '',
    ]">
      <div class="container-fluid d-flex align-items-center justify-content-between position-relative">
        
        <!-- Brand Logo -->
        <router-link to="/" class="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
          <img src="@/assets/img/logo-white.png" alt="Logo" class="img-fluid logo-white" />
          <img src="@/assets/img/logoCodallyFondTransparent.png" alt="Logo de l'entreprise codally"
            class="img-fluid logo-color" />
        </router-link>

        <!-- Mobile menu and language switcher -->
        <div class="d-flex align-items-center d-xl-none ms-auto navbar-controls">
          <div class="language-switcher dropdown me-2">
            <button
              class="btn dropdown-toggle p-0"
              type="button"
              id="languageDropdown"
              @click="toggleLanguageDropdown"
            >
              <img :src="currentFlag" class="language-icon" alt="Drapeau de la langue actuelle" />
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end"
              :class="{'show': isLanguageDropdownOpen}"
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
          <button
            class="navbar-toggler"
            type="button"
            @click="toggleMenu"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="far fa-bars"></span>
          </button>
        </div>

        <!-- Desktop menu -->
        <div class="collapse navbar-collapse justify-content-center flex-grow-1" :class="{ 'show': isMenuOpen }">
          <ul class="navbar-nav main-menu">
            <li>
              <router-link to="/" class="nav-link" @click="closeMenu">&nbsp&nbsp{{ $t('Home') }}&nbsp&nbsp</router-link>
            </li>
            <li>
              <router-link to="/services" class="nav-link" @click="closeMenu">&nbsp&nbsp{{ $t('service') }}&nbsp&nbsp</router-link>
            </li>
            <li>
              <router-link to="/our-projects" class="nav-link" @click="closeMenu">&nbsp&nbsp{{ $t('Project') }}&nbsp&nbsp</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/our-team" class="nav-link" @click="closeMenu">&nbsp&nbsp{{ $t('about') }}&nbsp&nbsp</router-link>
            </li>
            <li class="nav-item d-xl-none">
              <router-link to="/contact-us" class="nav-link" @click="closeMenu">{{ $t('contact') }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Desktop contact button and language switcher -->
        <div class="d-none d-xl-flex align-items-center ms-auto">
          <router-link to="/contact-us" class="btn btn-primary me-3">{{ $t('contact') }}</router-link>
          <div class="language-switcher dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="languageDropdownDesktop"
              @click="toggleLanguageDropdown"
            >
              <img :src="currentFlag" class="language-icon" alt="Drapeau de la langue actuelle" />
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end"
              :class="{'show': isLanguageDropdownOpen}"
              aria-labelledby="languageDropdownDesktop"
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
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { ref, computed, onMounted, watch } from 'vue';
import USFlag from '@/assets/img/flags/US.jpg';
import FRFlag from '@/assets/img/flags/FR.png';

export default {
  name: 'Navbar',
  props: {
    darkNav: String,
    classOption: String,
  },
  setup() {
    const { locale } = useI18n();
    const isLanguageDropdownOpen = ref(false);
    const isSticky = ref(false);
    const isMenuOpen = ref(false);

    const storedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
    locale.value = storedLanguage;

    const currentFlag = computed(() =>
      locale.value === 'fr' ? FRFlag : USFlag
    );

    function changeLanguage(lang) {
      locale.value = lang;
      isLanguageDropdownOpen.value = false;
      localStorage.setItem('selectedLanguage', lang);
    }

    function toggleLanguageDropdown() {
      isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value;
    }

    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value;
    }

    function closeMenu() {
      isMenuOpen.value = false;
    }

    watch(locale, (newLocale) => {
      localStorage.setItem('selectedLanguage', newLocale);
    });

    onMounted(() => {
      const savedLanguage = localStorage.getItem('selectedLanguage');
      if (savedLanguage) {
        locale.value = savedLanguage;
      }

      window.addEventListener('scroll', () => {
        isSticky.value = window.scrollY >= 80;
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-switcher')) {
          isLanguageDropdownOpen.value = false;
        }
      });
    });

    return {
      isLanguageDropdownOpen,
      isSticky,
      isMenuOpen,
      currentFlag,
      changeLanguage,
      toggleLanguageDropdown,
      toggleMenu,
      closeMenu,
    };
  },
};
</script>

<style scoped>
@media (max-width: 1199px) {
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #175cff;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  /* Modify the text color inside the navbar-collapse */
  .navbar-collapse .nav-link {
    color: #fff; /* White text */
  }

  /* Modify the text color for the dropdown items */
  .navbar-collapse .dropdown-item {
    color: #fff; /* White text */
  }

  /* Hover effect: lighter blue and white text */
  .navbar-collapse .dropdown-item:hover,
  .navbar-collapse .dropdown-item:focus {
    background-color: rgba(23, 92, 255, 0.8); /* Lighter blue */
    color: #fff; /* Keep text white */
  }

  .navbar-collapse.show {
    display: block;
  }

  .main-menu {
    flex-direction: column;
  }

  .main-menu .nav-link {
    padding: 0.5rem 0;
  }

  .language-switcher {
    margin-top: 1rem;
  }
}

.navbar-brand {
  padding-left: 0;
}

.navbar .container-fluid {
  padding-left: 15px;
  padding-right: 15px;
}

@media (min-width: 1200px) {
  .navbar .container-fluid {
    padding-left: 30px;
    padding-right: 30px;
  }
}

.navbar-controls {
  display: flex;
  align-items: center;
  height: 40px;
}

.language-switcher .btn,
.navbar-toggler {
  padding: 0;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
}

.language-icon {
  width: 24px;
  height: 16px;
  object-fit: cover;
  vertical-align: middle;
}

.navbar-toggler {
  margin-top: -1px;
}

.navbar-toggler .far {
  font-size: 24px;
  line-height: 1;
}

.dropdown-menu {
  margin-top: 0.5rem;
  min-width: 120px;
}

.language-switcher .btn,
.navbar-toggler {
  line-height: 40px;
}

.navbar-controls > * {
  margin: 0;
}

.language-switcher {
  margin-right: 8px;
}


</style>