// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
     /* NavBarre*/
    service: "Services",
    Home :  "Home",
    contact : "Contact Us",
    about : "About Us",

    /* Home */
    slogan_1 : "Turn your dreams into technological realities",
    slogan_2 : "#1 Software Solution for Your Business",
    description : "We are a technology consulting firm specializing in the development of innovative and customized diverse software solutions",

     /* Page d'acceuil Project*/

     Project :  "Our Projects",
     projectDescription : "We work alongside you to turn ideas into reality, take a look at some of the projects that define our commitment to innovation and creative collaboration.",

     webler :  "Webler",
     weblerDes :"Creating a website can be intimidating, especially for those without deep technical skills. This is where Webler comes into play!",

     Taskaii :  "Taskaii",
     TaskaiiDes :  "Taskaii is a desktop application that boosts productivity by combining an advanced task list with an integrated calendar.",

     serviceClient: "WhatsApp Chat for Clinics",
     serviceClientDes:  "Trained from medical data, our WhatsApp customer service is specifically designed for clinics to facilitate appointment scheduling.",

     assistance: "AI Telephone Assistant",
     assistanceDes:  "Providing quality customer service for patients is essential to ensure a positive and efficient experience. This is what our software offers.",

     facturation: "Billing Software",
     facturationDes :  "Managing billing is a critical aspect that requires efficiency and compliance. Our service offers a tailored solution for medical clinics.",

     /* Service (TechTabs)*/

     titre :"Your Expertise, Our Mission",
     titreDes :  "We offer a wide range of services in the digital field, guaranteeing a tailored response to all your needs, from development to consulting, including machine learning.",

     designWeb : "Web Development",
     developpementApplication : "Mobile Application Development",
     DéveloppementFullStack :"Full Stack Development",
     logicielsPerso :"Custom Software Development",
     solutionIA :"solution in IA and Deep Learning",
     conseil :"Technology and Digital Strategy Consulting",


  },
  fr: {

    /* NavBarre*/
    service: "Services",
    Home :  "Acceuil",
    contact : "Contactez-nous",
    about : "À propos de nous",

    /* Home */
    slogan_1 : "Transformez vos rêves en réalités technologiques",
    slogan_2 :"#1 Solution Logicielle pour Votre Entreprise",
    description : "Nous sommes une firme de conseil technologique spécialisée dans le développement de solutions logicielles variées innovantes et personnalisées.",

     /*Page D'acceuil Project*/

     Project :  "Nos Projects",
     projectDescription : "Nous transformons les idées en réalité à vos côtés, parcourez nos projets qui définissent notre engagement envers l'innovation et les collaborations créatives",
     webler :  "Webler",
     weblerDes :"La création d'un site web peut être intimidant, surtout pour ceux n'ayant pas de compétences techniques approfondies. C'est ici que Webler entre en jeu!",

     Taskaii :  "Taskaii",
     TaskaiiDes :  "Imaginez une application de bureau conçue pour améliorer votre productivité. Via une liste de tâches avancée avec un agenda intégré, Taskai est le logiciel parfait.",

     serviceClient:  "Chat WhatsApp pour Cliniques",
     serviceClientDes:  "Formé à partir de données médical, notre service client WhatsApp est spécialement conçu pour les cliniques afin de faciliter la prise de rendez-vous.",

     assistance:  "Assistante Téléphonique IA ",
     assistanceDes:  "Offrir un service clientèle de qualité pour les patients est essentiel pour leur assurer une expérience positive et efficace, c'est ce qu'offre notre logiciel.",

     facturation :  "Logiciel de facturation",
     facturationDes :  "La gestion des facturations est un aspect critique qui nécessite efficacité et conformité. Notre service offre une solution sur mesure pour les cliniques médicales.",

     /* Service (TechTabs)*/

     titre :"Votre expertise, notre mission",
     titreDes :  "Nous offrons un large éventail de services dans le domaine informatique, nous garantissont une réponse sur mesure à tous vos besoins allant du développement aux conseils en passant par le machine learning.",
    
     designWeb : "Développement Web ",
     developpementApplication : "Développement d'applications Mobiles",
     DéveloppementFullStack :"Développement Full Stack",
     logicielsPerso :"Développement de logiciels Personnalisé",
     solutionIA :"solution en IA/Deep Learning",
     conseil :"conseil en Technologie",

     


  },
};

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;