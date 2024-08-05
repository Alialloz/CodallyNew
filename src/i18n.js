// src/i18n.js
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    /* NavBarre*/
    service: "Services",
    Home: "Home",
    contact: "Contact Us",
    about: "About Us",

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
      "Realize your projects by making them visible and, more importantly, accessible on the internet through a website. The difference with other companies is that we have an artistic team capable of creating original designs, with whom you can be in direct contact if you already have a concrete idea about the site's design. Coupled with our expertise in web development, we are thus able to provide adaptive and innovative solutions that perfectly meet the expectations of each user.",

    developpementApplication: "Mobile Application Development",
    developpementApplicationDesc:
      "Turn your ideas of mobile application into reality on all platforms, whether it's iOS or Android, with our expertise in application development. We combine creativity and cutting-edge technology to create exceptional mobile experiences that are, above all, tailor-made and adapted to each user.",

    DéveloppementFullStack: "Full Stack Development",
    DéveloppementFullStackDesc:
      "Most companies offer to work either on the client side or on the server side, but we offer you the opportunity to master your entire project, with our expertise in Full Stack development, we are able to combine front-end and back-end skills to provide you with complete and integrated solutions.",

    logicielsPerso: "Custom Software Development",
    logicielsPersoDesc:
      "We are redefining software solutions with customization taken to its peak, as we guarantee products that are perfectly tailored to your specific needs. We transform your unique ideas into functional realities by creating custom-made software.",

    solutionIA:
      "Solutions in Artificial Intelligence, Machine Learning, and Deep Learning",
    solutionIADesc:
      "The future of technology belongs to artificial intelligence and machine learning. We firmly believe in this concept and, as a result, we combine advanced algorithms, deep data analysis, and expertise in AI to develop innovative solutions that transform data into tangible ideas.",

    conseil: "Technology and Digital Strategy Consulting",
    conseilDesc:
      "We offer consulting services to help businesses develop technology strategies, choose the right technology solutions, and digitally transform their operations.",
    /* Service (TechTabs)*/

    whyChooseUs: "Why Choose Us",
    experience: "We are working with 15 years experience",
    experienceDesc:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    expertAroundWorld: "Expert around the world",
    bestPractice: "Best Practice For Business",
    digitalConference: "Digital Conference",
    greatSpeakers: "Great Speakers",
    eventManagement: "Event Management",
    funOnEvent: "Have Fun on Event",
    salesCompliance: "Sales compliance",
    showcasingSuccess: "Showcasing success",
    learnMore: "Learn More",
    aboutUs: "About Us",
    aboutUsDesc:
      "CodAlly is a leading technology consulting firm, specialized in the development of innovative and customized software solutions. Our expertise includes artificial intelligence, machine learning, digital marketing, mobile application, web and full stack development. We also offer UX/UI design services and strategic technology consulting. Known for our technical excellence and client-focused approach, we are committed to deliver exceptional results, helping our clients to turn their ideas into concrete and effective technological solutions.",
  },
  fr: {
    /* NavBarre*/
    service: "Services",
    Home: "Acceuil",
    contact: "Contactez-nous",
    about: "À propos de nous",

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
      "Concrétisez vos projets en le rendant visible mais surtout accessible sur internet via un site web, la différence avec les autres entreprises est que nous disposons d’une équipe artistique permettant de réaliser des designs originaux avec qui vous pouvez être en relation direct si jamais vous disposer déjà d’une idée concrète quand aux designs du site. Couplet à notre maîtrise en développement web nous sommes donc en mesure de fournir des solutions adaptatives et innovantes répondant parfaitement aux attentes de chaque utilisateur.",

    developpementApplication: "Développement d'Applications Mobiles",
    developpementApplicationDesc:
      "Transformez vos idées en réalité mobiles sur toutes les plateformes que ce soit sur Ios ou android avec notre expertise en développement d'applications, nous combinons créativité et technologie de pointe pour créer des expériences mobiles exceptionnelles mais surtout sur mesure, adaptées à chaque utilisateur.",

    DéveloppementFullStack: "Développement Full Stack",
    DéveloppementFullStackDesc:
      "La plupart des entreprises propose de soit travailler coté client soit coté servent, cependant nous vous proposons de Maîtrisez l'intégralité de votre projet avec notre expertise en développement Full Stack en combinons compétences front-end et back-end pour vous offrir des solutions complètes et intégrées.",

    logicielsPerso: "Développement de Logiciels Personnalisés",
    logicielsPersoDesc:
      "Nous redéfinissons les solutions logicielles avec une personnalisation poussée à son paroxysme puisque nous garantissons des produits parfaitement adaptés à vos besoins spécifiques, nous transformons vos idées uniques en réalités fonctionnelles en créant des logiciels taillés sur mesure.",

    solutionIA:
      "Solutions en Intelligence Artificielle, Machine Learning et Deep Learning",
    solutionIADesc:
      "L’avenir technologique appartient à l’intelligence artificielle et au machine learning, nous croyons fermement en cette idée et par conséquent nous combinons des algorithmes avancés, des analyses de données profondes et une expertise en IA pour développer des solutions innovantes qui transforment les données en idée tangible.",

    conseil: "Conseil en Technologie et Stratégie Digitale",
    conseilDesc:
      "Offrir des services de conseil pour aider les entreprises à élaborer des stratégies technologiques, à choisir les bonnes solutions technologiques, et à transformer numériquement leurs opérations.",

    knowMore: "En savoir plus sur nous",

    /* why choose us*/

    whyChooseUs: "Pourquoi Nous Choisir",
    experience: "Nous travaillons avec 15 ans d'expérience",
    experienceDesc:
      "Il existe de nombreuses variantes de passages de Lorem Ipsum disponibles, mais la majorité ont été altérées d'une manière ou d'une autre, par l'humour injecté.",
    expertAroundWorld: "Expert dans le monde entier",
    bestPractice: "Meilleures Pratiques Pour Les Entreprises",
    digitalConference: "Conférence Digitale",
    greatSpeakers: "Grands Orateurs",
    eventManagement: "Gestion d'Événements",
    funOnEvent: "S'amuser lors de l'Événement",
    salesCompliance: "Conformité des Ventes",
    showcasingSuccess: "Présenter le succès",
    learnMore: "En savoir plus",
    aboutUs: "À Propos De Nous",
    aboutUsDesc:
      "CodAlly est une entreprise de conseil technologique leader, spécialisée dans le développement de solutions logicielles innovantes et personnalisées. Notre expertise comprend l'intelligence artificielle, le machine learning, le marketing digital, les applications mobiles, le développement web et full stack. Nous offrons également des services de conception UX/UI et de conseil stratégique en technologie. Réputés pour notre excellence technique et notre approche centrée sur le client, nous nous engageons à offrir des résultats exceptionnels, aidant nos clients à transformer leurs idées en solutions technologiques concrètes et efficaces.",
  },
};

const i18n = createI18n({
  locale: "en",
  messages,
});

export default i18n;
