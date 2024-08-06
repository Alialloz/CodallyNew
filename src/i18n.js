// src/i18n.js
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    /* NavBarre*/
    service: "Services",
    Home: "Home",
    contact: "Contact Us!",
    about: "Our team",

    /* Home */
    slogan_1: "Turn your dreams into technological realities",
    slogan_2: "#1 Software Solution for Your Business",
    description:
      "We are a technology consulting firm specializing in the development of innovative and customized diverse software solutions",

    /* Page d'acceuil Project*/

    Project: "Our Projects",
    projectDescription:
      "We work alongside you to turn ideas into reality, take a look at some of the projects that define our commitment to innovation and creative collaboration.",

    webler: "Webler",
    weblerDes:
      "Creating a website can be intimidating, especially for those without deep technical skills. This is where Webler comes into play!",

    Taskaii: "Taskaii",
    TaskaiiDes:
      "Taskaii is a desktop application that boosts productivity by combining an advanced task list with an integrated calendar.",

    serviceClient: "WhatsApp Chat for Clinics",
    serviceClientDes:
      "Trained from medical data, our WhatsApp customer service is specifically designed for clinics to facilitate appointment scheduling.",

    assistance: "AI Telephone Assistant",
    assistanceDes:
      "Providing quality customer service for patients is essential to ensure a positive and efficient experience. This is what our software offers.",

    facturation: "Billing Software",
    facturationDes:
      "Managing billing is a critical aspect that requires efficiency and compliance. Our service offers a tailored solution for medical clinics.",

    /* Service (TechTabs)*/

    titre: "Your Expertise, Our Mission",
    titreDes:
      "We offer a wide range of services in the digital field, guaranteeing a tailored response to all your needs, from development to consulting, including machine learning.",

    designWeb: "Web Development",
    designWebDesc:
      "Bring your projects to life and make them accessible on the internet with a website. Our difference lies in our artistic team for original designs, directly in contact with you, and our web development team providing adaptive and innovative solutions.",

    developpementApplication: "Mobile Application Development",
    developpementApplicationDesc:
      "Your app ideas can take shape on iOS or Android with our expertise in software solution development. We combine creativity and cutting-edge technology to create exceptional, customized mobile experiences.",

    DéveloppementFullStack: "Full Stack Development",
    DéveloppementFullStackDesc:
      "Most companies offer either client-side or server-side work. However, we enable you to master your entire project with our Full Stack development expertise, combining front-end and back-end skills.",

    logicielsPerso: "Custom Software Development",
    logicielsPersoDesc:
      "We redefine software solutions with customization taken to the extreme, ensuring products perfectly tailored to your specific needs.",

    solutionIA:
      "Solutions in Artificial Intelligence and Deep Learning",
    solutionIADesc:
      "The future of technology belongs to artificial intelligence. We firmly believe in this idea and, consequently, combine advanced algorithms and extensive data analysis to develop solutions with significant AI support.",

    conseil: "Technology and Digital Strategy Consulting",
    conseilDesc:
      "We offer consulting services to help businesses or individuals develop technology strategies, choose the right technological solutions, or digitally transform their operations.",

    knowMore: "Learn more about our services",

    /* à propos de nous (home/About_image)*/

    whyChooseUs: "Why Choose Us?",
    experience: "Innovate and succeed together.",
    experienceDesc:
      "Thanks to our expertise in various fields, including development, artificial intelligence, and artistic creation, we offer solutions tailored to your needs.",

    expertAroundWorld: "Multidisciplinary team",
    bestPractice: "Innovative solutions",
    greatSpeakers: "Innovative solutions",
    eventManagement: "Customer satisfaction guaranteed",
    funOnEvent: "Adaptation of our services",
    salesCompliance: "Compliance of services",
    showcasingSuccess: "Relevant advice",

    learnMore: "Learn more about our team",

   
      /*   Notre équipe (OurTeam) */   

      notreÉquipe : "Our team",
      notreÉquipeSlo : "The people behind Codally",
      notreÉquipeDef : "The driving force of our company is our ability to address each of your IT requests in a personalized and tailored manner. To achieve this, each of our team members possesses a specialization unique to their role.",
    
    /*   Brand Logo */   

      brandLogoTitre : "Our Partners",
      brandLogoDes : "We work closely with various companies to offer the best services.",

    },
  
  fr: {
    /* NavBarre*/
    service: "Services",
    Home: "Acceuil",
    contact: "Contactez-nous",
    about: "Notre équipe",

    /* Home */
    slogan_1: "Transformez vos rêves en réalités technologiques",
    slogan_2: "#1 Solution Logicielle pour Votre Entreprise",
    description:
      "Nous sommes une firme de conseil technologique spécialisée dans le développement de solutions logicielles variées innovantes et personnalisées.",

    /*Page D'acceuil Project*/

    Project: "Nos Projects",
    projectDescription:
      "Nous transformons les idées en réalité à vos côtés, parcourez nos projets qui définissent notre engagement envers l'innovation et les collaborations créatives",
      
    webler: "Webler",
    weblerDes:
      "La création d'un site web peut être intimidant, surtout pour ceux n'ayant pas de compétences techniques approfondies. C'est ici que Webler entre en jeu!",

    Taskaii: "Taskaii",
    TaskaiiDes:
      "Imaginez une application de bureau conçue pour améliorer votre productivité. Via une liste de tâches avancée avec un agenda intégré, Taskai est le logiciel parfait.",

    serviceClient: "Chat WhatsApp pour Cliniques",
    serviceClientDes:
      "Formé à partir de données médical, notre service client WhatsApp est spécialement conçu pour les cliniques afin de faciliter la prise de rendez-vous.",

    assistance: "Assistante Téléphonique IA ",
    assistanceDes:
      "Offrir un service clientèle de qualité pour les patients est essentiel pour leur assurer une expérience positive et efficace, c'est ce qu'offre notre logiciel.",

    facturation: "Logiciel de facturation",
    facturationDes:
      "La gestion des facturations est un aspect critique qui nécessite efficacité et conformité. Notre service offre une solution sur mesure pour les cliniques médicales.",

    /* Service (TechTabs)*/

    titre: "Votre expertise, notre mission",
    titreDes:
      "Nous offrons un large éventail de services dans le domaine informatique, nous garantissons une réponse sur mesure à tous vos besoins allant du développement aux conseils en passant par le machine learning.",

    designWeb: "Développement Web",
    designWebDesc:
      "Réalisez vos projets en les rendant concrets et accessibles sur internet grâce à un site web. Notre différence, une équipe artistique pour des designs originaux, en contact direct avec vous et une équipe en développement web fournissant des solutions adaptatives et innovantes.",

    developpementApplication: "Développement d'Applications Mobiles",
    developpementApplicationDesc:
      "Vos idées d'application peuvent prendre forme sur Ios ou android avec notre expertise en développement de solution logicielle, nous combinons créativité et technologie de pointe pour créer des expériences mobiles exceptionnelles mais surtout sur mesure.",

    DéveloppementFullStack: "Développement Full Stack",
    DéveloppementFullStackDesc:
      "La plupart des entreprises proposent de soi travailler côté client soit côté serveur, cependant nous vous proposons de maîtrisez l'intégralité de votre projet avec notre expertise en développement Full Stack en combinant compétences front-end et back-end.",

    logicielsPerso: "Développement de Logiciels Personnalisés",
    logicielsPersoDesc:
      "Nous redéfinissons les solutions logicielles avec une personnalisation poussée à son paroxysme puisque nous garantissons des produits parfaitement adaptés à vos besoins spécifiques.",

    solutionIA:
      "Solutions en Intelligence Artificielle et deep Learning",
    solutionIADesc:
      "L’avenir technologique appartient à l’intelligence artificielle, nous croyons fermement en cette idée et par conséquent nous combinons des algorithmes avancés et des analyses de données conséquentes pour développer des solutions avec un support IA non négligeable.",

    conseil: "Conseil en Technologie et Stratégie Digitale",
    conseilDesc:
      "Nous offrons un service de conseil pour aider les entreprises ou les particuliers à élaborer des stratégies technologiques, à choisir les bonnes solutions technologiques ou à transformer numériquement leurs opérations.",

    knowMore: "En savoir plus nos services",

    /* à propos de nous (home/About_image)*/

    whyChooseUs: "Pourquoi Nous Choisir?",
    experience: "Innovons et réussissons ensemble.",
    experienceDesc:
      "Grâce à notre expertise dans divers domaines, incluant le développement, l'intelligence artificielle et la création artistique, nous offrons des solutions adaptées à vos besoins.",

    expertAroundWorld: "L'expertise mondiale à votre service.",
    bestPractice: "Des solutions optimales pour chaque entreprise.",

    digitalConference: "Équipe pluridisciplinaire",
    greatSpeakers: "solutions innovantes",
    eventManagement: "satisfaction client garantit",
    funOnEvent: "Adaptation de nos services",
    salesCompliance: "Conformité des prestations",
    showcasingSuccess: "Conseil pertinent",
    learnMore: "En savoir plus sur notre équipe",

/*   Notre équipe (OurTeam) */   

notreÉquipe : "Notre équipe",
notreÉquipeSlo : "Les personnes derrière Codally",
notreÉquipeDef : "Le fer de lance de notre entreprise est notre capacité à pouvoir répondre à chacune de vos demandes informatique de manière personnalisée et adaptée. Pour ce faire, chacun de nos membres possèdant une spécialisation lui entant propre",

/*   Brand Logo */   

brandLogoTitre : "Nos collaborateurs",
brandLogoDes : "Nous travaillons conjointement avec divers société afin de proposer les meilleurs services.",


},
};

const i18n = createI18n({
  locale: "en",
  messages,
});

export default i18n;
