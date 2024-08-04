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

     titre: "Your Expertise, Our Mission",
     titreDes: "We offer a wide range of services in the digital field, guaranteeing a tailored response to all your needs, from development to consulting, including machine learning.",
     designWeb: "Web Development",
     developpementApplication: "Mobile Application Development",
     DéveloppementFullStack: "Full Stack Development",
     logicielsPerso: "Custom Software Development",
     solutionIA: "Solutions in Artificial Intelligence, Machine Learning, and Deep Learning",
     conseil: "Technology and Digital Strategy Consulting",
     experience: "We are working with 15 years experience",
     experienceDesc: "Continually network effective bandwidth whereas goal-oriented schemas. Intrinsicly incentivize corporate synergy with accurate task bricks-and-clicks leadership skills.",
     digitalConference: "Digital Conference",
     greatSpeak: "Great Speak",
     eventManagement: "Event Management",
     knowMore: "Know More About Us",
     devAppMobile: "Turn your ideas of mobile application into reality on all platforms, whether it’s iOS or Android, with our expertise in application development. We combine creativity and cutting-edge technology to create exceptional mobile experiences that run, above all, tailor-made and adapted to each user.",
     devWeb: "Realize your projects by making them visible and, more importantly, accessible on the internet through a website. The difference with other companies is that we have an artistic team capable of creating original designs, with whom you can be direct contact if you already have a concrete idea about the site's design. Coupled with our expertise in web development, we guarantee adaptive and innovative solutions that perfectly meet the expectations of each user.",
     fullStackDev: "Most companies prefer to work either on the client side or the server side, but we offer you the opportunity to make your entire project, with our expertise in Full Stack development. Full Stack can combine commands from front-end and back-end for your needs to offer complex and integrated solutions.",
     customSoftware: "We are redefining software solutions with customization taken to its peak, as we guarantee products that are perfectly tailored to your specific needs. We transform your unique ideas into functional realities by creating custom-made software.",
     aiSolutions: "The future of technology belongs to artificial intelligence and machine learning. We firmly believe in this concept and, as a result, we combine the skills in algorithms, data analysis, and expertise in AI to develop innovative solutions that transform data into tangible ideas.",
     techConsulting: "We offer consulting services to help businesses develop technology strategies, choose the right technology solutions, and digitally transform their operations.",
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

     titre: "Votre expertise, notre mission",
     titreDes: "Nous offrons un large éventail de services dans le domaine informatique, nous garantissons une réponse sur mesure à tous vos besoins allant du développement aux conseils en passant par le machine learning.",
     designWeb: "Développement Web",
     developpementApplication: "Développement d'Applications Mobiles",
     DéveloppementFullStack: "Développement Full Stack",
     logicielsPerso: "Développement de Logiciels Personnalisés",
     solutionIA: "Solutions en Intelligence Artificielle, Machine Learning et Deep Learning",
     conseil: "Conseil en Technologie et Stratégie Numérique",
     experience: "Nous travaillons avec 15 ans d'expérience",
     experienceDesc: "Réseautage continu de bande passante efficace tandis que des schémas orientés objectifs. Inciter intrinsèquement la synergie d'entreprise avec des compétences en leadership bricks-and-clicks précises.",
     digitalConference: "Conférence Digitale",
     greatSpeak: "Grande Parole",
     eventManagement: "Gestion d'Événements",
     knowMore: "En savoir plus sur nous",
     devAppMobile: "Transformez vos idées en réalité mobiles sur toutes les plateformes, que ce soit sur iOS ou Android. Avec notre expertise en développement d’applications, nous combinons créativité et technologie de pointe pour créer des expériences mobiles exceptionnelles mais surtout sur mesure, adaptées à chaque utilisateur.",
     devWeb: "Concrétisez vos projets en les rendant visibles mais surtout accessibles sur l’internet via un site web. La différence avec les autres entreprises est que nous disposons d’une équipe artistique permettant de faire des designs originaux avec qui vous pouvez être en contact direct si vous disposez déjà d’une idée concrète quant aux designs du site. Couplé à notre maîtrise du développement web nous sommes donc en mesure de fournir des solutions adaptatives et innovantes répondant parfaitement aux attentes de chaque utilisateur.",
     fullStackDev: "La plupart des entreprises proposent de soit travailler côté client soit côté serveur, cependant nous vous proposons de réaliser l’intégralité de votre projet avec notre expertise en développement Full Stack. Le Full Stack peut combiner commandes front-end et back-end pour vos besoins afin d’offrir des solutions complexes et intégrées.",
     customSoftware: "Nous redéfinissons les solutions logicielles avec une personnalisation poussée à son paroxysme puisque nous garantissons des produits parfaitement adaptés à vos besoins spécifiques. Nous transformons vos idées uniques en réalités fonctionnelles en créant des logiciels taillés sur mesure.",
     aiSolutions: "L’avenir de la technologie appartient à l’intelligence artificielle et au machine learning. Nous croyons fermement en cette idée et par conséquent, nous combinons des algorithmes avancés, des analyses de données et l’expertise en IA pour développer des solutions innovantes qui transforment les données en idées tangibles.",
     techConsulting: "Nous offrons des services de conseil pour aider les entreprises à élaborer des stratégies technologiques, à choisir les bonnes solutions technologiques, et à se former numériquement leurs opérations.",
     


  },
};

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;