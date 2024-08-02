// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    Home :  "Home",
<<<<<<< HEAD
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
=======
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

>>>>>>> 81b5bb293d31f64d83b7f37768cc20264fcb9254
  },
};

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;