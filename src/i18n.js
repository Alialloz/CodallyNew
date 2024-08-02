// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    Home :  "Home",
    service : "Service",
    Project : "our project",
    about : "About Us",
    slogan : "Turn your dreams into technological realities",
    test : "#1 Software Company In World"
  },
  fr: {
    Home :  "Accueil",
    service : "Services",
    Project : "Nos Projects",
    about : "À propos de nous",
    slogan : "Transformez vos rêves en réalités technologiques",
    test : "#1 companie de logiciels au monde"

  },
};

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;