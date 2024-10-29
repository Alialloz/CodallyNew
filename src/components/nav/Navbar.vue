<template>
  <header class="main-header w-100" :class="[darkNav ? 'position-absolute' : '', classOption]">
    <nav class="navbar navbar-expand-md sticky-header z-10" :class="[
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
        <div class="d-flex align-items-center d-md-none ms-auto navbar-controls">
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
              <router-link to="/" class="nav-link" @click="closeMenu">{{ $t('Home') }}</router-link>
            </li>
            <li>
              <router-link to="/services" class="nav-link" @click="closeMenu">{{ $t('service') }}</router-link>
            </li>
            <li>
              <router-link to="/our-projects" class="nav-link" @click="closeMenu">{{ $t('Project') }}</router-link>
            </li>
            <li>
              <router-link to="/our-team" class="nav-link" @click="closeMenu">{{ $t('about') }}</router-link>
            </li>
            <li>
              <router-link to="/news" class="nav-link" @click="closeMenu">{{ $t('News') }}</router-link>
            </li>
            <li>
              <router-link to="/career" class="nav-link" @click="closeMenu">{{ $t('career') }}</router-link>
            </li>
            <li class="nav-item d-md-none">
              <router-link to="/contact-us" class="nav-link" @click="closeMenu">{{ $t('News') }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Desktop contact button and language switcher -->
        <div class="d-none d-md-flex align-items-center ms-auto">
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
          <router-link to="/contact-us" class="btn btn-primary me-3">{{ $t('contact') }}</router-link>

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
@media (max-width: 767.98px) {
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #175cff;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .navbar-collapse .nav-link {
    color: #fff !important;
    padding: 0.75rem 1rem !important;
    text-align: left!important;
    display: block;
    width: 100%;
    box-sizing: border-box;
}

  /* Adjust the dropdown items similarly */
  .navbar-collapse .dropdown-item {
    color: #fff !important; /* White text */
    padding: 0.75rem 1rem !important; /* Consistent padding */
    text-align: left !important; /* Align text to the left */
    display: block; /* Ensure each link behaves as a block element */
    width: 100%; /* Ensure full width for alignment */
    box-sizing: border-box; /* Include padding in width */
  }

  /* Hover effect for dropdown items */
  .navbar-collapse .dropdown-item:hover,
  .navbar-collapse .dropdown-item:focus {
    background-color: rgba(23, 92, 255, 0.8) !important; /* Lighter blue */
    color: #fff !important; /* Keep text white */
  }

  /* Ensure the main menu items are aligned properly */
  .main-menu {
    flex-direction: column;
    width: 100%;
  }

  .main-menu .nav-link {
    margin: 0 !important; /* Remove any margins causing misalignment */
  }

  .navbar-collapse.show {
    display: block;
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