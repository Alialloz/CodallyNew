// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    about: "About Us",
    service: "Service",
    Home :  "Home",
    slogan_1 : "Turn your dreams into technological realities",
    slogan_2 : "#1 Software Solution for Your Business",
    description : "We are a technology consulting firm specializing in the development of innovative and customized diverse software solutions",
    contact : "Contact Us",
    about : "About Us",
  },
  fr: {
    about: "À propos de nous",
    service: "Service",
    Home :  "Acceuill",
    slogan_1 : "Transformez vos rêves en réalités technologiques",
    slogan_2 :"#1 Solution Logicielle pour Votre Entreprise",
    description : "Nous sommes une firme de conseil technologique spécialisée dans le développement de solutions logicielles variées innovantes et personnalisées.",
    contact : "Contactez-nous",
    about : "À propos de nous",
  },
};

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;