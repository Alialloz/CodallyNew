// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    about: "About Us",
    service: "Service",
    Home :  "Home",
    slogan : "Turn your dreams into technological realities",
    test : "#1 Software Company In World"
  },
  fr: {
    about: "À propos de nous",
    service: "Service",
    Home :  "Acceuill",
    slogan : "Transformez vos rêves en réalités technologiques",
    test : "#1 companie de logiciels au monde"

  },
};

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;