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

      knowMore2: "Learn more about our projects",

    /* Service (TechTabs)*/

    titre: "Your Expertise, Our Mission",
    titreDes:
      "We offer a wide range of services in the digital field, guaranteeing a tailored response to all your needs, from development to consulting, including machine learning.",

    designWeb: "Web Development",
    designWebDesc:
      "Bring your projects to life and make them accessible on the internet with a website. Our difference lies in our artistic team for original designs, directly in contact with you, and our web development team providing adaptive and innovative solutions.",
    desginWebLis1: "Responsive websites",
    desginWebLis2: "CMS integration",
    desginWebLis3: "SEO optimization",

    developpementApplication: "Mobile Application Development",
    developpementApplicationDesc:
      "Your app ideas can take shape on iOS or Android with our expertise in software solution development. We combine creativity and cutting-edge technology to create exceptional, customized mobile experiences.",
    developpementApplicationLis1: "iOS/Android apps",
    developpementApplicationLis2: "Intuitive UI",
    developpementApplicationLis3: "Push notifications",

    DéveloppementFullStack: "Full Stack Development",
    DéveloppementFullStackDesc:
      "Most companies offer either client-side or server-side work. However, we enable you to master your entire project with our Full Stack development expertise, combining front-end and back-end skills.",
    DéveloppementFullStackLis1: "Front-end & Back-end",
    DéveloppementFullStackLis2: "Modern frameworks",
    DéveloppementFullStackLis3: "Database management",

    logicielsPerso: "Custom Software Development",
    logicielsPersoDesc:
      "We redefine software solutions with customization taken to the extreme, ensuring products perfectly tailored to your specific needs.",
    logicielsPersoLis1: "Tailored solutions",
    logicielsPersoLis2: "Technical support",
    logicielsPersoLis3: "Specific functionalities",

    solutionIA: "Solutions in Artificial Intelligence and Deep Learning",
    solutionIADesc:
      "The future of technology belongs to artificial intelligence. We firmly believe in this idea and, consequently, combine advanced algorithms and extensive data analysis to develop solutions with significant AI support.",
    solutionsIALis1: "AI algorithms",
    solutionsIALis2: "Automation",
    solutionsIALis3: "Predictive analysis",

    conseil: "Technology and Digital Strategy Consulting",
    conseilDesc:
      "We offer consulting services to help businesses or individuals develop technology strategies, choose the right technological solutions, or digitally transform their operations.",
    conseilLis1: "Digital strategy",
    conseilLis2: "Technology audit",
    conseilLis3: "Digital transformation",

    knowMore: "Learn more about our services",

     /* Collaboration home (integrationOne)*/

     tireCollab : "Our Partnerships",
     sloganCollab : "Success is a collective effort, which is why we work hand in hand with other companies.",


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
    
      /* Services pages (img content troi et three), les titres genre "developpement web" sont importer depuis la home */

      servicesN : "Expertise at Your Service",
      servicesNslogan : "We offer a wide range of tailored IT services, from application or website development to consulting and machine learning.",

      DevelopementWebTexte : "We provide customized web development solutions to meet the unique needs of your business. Whether you need a sleek showcase site, a dynamic e-commerce platform, or an innovative web application, our team of experts is here to turn your ideas into reality.",
      DWiconetitre1 : "Optimization and SEO",
      DWiconetexte1 : "Improving your site's visibility and optimizing performance.",
      DWiconetitre2 : "Maintenance and Support",
      DWiconetexte2 : "Ongoing assistance to ensure the smooth operation of your web solutions.",

      DevelopementmobileTexte : "Whether it's an iOS, Android, or cross-platform application, our team designs innovative and high-performance solutions that drive your business to success.",
      DMiconetitre1: "UX/UI Design",
      DMiconetexte1: "Creating intuitive and aesthetic mobile interfaces for an optimal user experience.",
      DMiconetitre2: "Maintenance and Support",
      DMiconetexte2: "Regular monitoring and updates to ensure the smooth functioning of your application.",

      DevelopementFullStackTexte: "Whether you need a complete platform or a specific solution, our team masters both front-end and back-end development, ensuring seamless integration and optimal performance.",
      DFTiconetitre1: "API and Microservices Integration",
      DFTiconetexte1: "Connecting your application to external services and microservices for maximum flexibility.",
      DFTiconetitre2: "Security and Scalability",
      DFTconetexte2: "Implementation of rigorous security practices and scalable architectures to support your growth.",

      DevelopementLogicielPersoTexte: "If your projects do not fall under the services offered, we design custom software. Whether it's automating processes or creating tools specific to your industry.",
      DLPiconetitre1: "Needs Analysis",
      DLPiconetexte1: "In-depth understanding of your processes and industry to design perfectly adapted software.",
      DLPiconetitre2: "Systems Integration",
      DLPconetexte2: "Connect your software to your existing systems for a smooth transition and maximum efficiency.",

      DevelopementIATexte: "With AI, you can make faster and more informed decisions while reducing your operational costs. Our solutions are designed to grow with your business, offering effortless scalability and continuous innovation.",
      DIAiconetitre1: "Adaptation through Scalability",
      DIAiconetexte1: "These solutions can easily adapt to your business growth without requiring major revisions.",
      DIAiconetitre2: "Predictive Analysis",
      DIAconetexte2: "Your business can position itself proactively, predicting market trends and anticipating customer needs.",
      
      ConseilTexte: "We support you in optimizing your business by offering strategic and technological advice to leverage the latest innovations and optimize your processes.",
      CIconetitre1: "Digital Strategy",
      CIconetexte1: "Developing a tailored digital roadmap to guide your digital transformation and maximize your ROI.",
      CIconetitre2: "Technology Selection",
      CIconetexte2: "Recommending and integrating the most suitable technological tools for your needs and industry.",


    /*   Brand Logo */   
    notreÉquipe: "Our team",
    notreÉquipeSlo: "The people behind Codally",
    notreÉquipeDef:
      "The driving force of our company is our ability to address each of your IT requests in a personalized and tailored manner. To achieve this, each of our team members possesses a specialization unique to their role.",

    /*   Brand Logo */

    brandLogoTitre: "Our Partners",
    brandLogoDes:"We work closely with various companies to offer the best services.",

    /*Contactez-nous (contactFromTwo et contactPromoDarkbg)*/

  Email : "Email Us",
  EmailDes : "Simple drop us an email at codally.agency@outlook.com and you'll receive a reply within 24 hours.",

  Tel : "Give us a call",
  TelDes : "Give us a ring, we are standing by monday to friday from 9am to 5pm EST.",

  ContactTitre : "Discuss with our sales and marketing department team",
  ContactDes : "Are you interested in one of our services or projects? Or do you simply want to apply to join us? Let us know by filling out this form.",

  Prenom : "First name",
  Nom : "Last name",
  Tel : "Phone",
  mail : "Email",
  msg : "Message",

  EnvoyerFor : "Submit your message",

  /* Nos projects (FeatureThree ) */

  Slo : "The future of your business starts here",
  SloDef : "In an increasingly connected world, our digital solutions push the boundaries of innovation, leveraging artificial intelligence, we create projects that turn your data into opportunities, optimize your processes, and anticipate the needs of tomorrow",

  WeblerTitre :"Webler",
  WeblerTitreDes :"Revolutionize Website Creation by Automating it with Artificial Intelligence and Then Fine-Tuning it According to Your Intentions",
  Icône1Titre :"Intuitive User Interface",
  Icône1Des :"We designed Webler to be accessible to everyone, regardless of technical skill level.",
  Icône2Titre :"Advanced Customization",
  Icône2Des :"We understand that every website is unique, which is why Webler offers extensive customization options to meet your specific needs.",

  TaskaiiITitre :"Taskaii",
  TaskaiiITitreDes :"Transform Your Time Management through a Fusion of Features Ranging from a Dynamic Task List to a Desktop Widget",
  Icône3Titre :"Dynamic Task List",
  Icône3Des :"Manage your tasks intuitively, with options to set duration, importance, deadlines, and prerequisites.",
  Icône4Titre :"Alerts and Notifications",
  Icône4Des :"Keep track of your commitments and deadlines with an effective reminder system.",

  ServiceClientèleTitre :"WhatsApp Chat for Clinics",
  ServiceClientèleDes :"Transform the patient experience with our instant customer service specifically designed for modern clinics",
  Icône5Titre :"Time and Resource Optimization",
  Icône1Des :"Our service reduces the workload of staff, allowing for better allocation of human resources.",
  Icône6Titre :"Data Security",
  Icône6Des :"With support from IntelChain, clinics benefit from enhanced data security, essential in the medical sector.",

  GestionclientèleTitre :"AI Telephone Assistance",
  GestionclientèleTitreDes :"Ease Patient Management with Dedicated AI Telephone Assistance for Clinics",
  Icône7Titre :"Improvement of Patient Experience",
  Icône7Des :"By simplifying the appointment scheduling process and providing personalized responses, we help improve overall patient satisfaction.",
  Icône8Titre :"Innovative Technology",
  Icône8Des :"Our service ensures a smooth and secure interaction, adhering to patient data confidentiality and security standards.",

  ServiceFactureTitre :"Billing System",
  ServiceFactureTitreDes :"Optimize Your Medical Management with Our Compliant and Integrated Billing System.",
  Icône9Titre :"Integration with Other Medical Systems",
  Icône9Des :"Our solution can be integrated with other systems used in your clinic, such as electronic medical records, for increased efficiency.",
  Icône10Titre :"Support and Training",
  Icône10Des :"We offer ongoing support and training to ensure your team is fully capable of using the system effectively.",

  /* Portfolio*/

  TitrePort :"Our portfolio",
  PortDes :"Credibly develop leading ideas rather than traditional strategic themes distributed for stand-alone web readiness",

    /* Footer */

    Souscription: "Our latest news, articles, and resources, we will sent to your inbox weekly",
    important: "Essential Page",
    apropo: "About Us",
    autre: "Other",

  },

  fr: {
    /* NavBarre*/
    service: "Services",
    Home: "Accueil ",
    contact: "Contactez-nous!",
    about: "Notre équipe",

    /* Home */
    slogan_1: "Transformez vos rêves en réalités technologiques",
    slogan_2: "#1 Solution Logicielle pour Votre Entreprise",
    description:
      "Nous sommes une firme de conseil technologique spécialisée dans le développement de solutions logicielles variées innovantes et personnalisées.",

    /*Page D'Accueil Project*/

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

      knowMore2: "En savoir plus sur nos projects",

    /* Service de la homme(TechTabs)*/

    titre: "Votre expertise, notre mission",
    titreDes:
      "Nous offrons un large éventail de services dans le domaine informatique, nous garantissons une réponse sur mesure à tous vos besoins allant du développement aux conseils en passant par le machine learning.",

    designWeb: "Développement Web",
    designWebDesc: "Réalisez vos projets en les rendant concrets et accessibles sur internet grâce à un site web. Notre différence, une équipe artistique pour des designs originaux, en contact direct avec vous et une équipe en développement web fournissant des solutions adaptatives et innovantes.",
    desginWebLis1: "Sites responsives.",
    desginWebLis2: "Intégration CMS",
    desginWebLis3: "Optimisation SEO",

    developpementApplication: "Développement d'Applications Mobiles",
    developpementApplicationDesc:
      "Vos idées d'application peuvent prendre forme sur Ios ou android avec notre expertise en développement de solution logicielle, nous combinons créativité et technologie de pointe pour créer des expériences mobiles exceptionnelles mais surtout sur mesure.",
    developpementApplicationLis1: "Apps iOS/Android",
    developpementApplicationLis2: "UI intuitive",
    developpementApplicationLis3: "Notifications push",

    DéveloppementFullStack: "Développement Full Stack",
    DéveloppementFullStackDesc:
      "La plupart des entreprises proposent de soi travailler côté client soit côté serveur, cependant nous vous proposons de maîtrisez l'intégralité de votre projet avec notre expertise en développement Full Stack en combinant compétences front-end et back-end.",
    DéveloppementFullStackLis1: "Front-end & Back-end",
    DéveloppementFullStackLis2: "Frameworks modernes",
    DéveloppementFullStackLis3: "Gestion de bases de données",
    logicielsPerso: "Développement de Logiciels Personnalisés",
    logicielsPersoDesc:
      "Nous redéfinissons les solutions logicielles avec une personnalisation poussée à son paroxysme puisque nous garantissons des produits parfaitement adaptés à vos besoins spécifiques.",
    logicielsPersoLis1: "Solutions sur mesure",
    logicielsPersoLis2: "Support technique",
    logicielsPersoLis3: "Fonctionnalités spécifiques",

    solutionIA: "Solutions en Intelligence Artificielle et deep Learning",
    solutionIADesc:
      "L’avenir technologique appartient à l’intelligence artificielle, nous croyons fermement en cette idée et par conséquent nous combinons des algorithmes avancés et des analyses de données conséquentes pour développer des solutions avec un support IA non négligeable.",
    solutionsIALis1: "Algorithmes IA ",
    solutionsIALis2: "Automatisation",
    solutionsIALis3: "Analyse prédictive",

    conseil: "Conseil en Technologie et Stratégie Digitale",
    conseilDesc:
      "Nous offrons un service de conseil pour aider les entreprises ou les particuliers à élaborer des stratégies technologiques, à choisir les bonnes solutions technologiques ou à transformer numériquement leurs opérations.",
    conseilLis1: "Stratégie digitale",
    conseilLis2: "Audit technologique",
    conseilLis3: "Transformation digitale",

    knowMore: "En savoir plus sur nos services",

     /* Collaboration home (integrationOne)*/

     tireCollab: "Nos Partenariats",
     sloganCollab: "La réussite est un effort collectif, c'est pourquoi nous travaillons de paires avec d'autre entreprises ",


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

    notreÉquipe: "Notre équipe",
    notreÉquipeSlo: "Les personnes derrière Codally",
    notreÉquipeDef:
      "Le fer de lance de notre entreprise est notre capacité à pouvoir répondre à chacune de vos demandes informatique de manière personnalisée et adaptée. Pour ce faire, chacun de nos membres possèdant une spécialisation lui entant propre.",

    /* Services (navbarre) */

    servicesN: "L'expertise à Votre Service",
    servicesNslogan:
      "Nous offrons un large éventail de services sur mesure dans le domaine informatique, allant du développement d'appplication ou de site aux conseils en passant par le machine learning.",

    DevelopementWebTexte : "Nous offrons des solutions de développement web personnalisées pour répondre aux besoins uniques de votre entreprise. Que vous ayez besoin d'un site vitrine élégant, d'une plateforme e-commerce dynamique, ou d'une application web innovante, notre équipe d'experts est là pour transformer vos idées en réalité.",
    DWiconetitre1 : "Optimisation et SEO",
    DWiconetexte1 : "Amélioration de la visibilité de votre site et optimisation des performances",
    DWiconetitre2 : "Maintenance et support",
    DWiconetexte2 : "Assistance continue pour garantir le bon fonctionnement de vos solutions web.",

    DevelopementmobileTexte : "Qu'il s'agisse d'une application iOS, Android, ou multiplateforme, notre équipe conçoit des solutions innovantes et performantes qui propulsent votre activité vers le succès.",
    DMiconetitre1 : "Conception UX/UI",
    DMiconetexte1 : "Création d'interfaces mobiles intuitives et esthétiques pour une expérience utilisateur optimale",
    DMiconetitre2 : "Maintenance et support",
    DMiconetexte2 : "Suivi et mises à jour régulières pour garantir le bon fonctionnement de votre application.",

    DevelopementFullStackTexte : "Que vous ayez besoin d'une plateforme complète ou d'une solution spécifique, notre équipe maîtrise aussi bien le front-end que le back-end, garantissant une intégration fluide et des performances optimales",
    DFTiconetitre1 : "Intégration API et Microservices",
    DFTiconetexte1 : "Connexion de votre application à des services externes et à des microservices pour une flexibilité maximale",
    DFTiconetitre2 : "Sécurité et Scalabilité",
    DFTconetexte2 : " Implémentation de pratiques de sécurité rigoureuses et d'architectures évolutives pour soutenir votre croissance",

    DevelopementLogicielPersoTexte : "Dans le cas ou vos projets ne constitue pas un des services proposer,nous concevons des logiciels sur mesure. Qu'il s'agisse d'automatiser des processus ou de créer des outils spécifiques à votre secteur",
    DLPiconetitre1 : "Analyse des Besoins",
    DLPiconetexte1 : "Compréhension approfondie de vos processus de votre secteur pour concevoir un logiciel parfaitement adapté.",
    DLPiconetitre2 : "Intégration Systèmes",
    DLPconetexte2 : "Connectez votre logiciel à vos systèmes existants pour une transition fluide et une efficacité maximale",

    DevelopementIATexte : "Grâce à l'IA, vous prenez des décisions plus rapides et plus éclairées, tout en réduisant vos coûts opérationnels, nos solutions sont conçues pour évoluer avec votre entreprise, vous offrant une scalabilité sans effort et une innovation continue.",
    DIAiconetitre1 : "L'adaptation via la Scalabilité",
    DIAiconetexte1 : "Ces solutions peuvent facilement s'adapter à la croissance de votre entreprise sans nécessiter de révisions majeures.",
    DIAiconetitre2 : "Analyse prédictive",
    DIAconetexte2 : "Votre entreprise peut se positionner de manière proactive, vous pouvez prédire les évolutions du marché et anticiper les besoins de vos clients",

    ConseilTexte : "Nous vous accompagnons dans l'optimisation de votre entreprise en vous proposant des conseils stratégiques et technologiques afin de tirer parti des dernières innovations en la matière pour optimiser vos processus",
    CIconetitre1 : "Stratégie Digitale",
    CIconetexte1 : "Élaboration d'une feuille de route digitale sur mesure pour guider votre transformation numérique et maximiser votre ROI.",
    CIconetitre2 : "Sélection de Technologies",
    CIconetexte2 : " Recommandation et intégration des outils technologiques les mieux adaptés à vos besoins et à votre secteur",
    
  /* Brand Logo */

    brandLogoTitre: "Nos collaborateurs",
    brandLogoDes:
      "Nous travaillons conjointement avec divers société afin de proposer les meilleurs services.",

  /*Contactez-nous*/

  Email : "Envoyez-nous un e-mail",
  EmailDes : "Envoyez-nous simplement un e-mail à codally.agency@outlook.com et vous recevrez une réponse dans les plus brefs délais.",

  Tel : "Appelez-nous",
  TelDes : "Appelez-nous, nous sommes disponibles du lundi au vendredi de 10h à 18h (UTC+02:00).",
  ContactTitre : "Discutez avec notre équipe du département des ventes et du marketing",
  ContactDes : "Un de nos services ou de nos projets vous intéresse?  Voulez-vous simplement postuler chez nous, faites le nous savoir en remplissant ce formulaire",

  Prenom : "Prénom",
  Nom : "Nom",
  Tel : "Téléphone",
  mail : "Émail",
  msg : "Message",

  EnvoyerFor : "Envoyer votre message",

  /* Nos projects (FeatureThree) */

  Slo : "Le futur de votre entreprise commence ici",
  SloDef : "Dans un monde toujours plus connecté, nos solutions numériques repoussent les limites de l’innovation, grâce à l’intelligence artificielle, nous créons des projets qui transforment vos données en opportunités, optimisent vos processus et anticipent les besoins de demain",

  WeblerTitre :"Webler",
  WeblerTitreDes :"Révolutionnez la Création de Sites Web en l'automatisant avec l'Intelligence Artificielle pour ensuite le peaufiné selon vos intentions",
  Icône1Titre :"Interface utilisateur intuitive",
  Icône1Des :"Nous avons conçu Webler pour être accessible à tous, quel que soit le niveau de compétence technique.",
  Icône2Titre :"Personnalisation avancée",
  Icône2Des :"Nous comprenons que chaque site web est unique, c'est pourquoi Webler offre des options de personnalisation étendues pour répondre à vos besoins spécifiques.",

  TaskaiiITitre :"Taskaii",
  TaskaiiITitreDes :"Métamorphoser votre Gestion du Temps via une fusion de fonctionnalité allant d'une liste de tâche dynamique à un widget de bureau",
  Icône3Titre :"Liste de Tâches Dynamique ",
  Icône3Des :"Gérez vos tâches de manière intuitive, avec des options pour définir la durée, l'importance, l'échéance et les prérequis.",
  Icône4Titre :"Alertes et Notifications",
  Icône4Des :"Assurez le suivi de vos engagements et échéances avec un système de rappels efficace.",

  ServiceClientèleTitre :"Chat WhatsApp pour Cliniques",
  ServiceClientèleDes :"Transformez l'expérience patient avec notre service clientèle instantané spécialement conçu pour les cliniques modernes",
  Icône5Titre :"Optimisation du Temps et des Ressources",
  Icône5Des :"Notre service allège la charge de travail du personnel, permettant une meilleure allocation des ressources humaines.",
  Icône6Titre :"Sécurité des Données",
  Icône6Des :"Avec le soutien d'IntelChain, les cliniques bénéficient d'une sécurité de données renforcée essentielle dans le secteur médical.",

  GestionclientèleTitre :"Assistance Téléphonique",
  GestionclientèleTitreDes :"Facilité la gestion des patient via une assistance téléphonique IA dédiée pour cliniques",
  Icône7Titre :"Amélioration de l'Expérience Patient",
  Icône7Des :"En simplifiant le processus de prise de rendez-vous et en fournissant des réponses personnalisées, nous aidons à améliorer la satisfaction globale des patients.",
  Icône8Titre :"Technologie Innovante ",
  Icône8Des :"Notre service garantit une interaction fluide et sécurisée, respectant la confidentialité et les normes de sécurité des données des patients.",

  ServiceFactureTitre :"Systeme de facturation",
  ServiceFactureTitreDes :"Optimisez votre gestion médicale avec notre système de facturation conforme et intégré.",
  Icône9Titre :"Intégration avec d'Autres Systèmes Médicaux",
  Icône9Des :"Notre solution peut être intégrée avec d'autres systèmes utilisés dans votre clinique, tels que les dossiers médicaux électroniques, pour une efficacité accrue.",
  Icône10Titre :"Support et Formation ",
  Icône10Des :"Nous offrons un support continu et des formations pour vous assurer que votre équipe est pleinement capable d'utiliser le système efficacement.",

  /* Portfolio*/

  TitrePort :"Notre portfolio",
  PortDes :"Développez de manière crédible des idées de premier plan plutôt que des thèmes stratégiques traditionnels distribués pour une préparation au web autonome",


  /* Footer */
  
  Souscription: "Nos dernières actualités, articles et ressources vous seront envoyés par e-mail chaque semaine",

  important: "Page essentiel",
  apropo: "À propos de nous",
  autre: "Autre",

  },
};

const i18n = createI18n({
  locale: "en",
  messages,
});

export default i18n;
