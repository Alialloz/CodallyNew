// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    navbar: "Navbar",
    hero: "Hero",
    about: "About Us",
    tech: "Tech",
    service: "Service",
    portfolio: "Portfolio",
    testimonial: "Testimonials",
    footer: "Footer",
    slogan : "Turn your dreams into technological realities",
    test : "#1 Software Company In World"
  },
  fr: {
    navbar: "Barre de navigation",
    hero: "Héros",
    about: "À propos de nous",
    tech: "Technologie",
    service: "Service",
    portfolio: "Portefeuille",
    testimonial: "Témoignages",
    footer: "Pied de page",
    slogan : "Transformez vos rêves en réalités technologiques",
    test : "#1 companie de logiciels au monde"

  },
};

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;