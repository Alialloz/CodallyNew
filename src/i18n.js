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
      "We are a technology consulting firm specializing in the development of innovative and customized diverse software solutions.",

    /* Page d'acceuil Project*/

    Project: "Our projects",
    projectDescription:
      "We work alongside you to turn ideas into reality, take a look at some of the projects that define our commitment to innovation and creative collaboration.",

    webler: "Webler",
    weblerDes:
      "Creating a website can be intimidating. This is where Webler comes into play by offering you a complete website creation software.",

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

      knowMore2: "Click on the images to learn more about our projects",

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
    experienceDesc: "Choosing Codally means benefiting from customized solutions tailored to your needs, with expertise in web, mobile, and software development. We ensure performance and seamless software integration, while providing continuous support to guarantee your success.",

    expertAroundWorld: "Multidisciplinary team",
    bestPractice: "Innovative solutions",
    digitalConference: "Multidisciplinary Team",
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
  "EmailDesc": "Simply drop us an email at {email} and you'll receive a response in no time.",
  Tel : "Give us a call",
  TelDes : "Give us a ring, we are standing by monday to friday from 9am to 5pm EST.",

  ContactTitre : "Contact our team or our Marketing division",
  ContactDes : "Are you interested in one of our services or projects, or would you like to apply to join our team? Let us know by filling out this form.",

  Prenom : "First name",
  Nom : "Last name",
  Tel : "Phone",
  mail : "E-mail",
  mailPlaceholder: "E-mail",
  msg : "Message",
  msgPlaceholder : "Enter your message here",

  EnvoyerFor : "Submit your message",

  /* Nos projects (FeatureThree ) */

  Slo : "The future of your business starts here",
  SloDef : "In an increasingly connected world, our digital solutions push the boundaries of innovation, leveraging artificial intelligence, we create projects that turn your data into opportunities, optimize your processes, and anticipate the needs of tomorrow.",

  WeblerTitre :"Webler",
  WeblerTitreDes :"Revolutionize Website Creation by Automating it with Artificial Intelligence and Then Fine-Tuning it According to Your Intentions",
  Icône1Titre :"Intuitive User Interface",
  Icône1Des :"We designed Webler to be accessible to everyone, regardless of technical skill level.",
  Icône2Titre :"Advanced Customization",
  Icône2Des :"We understand that every website is unique, which is why Webler offers extensive customization options to meet your specific needs.",

  TaskaiiITitre :"Taskaii",
  TaskaiiITitreDes :"Transform Your Time Management through a Fusion of Features Ranging from a Dynamic Task List to a Desktop Widget.",
  Icône3Titre :"Dynamic Task List",
  Icône3Des :"Manage your tasks intuitively, with options to set duration, importance, deadlines, and prerequisites.",
  Icône4Titre :"Alerts and Notifications",
  Icône4Des :"Keep track of your commitments and deadlines with an effective reminder system.",

  ServiceClientèleTitre :"WhatsApp Chat for Clinics",
  ServiceClientèleDes :"Transform the patient experience with our instant customer service specifically designed for modern clinics.",
  Icône5Titre :"Time and Resource Optimization",
  Icône5Des :"Our service reduces the workload of staff, allowing for better allocation of human resources.",
  Icône6Titre :"Data Security",
  Icône6Des :"With support from IntelChain, clinics benefit from enhanced data security, essential in the medical sector.",

  GestionclientèleTitre :"AI Telephone Assistance",
  GestionclientèleTitreDes :"Ease Patient Management with Dedicated AI Telephone Assistance for Clinics.",
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
   
  /* NewBlogs page principale */

   OurLatestNewsandBlogs: "Our Latest News and Blogs",
   OurLatestNewsandBlogsDes: "Discover our latest news and articles to stay updated on trends, projects, and key initiatives from our team. Dive into inspiring and informative content!",

   OurLatestNewMotsClé1:"Artificial Intelligence",
   OurLatestNewMotsClé2:"Partnerships",
   OurLatestNewMotsClé3:"Innovation",
   OurLatestNewMotsClé4:"Productivity",
   OurLatestNewMotsClé5:"Personalization",
   OurLatestNewMotsClé6:"Responsibility",
   OurLatestNewMotsClé7:"Growth",
   OurLatestNewMotsClé8:"Home Automation",
   OurLatestNewMotsClé9:"Education",
   
   newsTitre1 : "Codally: One Year of Innovation and Growth",
   newsDes1 :"We are celebrating our first anniversary! We are proud to have launched our educational AI platform and formed strategic partnerships in home automation within such a short period.",
   newsDate1 :"October 15, 2024",
   newEquipe1 :"The entire Codally team!",
   
   newsTitre2 : "Codally: A Pioneer of AI in Business Software",
   newsDes2 :"Our ambition is clear: to transform business efficiency with custom AI solutions, pushing the limits of automation while offering tools that address the challenges of tomorrow.",
   newsDate2 :"November 4, 2024",
   
   newsTitre3 : "Revolutionizing Home Automation with AI: Codally Partners with DbAtt and Ida Engineering",
   newsDes3 :"Together with our partners DbAtt and Ida Engineering, we are redefining the smart home, using AI to enhance security, energy efficiency, and make user interfaces more intuitive and easy to use.",
   newsDate3 :"July 26, 2024",
   
   newsTitre4 : "AI at the Heart of Education: Codally at the Entretiens Jacques Cartier",
   newsDes4 :"At the Entretiens Jacques Cartier, we shared our vision of AI in education, showing how our solutions personalize learning and modernize teaching methods to make them more effective.",
   newsDate4 :"October 19, 2024",
   
   newsTitre5 : "Artificial Intelligence (AI) in Daily Life: A Major Asset with the Right Precautions",
   newsDes5 :"We firmly believe that AI can improve our daily lives – whether it’s boosting productivity, personalizing customer experiences, or enhancing healthcare – as long as it is used ethically and responsibly.",
   newsDate5 :"August 8, 2024",

    /* NewBlogs artcicle 1 à 5 */

    article1Intro: "As we celebrate our first anniversary, Codally would like to thank its partners and teams for their outstanding contribution to our success. This first year has been marked by significant achievements and sustained growth.",
    article1objectfisIntro: "Our key achievements this year:",
    article1objectfis1: "The launch of our educational AI platform",
    article1objectfis2: "Strategic partnerships in the home automation sector",
    article1objectfis3: "Expansion of our AI talent team",
    article1conclusion: "We are proud of how far we’ve come and excited about the innovations ahead. Every project, collaboration, and interaction has helped build what we are today, a rapidly growing tech company driven by the desire to make a difference. We have learned, grown, and evolved, and this is just the beginning! Codally's future looks bright, with new, exciting challenges on the horizon.",
    article1Citation: "Your work is going to fill a large part of your life, and the only way to be fully satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    article1NomPrenom: "A big thank you for your support!",
    article1desPoste: "A huge thank you to everyone who believed in us and has been with us from the start, you are at the heart of this success.",
  
    article2Intro: "At Codally, our ambition is clear: to become the undisputed leader in integrating AI into business software. Our innovative approach aims to radically transform business efficiency and competitiveness.",
    article2objectfisIntro: "Our vision is summarized in three key areas:",
    article2objectfis1: "Developing tailored AI solutions for each industry sector",
    article2objectfis2: "Optimizing business processes through machine learning",
    article2objectfis3: "Creating a new generation of intelligent and adaptive tools",
    article2conclusion: "By pushing the boundaries of applied AI, Codally is committed to being the engine of digital transformation for businesses, providing solutions that anticipate and address tomorrow’s challenges.",
    article2desPoste: "Ali Nayeri is the CEO of Codally, an expert in project management and leadership, with excellent communication and organizational skills, while being innovation-oriented and focused on the success of his teams",
  
    article3Intro: "Codally is taking a new step in home automation innovation by partnering with DbAtt and Ida Engineering. This strategic collaboration aims to create more intuitive and efficient smart home systems, powered by AI.",
    article3objectfisIntro: "Our shared goals are:",
    article3objectfis1: "Optimizing home security and energy efficiency",
    article3objectfis2: "Developing more natural user interfaces",
    article3objectfis3: "Creating a responsive and intelligent home automation ecosystem",
    article3conclusion: "Through these partnerships, Codally is positioned at the forefront of the smart home revolution, offering solutions that redefine comfort and home management.",
    article3desPoste: "Oswald Essongue is a Full Stack Developer with solid expertise in web development, with a great problem-solving ability and a strong spirit of innovation, always ready to adapt to new technologies",
  
    article4Intro: "During the Jacques Cartier Talks 2024, which took place from October 16 to 18 in Laval, Montreal and Longueuil, Codally participated in high-level Franco-Canadian exchanges. This event, bringing together international experts, focused on key interdisciplinary themes, including artificial intelligence and its application in various fields, notably health, education and biosurveillance",
    article4objectfisIntro: "This conference provided opportunities for several initiatives:",
    article4objectfis1: "Sharing our vision of AI in education",
    article4objectfis2: "Discussing the latest technological advances",
    article4objectfis3: "Strengthening our network of partners",
    article4conclusion: "By presenting its innovations in artificial intelligence applied to education, the team strengthened its position as a pioneer in this field, while expanding its network of partners and opening up to new collaboration opportunities. This event confirmed Codally's central role in the digital transformation of teaching methods, laying the foundations for a more personalized and effective education for the future",
    article4desPoste: "Morgan is the co-founder and data scientist at Codally. Holder of a dual master's degree in artificial intelligence and big data, he has specialized in data science, with solid expertise in machine learning and deep learning. Within Codally, he oversees AI projects and leads the dedicated teams",
  
    article5Intro: "AI has proven to be a powerful tool for optimizing processes and increasing productivity. By automating repetitive tasks, it allows teams to focus on more complex and stimulating challenges. Personalizing the customer experience.",
    article5Intro2: "In the e-commerce sector, AI is transforming the customer experience, making it more personalized and intuitive. Through predictive analytics, AI-based systems can recommend products suited to individual customer preferences. AI plays a crucial role in healthcare, enabling faster and more accurate diagnoses. It facilitates the analysis of health data, thereby contributing to better patient care.",
    article5Citation: "Artificial intelligence and automation, by optimizing processes, reducing errors, and increasing the speed and quality of operations, could boost global productivity by 0.8 to 1.4% per year by 2025.",
    article5objectfisIntro: "To get the most out of AI while minimizing risks, here are some recommendations:",
    article5objectfis1: "Stay updated on AI technologies and their applications in your field through continuous training.",
    article5objectfis2: "Take the time to understand the operation, capabilities, and limitations of each AI application before using it.",
    article5objectfis3: "Implement a clear policy for the use of AI tools, including verification procedures to guide their use.",
    article5objectfis4: "Ensure that AI use complies with privacy and data protection standards.",
    article5objectfis5: "Clearly explain to your clients or collaborators how and why you are using AI.",
    article5conclusion: "In conclusion, AI offers considerable opportunities to improve our daily lives and professional efficiency. However, its use must be guided by responsible practices to reap its benefits while minimizing potential risks. At Codally Montreal, we are committed to promoting an ethical and effective use of AI for the benefit of all.",
    article5desPoste: "Julien Blancon is a passionate Full Stack Developer, eager to learn, with the ability to quickly develop new skills to take on new challenges",  
  
  /*Nos offres empplois */

 offreEmploi : "Discover our job openings!",
 descritptionOffreEmploi: "Whether you are looking for an opportunity in IT or wishing to join a stimulating and friendly work environment, we have something to offer for everyone.",

 nosEmplois: "Our Job Openings",
 emploidispo: "Currently Available Positions at Codally",
 emploiDispoDes: "We offer flexibility, exciting projects, and a team of passionate professionals to support your growth. Develop your skills while contributing to cutting-edge initiatives!",
 
 horaireEmploie :"Remote - Full Time",
 postuleEmploi : "Apply Now",
 payeEmploie :"Depending on the contracts",


  pourquoiNousRejoindre: "Why join us?",
  descritpionPk: "Joining our team means becoming part of a diverse and innovative environment where every idea matters, and you’ll have the opportunity to develop your skills alongside passionate colleagues.",

  titreRaison1: "Remote work",
  descriptionRaison1: "Whether at home or on the go, you’ll have access to all the tools and resources needed to stay productive. This flexibility promotes a better work-life balance.",

  titreRaison2: "Flexible working hours",
  descriptionRaison2: "We believe in the importance of work-life balance. Whether you’re an early riser or a night owl, you can organize your schedule to maximize productivity while honoring personal commitments.",

  titreRaison3: "Friendly and skilled team",
  descriptionRaison3: "Joining our team means becoming part of a group of passionate, skilled professionals who support each other. Your professional growth is our priority!",

  titreRaison4: "Diverse and innovative projects",
  descriptionRaison4: "Our projects span across various fields, from cybersecurity to software for the medical sector. We encourage innovation and bold ideas.",

 /*Jobs en détaile (1 et 2)*/

 salaireAnnuel :"Annual Salary",

 a:"Ethical AI Engineer",
  salaireAnnuel :"Annual Salary",
  detailJob :"Job Details", 
  responsabilitéDuJob :"Job Responsibilities",
  necésitéduJob :"Job Requirements",
  expérieunceEt :"Skills and Experience",
  résuméPoste: "Job Overview",
  localisation:"Location:",
  nomJob:"Job Title:",
  Volumehoraire:"Weekly Hours:",
  tauxhoraire:"Hourly Rate:",
  salaire:"Salary:",

  descriptionPoste:"At Codally, the project manager is responsible for overseeing the entire lifecycle of technical projects, from planning to delivery. This role involves managing resources, ensuring the quality of deliverables, and guaranteeing client satisfaction. In collaboration with the development team, the project manager acts as a strategic link between client needs and technical solutions.",
  descriptionPoste2:"The Ethical AI Engineer is responsible for developing and deploying artificial intelligence (AI) systems that adhere to rigorous ethical standards. This crucial role ensures that algorithms are transparent, fair, and free from bias, taking into account the social, legal, and ethical impacts of deployed technologies.",

  Responsabilit1poste:"Define project goals and milestones, create schedules, and allocate necessary resources.",
  Responsabilit2poste:"Facilitate communication between developers, designers, and other stakeholders.",
  Responsabilit3poste:"Monitor project progress, resolve issues, and adjust plans as needed.",
  Responsabilit4poste:"Communicate progress, gather feedback, and ensure client satisfaction.",
  Responsabilit5poste:"Ensure products meet quality standards and client expectations.",
  Responsabilit1poste2:"Develop models that follow best ethical practices and conduct compliance audits.",
  Responsabilit2poste2:"Analyze data and algorithms to detect and correct potential biases.",
  Responsabilit3poste2:"Organize internal training sessions on ethical AI best practices.",
  Responsabilit4poste2:"Document and report on ethical issues observed in AI processes.",
  Responsabilit5poste2:"Work with clients, regulators, and other entities to promote responsible AI.",

  Exigence1Poste:"Degree in project management, computer science, or engineering.",
  Exigence2Poste:"At least 2 years of experience in IT project management, ideally in the information technology sector.",
  Exigence3Poste:"Project management certifications (PMP, PRINCE2) are appreciated.",
  Exigence1Poste2:"Proficiency in AI tools (TensorFlow, PyTorch...) and languages such as Python.",
  Exigence2Poste2:"Ability to document and clearly explain ethical issues.",
  Exigence3Poste2:"Knowledge of industry standards and regulations related to AI ethics.",

  Compétence1poste:"Proficiency in Agile/Scrum or Waterfall methodologies.",
  Compétence2poste:"Ability to motivate teams and manage projects by coordinating the efforts of diverse profiles.",
  Compétence3poste:"Ability to anticipate and manage risks to meet deadlines and budgets.",
  Compétence1poste2:"Bachelor’s or Master’s in computer science, AI, data science, or equivalent.",
  Compétence2poste2:"Strong ethical judgment and ability to collaborate with diverse teams to integrate ethical values.",
  Compétence3poste2:"Ability to adapt and innovate while respecting ethical standards.",

  /* Portfolio*/

  TitrePort: "Our services directly within your company!",
  PortDes: "We offer tailored solutions to optimize your internal processes through artificial intelligence. What sets us apart is our ability to combine technical expertise with understanding of your challenges.",
  
  Titrepourquoi1: "Codally consultant",
  pourquoi1: "Our project manager consultants or developers are available for your company's development. You can also choose their effective working time whether it's part-time, full-time or consulting.",
  pourquoi1raison1: "Personalized and flexible support",
  pourquoi1raison2: "Diverse expertise for comprehensive support",
  pourquoi1raison3: "Internal resource optimization",
 
  Titrepourquoi2: "AI solutions for internal processes",
  pourquoi2: "We also offer AI solutions to improve your internal processes by automating repetitive tasks and reducing errors. We develop customized and adapted processes to improve efficiency and decision-making.",
  pourquoi2raison1: "Automation of repetitive tasks",
  pourquoi2raison2: "Error reduction and quality improvement",
  pourquoi2raison3: "Decision-making facilitated through real-time data analysis",
 
  Titrepourquoi3: "Analysis and advice",
  pourquoi3: "At Codally, we optimize your operations through in-depth analysis and personalized advice. By providing an external perspective and sharp expertise, we identify inefficiencies and propose innovative solutions.",
  pourquoi3raison1: "Continuous improvement for sustainable performance",
  pourquoi3raison2: "External perspective and sharp expertise",
  pourquoi3raison3: "Customized operations optimization",
    /* Footer */

    Souscription: "Your trusted partner in computer solutions. Innovation, reliability and expertise to serve your technological needs.",
    important: "Essential Page",
    apropo: "About Us",
    autre: "Contact",

    /* PopUp */
    successTitle: "Thank you!",
    successMessage: "Your message has been sent successfully. We will get back to you shortly.",
    okButton: "OK",
  },

  fr: {
    /* NavBarre*/
    service: "Services",
    Home: "Accueil ",
    contact: "Contactez-nous!",
    about: "Notre équipe",
    career: "Offre d'emplois",
    News: "Actualités",

    /* Home */
    slogan_1: "Transformez vos rêves en réalités technologiques",
    slogan_2: "#1 Solution Logicielle pour Votre Entreprise",
    description:
      "Nous sommes une firme de conseil technologique spécialisée dans le développement de solutions logicielles variées innovantes et personnalisées.",

    /*Page D'Accueil Project*/

    Project: "Nos projets",
    projectDescription:
      "Nous transformons les idées en réalité à vos côtés, parcourez nos projets qui définissent notre engagement envers l'innovation et les collaborations créatives.",

    webler: "Webler",
    weblerDes:
      "La création d'un site web peut être intimidant. C'est ici que Webler entre en jeu en vous proposant un logiciel de création de site web complet.",

    Taskaii: "Taskaii",
    TaskaiiDes:"Imaginez une application de bureau conçue pour améliorer votre productivité. Via une liste de tâches avancée avec un agenda intégré, Taskai est le logiciel parfait.",

    serviceClient: "Chat WhatsApp pour Cliniques",
    serviceClientDes:
      "Formé à partir de données médical, notre service client WhatsApp est spécialement conçu pour les cliniques afin de faciliter la prise de rendez-vous.",

    assistance: "Assistante Téléphonique IA ",
    assistanceDes:
      "Offrir un service clientèle de qualité pour les patients est essentiel pour leur assurer une expérience positive et efficace, c'est ce qu'offre notre logiciel.",

    facturation: "Logiciel de facturation",
    facturationDes:
      "La gestion des facturations est un aspect critique qui nécessite efficacité et conformité. Notre service offre une solution sur mesure pour les cliniques médicales.",

      knowMore2: "Cliquer sur les images pour en savoir plus sur nos projets",

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
     sloganCollab: "La réussite est un effort collectif, c'est pourquoi nous travaillons de paires avec d'autre entreprises.",


    /* à propos de nous (home/About_image)*/

    whyChooseUs: "Pourquoi Nous Choisir?",
    experience: "Innovons et réussissons ensemble.",
    experienceDesc: "Choisir Codally, c'est profiter de solutions sur mesure adaptées à vos besoins, avec une expertise en développement web, mobile et logiciel. Nous assurons performance et une intégration fluide du logiciel tout en vous accompagnant avec un support continu pour garantir votre succès.",

    expertAroundWorld: "L'expertise mondiale à votre service.",
    bestPractice: "Des solutions optimales pour chaque entreprise.",

    digitalConference: "Équipe pluridisciplinaire",
    greatSpeakers: "Solutions innovantes",
    eventManagement: "Satisfaction client garantit",
    funOnEvent: "Adaptation de nos services",
    salesCompliance: "Conformité des prestations",
    showcasingSuccess: "Conseils pertinents",
    learnMore: "En savoir plus sur notre équipe",

    /*   Notre équipe (OurTeam) */

    notreÉquipe: "Notre équipe",
    notreÉquipeSlo: "Les personnes derrière Codally",
    notreÉquipeDef:
      "Le fer de lance de notre entreprise est notre capacité à pouvoir répondre à chacune de vos demandes informatique de manière personnalisée et adaptée. Pour ce faire, chacun de nos membres possède une spécialisation lui entant propre.",

    /* Services (navbarre) */

    servicesN: "L'expertise à Votre Service",
    servicesNslogan:
      "Nous offrons un large éventail de services sur mesure dans le domaine informatique, allant du développement d'appplication ou de site aux conseils en passant par le machine learning.",

    DevelopementWebTexte : "Nous offrons des solutions de développement web personnalisées pour répondre aux besoins uniques de votre entreprise. Que vous ayez besoin d'un site vitrine élégant, d'une plateforme e-commerce dynamique, ou d'une application web innovante, notre équipe d'experts est là pour transformer vos idées en réalité.",
    DWiconetitre1 : "Optimisation et SEO",
    DWiconetexte1 : "Amélioration de la visibilité de votre site et optimisation des performances.",
    DWiconetitre2 : "Maintenance et support",
    DWiconetexte2 : "Assistance continue pour garantir le bon fonctionnement de vos solutions web.",

    DevelopementmobileTexte : "Qu'il s'agisse d'une application iOS, Android, ou multiplateforme, notre équipe conçoit des solutions innovantes et performantes qui propulsent votre activité vers le succès.",
    DMiconetitre1 : "Conception UX/UI",
    DMiconetexte1 : "Création d'interfaces mobiles intuitives et esthétiques pour une expérience utilisateur optimale.",
    DMiconetitre2 : "Maintenance et support",
    DMiconetexte2 : "Suivi et mises à jour régulières pour garantir le bon fonctionnement de votre application.",

    DevelopementFullStackTexte : "Que vous ayez besoin d'une plateforme complète ou d'une solution spécifique, notre équipe maîtrise aussi bien le front-end que le back-end, garantissant une intégration fluide et des performances optimales.",
    DFTiconetitre1 : "Intégration API et Microservices",
    DFTiconetexte1 : "Connexion de votre application à des services externes et à des microservices pour une flexibilité maximale.",
    DFTiconetitre2 : "Sécurité et Scalabilité",
    DFTconetexte2 : " Implémentation de pratiques de sécurité rigoureuses et d'architectures évolutives pour soutenir votre croissance.",

    DevelopementLogicielPersoTexte : "Dans le cas ou vos projets ne constitue pas un des services proposer,nous concevons des logiciels sur mesure. Qu'il s'agisse d'automatiser des processus ou de créer des outils spécifiques à votre secteur.",
    DLPiconetitre1 : "Analyse des Besoins",
    DLPiconetexte1 : "Compréhension approfondie de vos processus de votre secteur pour concevoir un logiciel parfaitement adapté.",
    DLPiconetitre2 : "Intégration Systèmes",
    DLPconetexte2 : "Connectez votre logiciel à vos systèmes existants pour une transition fluide et une efficacité maximale.",

    DevelopementIATexte : "Grâce à l'IA, vous prenez des décisions plus rapides et plus éclairées, tout en réduisant vos coûts opérationnels, nos solutions sont conçues pour évoluer avec votre entreprise, vous offrant une scalabilité sans effort et une innovation continue.",
    DIAiconetitre1 : "L'adaptation via la Scalabilité",
    DIAiconetexte1 : "Ces solutions peuvent facilement s'adapter à la croissance de votre entreprise sans nécessiter de révisions majeures.",
    DIAiconetitre2 : "Analyse prédictive",
    DIAconetexte2 : "Votre entreprise peut se positionner de manière proactive, vous pouvez prédire les évolutions du marché et anticiper les besoins de vos clients",

    ConseilTexte : "Nous vous accompagnons dans l'optimisation de votre entreprise en vous proposant des conseils stratégiques et technologiques afin de tirer parti des dernières innovations en la matière pour optimiser vos processus.",
    CIconetitre1 : "Stratégie Digitale",
    CIconetexte1 : "Élaboration d'une feuille de route digitale sur mesure pour guider votre transformation numérique et maximiser votre ROI.",
    CIconetitre2 : "Sélection de Technologies",
    CIconetexte2 : " Recommandation et intégration des outils technologiques les mieux adaptés à vos besoins et à votre secteur.",  
    
  /* Brand Logo */

    brandLogoTitre: "Nos collaborateurs",
    brandLogoDes:
      "Nous travaillons conjointement avec divers société afin de proposer les meilleurs services.",

  /*Contactez-nous*/

  Email : "Envoyez-nous un e-mail",
"EmailDesc": "Envoyez-nous simplement un e-mail à {email} et vous recevrez une réponse dans les plus brefs délais.",

  Tel : "Appelez-nous",
  TelDes : "Appelez-nous, nous sommes disponibles du lundi au vendredi de 10h à 18h (UTC+02:00).",
  ContactTitre : "Contactez notre équipe ou bien notre division Marketing",
  ContactDes : "Êtes-vous intéressé par l'un de nos services ou projets, ou souhaitez-vous postuler pour rejoindre notre équipe ? Faites-le nous savoir en remplissant ce formulaire.",

  Prenom : "Prénom",
  Nom : "Nom",
  Tel : "Téléphone",
  mail : "E-mail",
  mailPlaceholder: "E-mail",
  msg : "Message",
  msgPlaceholder : "Entrez votre message ici",

  EnvoyerFor : "Envoyer votre message",

   /* NewBlogs page principale */

    OurLatestNewsandBlogs: "Nos Dernières Actualités",
    OurLatestNewsandBlogsDes: "Découvrez nos dernières actualités et articles pour rester informé des tendances, projets et initiatives marquantes de notre équipe. Plongez dans des contenus inspirants et instructifs!",
    OurLatestNewMotsClé1:"Intelligence Artificielle ",
    OurLatestNewMotsClé2:"Partenariats",
    OurLatestNewMotsClé3:"Innovation",
    OurLatestNewMotsClé4:"Productivité",
    OurLatestNewMotsClé5:"Personnalisation",
    OurLatestNewMotsClé6:"Responsabilité",
    OurLatestNewMotsClé7:"Croissance",
    OurLatestNewMotsClé8:"Domotique",
    OurLatestNewMotsClé9:"Éducation",

    newsTitre1 : "Codally : Un an d'innovation et de croissance",
    newsDes1 :"Nous célébrons notre premier anniversaire ! Nous sommes fièrs d'avoir pu lancer notre plateforme d'IA éducative et d'avoir pu créer des partenariats stratégiques dans la domotique en si court laps de temps.",
    newsDate1 :"15 octobre 2024",
    newEquipe1 :"Toute l'équipe codally!",

    newsTitre2 : "Codally : Pionnier de l'IA dans les logiciels métiers",
    newsDes2 :" Notre ambition est claire, transformer l’efficacité des entreprises avec des solutions IA sur mesure, en repoussant les limites de l’automatisation tout en offrant des outils qui répondent aux défis de demain.",
    newsDate2 :"4 novembre 2024",

    newsTitre3 : "Révolutionner la domotique avec l'IA : Codally s'associe à DbAtt et Ida Engineering",
    newsDes3 :"Avec nos partenaires DbAtt et Ida Engineering, nous redéfinissons la maison intelligente, en utilisant l’IA pour améliorer la sécurité, l’efficacité énergétique et rendre les interfaces utilisateurs plus intuitives et faciles à utiliser",
    newsDate3 :"26 juillet 2024",

    newsTitre4 : "L'IA au cœur de l'éducation : Codally aux Entretiens Jacques Cartier",
    newsDes4 :"Lors des Entretiens Jacques Cartier, nous avons partagé notre vision de l’IA dans l'éducation, montrant comment nos solutions personnalisent l’apprentissage et modernisent les méthodes pédagogiques pour les rendre plus efficaces",
    newsDate4 :"19 octobre 2024",

    newsTitre5 : "L’intelligence artificielle (IA) au quotidien : un atout majeur avec les bonnes précautions",
    newsDes5 :" Nous croyons fermement que l’IA peut améliorer notre quotidien – que ce soit pour augmenter la productivité, personnaliser l'expérience client ou améliorer les soins de santé – à condition de l’utiliser de manière éthique et responsable.",
    newsDate5 :"8 août 2024",

    /* NewBlogs artcicle 1 à 5 */

    article1Intro :"Alors que nous célébrons notre premier anniversaire, Codally tient à remercier ses partenaires et ses équipes pour leur contribution exceptionnelle à notre succès. Cette première année a été marquée par des réalisations significatives et une croissance soutenue.",
    article1objectfisIntro :"Nos réussites clés de cette année:",
    article1objectfis1:"Le lancement de notre plateforme d'IA éducative",
    article1objectfis2:"Des partenariats stratégiques dans le secteur de la domotique",
    article1objectfis3:"Une expansion de notre équipe de talents en IA",
    article1conclusion :"Nous sommes fiers du chemin parcouru et enthousiastes à l'idée des innovations à venir. Chaque projet, chaque collaboration, chaque échange a contribué à construire ce que nous sommes aujourd'hui, une entreprise technologique en pleine croissance, animée par l’envie de changer les choses. Nous avons appris, grandi et évolué, et ce n'est que le début ! L'avenir de Codally s'annonce prometteur, avec de nouveaux défis passionnants à relever.",
    article1Citation :"Votre travail va occuper une grande partie de votre vie, et la seule manière d'être pleinement satisfait est de faire ce que vous croyez être un excellent travail. Et la seule manière de faire un excellent travail est d’aimer ce que vous faites.",
    article1NomPrenom :"Un grand merci pour votre soutien!",
    article1desPoste :"Un immense merci à toutes les personnes qui ont cru en nous et nous ont accompagnés depuis le début, vous êtes au cœur de cette réussite.",

    article2Intro :"Chez Codally, notre ambition est claire, devenir le leader incontesté de l'intégration de l'IA dans les logiciels métiers. Notre approche innovante vise à transformer radicalement l'efficacité et la compétitivité des entreprises.",
    article2objectfisIntro :"Notre vision se résume en trois axes:",
    article2objectfis1:"Développer des solutions IA sur mesure pour chaque secteur d'activité",
    article2objectfis2:"Optimiser les processus métiers grâce à l'apprentissage automatique",
    article2objectfis3:" Créer une nouvelle génération d'outils intelligents et adaptatifs",
    article2conclusion :"En repoussant les limites de l'IA appliquée, Codally s'engage à être le moteur de latransformation numérique des entreprises, offrant des solutions qui anticipent et répondent aux défis de demain.",
    article2desPoste :"Ali Nayeri est le CEO de codally, expert en gestion de projets et en leadership, avec une excellente capacité à communiquer et à organiser, tout en étant orienté vers l'innovation et la réussite des équipes.",

    article3Intro :"Codally franchit une nouvelle étape dans l'innovation domotique en s'associant à DbAtt et Ida Engineering. Cette collaboration stratégique vise à créer des systèmes de maison intelligente plus intuitifs et performants, propulsés par l'IA.",
    article3objectfisIntro :"Nos objectifs communs sont:",
    article3objectfis1:"Optimiser la sécurité et l'efficacité énergétique des foyers",
    article3objectfis2:"Développer des interfaces utilisateur plus naturelles",
    article3objectfis3:"Créer un écosystème domotique réactif et intelligent",
    article3conclusion :"Grâce à ces partenariats, Codally se positionne à l'avant-garde de la révolutiondomotique, offrant des solutions qui redéfinissent le confort et la gestion du foyer.",
    article3desPoste :"Oswald Essongue est un Full Stack Developer avec une solide expertise en développement web, doté d'une grande capacité de résolution de problèmes et d'un fort esprit d'innovation, toujours prêt à s'adapter aux nouvelles technologies.",

   
    article4Intro :"Lors des Entretiens Jacques Cartier 2024, qui se sont déroulés du 16 au 18 octobre à Laval, Montréal et Longueuil, Codally a participé à des échanges franco-canadiens de haut niveau. Cet événement, réunissant des experts internationaux, portait sur des thématiques interdisciplinaires clés, incluant l'intelligence artificielle et son application dans divers domaines, notamment la santé, l'éducation et la biosurveillance.",
    article4objectfisIntro :"Cette conférence a été une opportunité pour plusieurs occasions:",
    article4objectfis1:"Partager notre vision de l'IA dans l'éducation",
    article4objectfis2:"Échanger sur les dernières avancées technologiques",
    article4objectfis3:"Renforcer notre réseau de partenaires",
    article4conclusion :"En présentant ses innovations en matière d'intelligence artificielle appliquées à l'éducation, l'équipe a renforcé sa position de pionnier dans ce domaine, tout en élargissant son réseau de partenaires et en s'ouvrant à de nouvelles opportunités de collaboration. Cet événement a confirmé le rôle central de Codally dans la transformation numérique des méthodes pédagogiques, posant les bases d'une éducation plus personnalisée et efficace pour l'avenir.",
    article4desPoste :"Morgan est co-fondateur et data scientist chez Codally. Titulaire d'un double master en intelligence artificielle et big data, il s'est spécialisé en data science, avec une expertise solide en machine learning et deep learning. Au sein de Codally, il supervise les projets d'IA et dirige les équipes dédiées.",

    article5Intro :"L’IA se révèle être un puissant outil pour optimiser les processus et augmenter la productivité  En automatisant les tâches répétitives, elle permet aux équipes de se concentrer sur des défis plus complexes et stimulants.Personnalisation de l’expérience client. En automatisant les tâches répétitives, elle permet aux équipes de se concentrer sur des défis plus complexes et stimulants. Personnalisation de l’expérience client",
    article5Intro2 :"Dans le domaine de l’e-commerce, l’IA transforme l’expérience client en la rendant plus personnalisée et intuitive. Grâce à l’analyse prédictive, les systèmes basés sur l’IA peuvent recommander des produits adaptés aux préférences individuelles des clients. L’IA joue un rôle crucial dans le domaine médical en permettant des diagnostics plus précis et rapides. Elle facilite l’analyse des données de santé, contribuant ainsi à une meilleure prise en charge des patients.",
    article5Citation :"L'intelligence artificielle et l'automatisation, en optimisant les processus, en réduisant les erreurs, et en augmentant la vitesse et la qualité des opérations pourraient accroître la productivité mondiale de 0,8 à 1,4 % par an d'ici 2025.",
    article5objectfisIntro :"Pour tirer le meilleur parti de l’IA tout en minimisant les risques, voici quelques recommandations :",
    article5objectfis1:"Restez à jour sur les technologies d’IA et leurs applications dans votre domaine grâce à la formation continue.",
    article5objectfis2:"Prenez le temps de comprendre le fonctionnement, les capacités et les limites de chaque application d’IA avant de l’utiliser.",
    article5objectfis3:"Mettez en place une politique claire pour l’utilisation des outils d’IA, incluant des procédures de vérification des informations afin d'encadrer leur utilisation",
    article5objectfis4:"Assurez-vous que l’utilisation de l’IA respecte les normes de confidentialité et de protection des données.",
    article5objectfis5:"Expliquez clairement à vos clients ou collaborateurs comment et pourquoi vous utilisez l’IA.",
    article5conclusion :"En conclusion, l’IA offre des opportunités considérables pour améliorer notre quotidien et notre efficacité professionnelle. Cependant, son utilisation doit être encadrée par des pratiques responsables pour en tirer le meilleur parti tout en minimisant les risques potentiels. Chez Codally Montréal, nous sommes engagés à promouvoir une utilisation éthique et efficace de l’IA pour le bénéfice de tous.",
    article5desPoste :"Julien Blancon est un Full Stack Developer passionné, avide d'apprentissage, avec une capacité à monter en compétences rapidement pour relever de nouveaux défis.",


  /*Nos offres empplois */

 offreEmploi : "Découvrez nos offres d'emploi !",
 descritptionOffreEmploi: "Que vous soyez à la recherche d'une opportunité dans l'informatique ou que vous souhaitiez rejoindre un environnement de travail stimulant et amicale, nous avons quelque chose à offrir pour chacun.",

 pourquoiNousRejoindre :"Pourquoi nous rejoindre?",
 descritpionPk:"Rejoindre notre équipe, c'est intégrer un environnement diversifié et innovant où chaque idée compte et où vous aurez l'opportunité de développer vos compétences avec des collègues passionnés.",
 horaireEmploie :"À distance - Temps plein",
 postuleEmploi : "Postulez maintenant",

 payeEmploie :"En fonction des contrats ",

 nosEmplois : "Nos Offres d'Emploi",
 emploidispo :"Postes disponibles chez Codally",
 emploiDispoDes : "Nous offrons flexibilité, projets stimulants, et une équipe de professionnels passionnés pour soutenir votre développement. Développez vos compétences tout en contribuant à des initiatives de pointe!",

 titreRaison1:"travail en distanciel",
 descriptionRaison1:"Que vous soyez chez vous ou en déplacement, vous aurez accès à tous les outils et ressources nécessaires pour être productif. Cette flexibilité favorise un meilleur équilibre entre vie professionnelle et vie personnelle.",
 titreRaison2:"Horaires de travail flexibles",
 descriptionRaison2:"Nous croyons en l'importance de l'équilibre travail-vie personnelle. Que vous soyez un lève-tôt ou un noctambule, vous pouvez organiser votre emploi du temps pour maximiser votre productivité tout en respectant vos engagements personnels.",
 titreRaison3:"Équipe amicale et qualifiée",
 descriptionRaison3:"Rejoindre notre équipe, c'est intégrer un groupe de professionnels passionnés et compétents qui se soutiennent mutuellement. Votre développement professionnel est notre priorité!",
 titreRaison4:"Projet Diversifié et Innovant",
 descriptionRaison4:"Les projets qui nous sont attribués rassemblent des domaines de divers horizons allant de la cybersécurité à des logiciels destinés au domaine médical. Nous encourageons l'innovation et l'émergence d'idées audacieuses.",
  
 /*Jobs en détaile (1 et 2)*/

  a:"Ingénieur en IA éthique",
  salaireAnnuel :"Salaire Annuel",
  detailJob :"Détails du poste", 
  responsabilitéDuJob :"Responsabilités du poste",
  necésitéduJob :"Exigences du poste",
  expérieunceEt :"Compétence et expérience",
  résuméPoste: "Aperçu de l'emplois",
  localisation:"Lieu de travail:",
  nomJob:"Titre d'emploi:",
  Volumehoraire:"Volume horaire par semaine:",
  tauxhoraire:"Taux horaire par H:",
  salaire:"Salaire:",

  descriptionPoste:"Chez Codally, le project manager  est chargé de superviser l'ensemble du cycle de vie des projets techniques, de la planification à la livraison. Ce rôle implique de gérer les ressources, de garantir la qualité des livrables, et d'assurer la satisfaction des clients. En collaboration avec l'équipe de développement, le chef de projet est un lien stratégique entre les besoins des clients et les solutions techniques.",
  descriptionPoste2:"L'Ingénieur en IA éthique est chargé de développer et de déployer des systèmes d'intelligence artificielle (IA) qui respectent des standards éthiques rigoureux. Ce rôle crucial veille à ce que les algorithmes soient transparents, équitables et exempts de biais, en tenant compte des impacts sociaux, légaux et éthiques des technologies déployées.",

  Responsabilit1poste:"Établir les objectifs et les étapes des projets, créer des calendriers et allouer les ressources nécessaires.",
  Responsabilit2poste:"Assurer la communication entre les développeurs, les designers et les autres parties prenantes.",
  Responsabilit3poste:"Surveiller l'avancement des projets, résoudre les problèmes, et ajuster les plans selon les imprévus.",
  Responsabilit4poste:"Communiquer les progrès, recueillir des retours, et garantir la satisfaction du client.",
  Responsabilit5poste:"Vérifier la conformité des produits aux normes de qualité et aux attentes des clients.",
  Responsabilit1poste2:"Développer des modèles conformes aux meilleures pratiques éthiques et effectuer des audits de conformité.",
  Responsabilit2poste2:"Analyser les données et algorithmes pour détecter et corriger les biais potentiels.",
  Responsabilit3poste2:"Organiser des sessions de formation internes sur les bonnes pratiques éthiques de l’IA.",
  Responsabilit4poste2:"Documenter et rendre compte des questions éthiques observées dans les processus IA.",
  Responsabilit5poste2:"Travailler avec des clients, des régulateurs et d’autres entités pour promouvoir une IA responsable.",

  Exigence1Poste:"Diplôme en gestion de projet, informatique, ou ingénierie.",
  Exigence2Poste:"Minimum de 2 ans dans la gestion de projets informatiques, idéalement dans le secteur des technologies de l'information.",
  Exigence3Poste:"Des certifications en gestion de projet (PMP, PRINCE2) seront appréciées.",
  Exigence1Poste2:"Maîtrise des outils d’IA (TensorFlow, PyTorch...) et de langages tels que Python.",
  Exigence2Poste2:"Capacité à documenter et expliquer les questions éthiques de manière claire et concise.",
  Exigence3Poste2:"Connaissance des normes de l’industrie et des régulations en matière d’éthique de l'IA.",

  Compétence1poste:"Maitrise des méthodologies Agile/Scrum ou Waterfall.",
  Compétence2poste:"Capacité à motiver des équipes et à gérer des projets en coordonnant les efforts de divers profils.",
  Compétence3poste:"Aptitude à anticiper et gérer les risques pour respecter les délais et budgets.",
  Compétence1poste2:"Licence ou Master en informatique, IA, science des données ou équivalent.",
  Compétence2poste2:"Jugement éthique solide et capacité à collaborer avec des équipes diverses pour intégrer les valeurs éthiques.",
  Compétence3poste2:"Aptitude à adapter et innover en respectant les normes éthiques.",

  /* Nos projects*/

  Slo : "Le futur de votre entreprise commence ici",
  SloDef : "Dans un monde toujours plus connecté, nos solutions numériques repoussent les limites de l’innovation, grâce à l’intelligence artificielle, nous créons des projets qui transforment vos données en opportunités, optimisent vos processus et anticipent les besoins de demain",

  WeblerTitre :"Webler",
  WeblerTitreDes :"Révolutionnez la Création de Sites Web en l'automatisant avec l'Intelligence Artificielle pour ensuite le peaufiné selon vos intentions.",
  Icône1Titre :"Interface utilisateur intuitive",
  Icône1Des :"Nous avons conçu Webler pour être accessible à tous, quel que soit le niveau de compétence technique.",
  Icône2Titre :"Personnalisation avancée",
  Icône2Des :"Nous comprenons que chaque site web est unique, c'est pourquoi Webler offre des options de personnalisation étendues pour répondre à vos besoins.",

  TaskaiiITitre :"Taskaii",
  TaskaiiITitreDes :"Métamorphoser votre gestion du temps via une fusion de fonctionnalité allant d'une liste de tâche dynamique à un widget de bureau.",
  Icône3Titre :"Liste de Tâches Dynamique ",
  Icône3Des :"Gérez vos tâches de manière intuitive, avec des options pour définir la durée, l'importance, l'échéance et les prérequis de ces dernières.",
  Icône4Titre :"Alertes et Notifications",
  Icône4Des :"Assurez le suivi de vos engagements et échéances avec un système de rappels efficace.",

  ServiceClientèleTitre :"Chat WhatsApp pour Cliniques",
  ServiceClientèleDes :"Transformez l'expérience patient avec notre service clientèle instantané spécialement conçu pour les cliniques.",
  Icône5Titre :"Optimisation du Temps et des Ressources",
  Icône5Des :"Notre service allège la charge de travail du personnel, permettant une meilleure allocation des ressources humaines.",
  Icône6Titre :"Sécurité des Données",
  Icône6Des :"Avec le soutien d'IntelChain, les cliniques bénéficient d'une sécurité de données renforcée essentielle dans le secteur médical.",

  GestionclientèleTitre :"Assistance Téléphonique",
  GestionclientèleTitreDes :"Facilité la gestion des patient via une assistance téléphonique IA dédiée pour cliniques.",
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

  TitrePort :"Nos services directement au sein de votre entreprise!",
  PortDes :"Nous vous offrons des solutions sur mesure pour optimiser vos processus internes grâce à l’intelligence artificielle. Ce qui nous distingue, c’est notre capacité à allier expertise technique et compréhension de vos enjeux.",

  Titrepourquoi1 :"Consultant codally",
  pourquoi1 :"Nos consultants en projects manager ou bien nos développeurs, sont disponibles dans le développement de votre entreprise. Vous pouvez également choisir leur durée effective de travail que ce soit à temps partiel, temps plein ou par consulting. ",
  pourquoi1raison1 :"Accompagnement personnalisé et flexible",
  pourquoi1raison2 :"Expertise diversifiée pour un soutien complet",
  pourquoi1raison3 :"Optimisation des ressources internes",

  Titrepourquoi2 :"Solutions IA pour des processus interne",
  pourquoi2:"Nous proposons également des solutions d'IA pour améliorer vos processus internes en automatisant les tâches répétitives et en réduisant les erreurs. Nous développons des processus personnalisés et adaptés pour améliorer l'efficacité et la prise de décision.",
  pourquoi2raison1:"Automatisation des tâches répétitives",
  pourquoi2raison2:"Réduction des erreurs et amélioration de la qualité",
  pourquoi2raison3:"Prise de décision facilitée grâce à l'analyse de données en temps réel",

  Titrepourquoi3 :"Analyse et conseils",
  pourquoi3 :" Chez Codally, nous optimisons vos opérations grâce à une analyse approfondie et des conseils personnalisés. En offrant une vision extérieure et une expertise pointue, nous identifions les inefficacités et proposons des solutions innovantes.",
  pourquoi3raison1:"Amélioration continue pour une performance durable",
  pourquoi3raison2:"Vision extérieure et expertise pointue",
  pourquoi3raison3:"Optimisation sur-mesure des opérations",

  /* équipeindividus */

  individu1:"oui",

  /* Footer */
  
  Souscription: "Votre partenaire de confiance en solutions informatiques. Innovation, fiabilité et expertise au service de vos besoins technologiques.",

  important: "Page essentiel",
  apropo: "À propos de nous",
  autre: "contact",

    /* PopUp */
  successTitle: "Merci!",
  successMessage: "Votre message a été envoyé avec succès, nous vous répondrons sous peu.",
  kbutton: "OK",

  },
};

const i18n = createI18n({
  locale: "en",
  messages,
});

export default i18n;
