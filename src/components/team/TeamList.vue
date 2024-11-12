<template>
  <div class="container py-5">
    <div class="row">
      <div
        v-for="member in teamMembers"
        :key="member.name"
        class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
        @mouseenter="hoveredMember = member.name"
        @mouseleave="hoveredMember = null"
      >
        <div class="card border-0 shadow-sm h-100 position-relative overflow-hidden">
          <!-- Image et contenu de la carte -->
          <div class="text-center p-3">
            <div class="rounded-circle overflow-hidden mx-auto mb-3 border border-white shadow" style="width: 100px; height: 100px;">
              <img :src="member.image" :alt="member.name" class="img-fluid" />
            </div>
            <h2 class="h5">{{ member.name }}</h2>
            <p class="text-primary small">{{ member.role }}</p>
          </div>

          <!-- Overlay couvrant toute la carte avec dégradé et texte en bas -->
          <div
            class="position-absolute top-0 start-0 w-100 h-100 overlay-gradient d-flex flex-column justify-content-end text-white p-3 transition-opacity"
            :class="{ 'opacity-100': hoveredMember === member.name, 'opacity-0': hoveredMember !== member.name }"
          >
            <div class="text-overlay d-flex align-items-center justify-content-between">
              <p class="fw-bold mb-1">{{ member.name }}</p>
              
              <!-- Ajout de l'icône LinkedIn uniquement pour Ali et Morgan -->
              <a v-if="member.linkedin" :href="member.linkedin" target="_blank" class="text-white ms-3">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <p class="small">{{ member.role }}</p>
          </div>

          <!-- Contenu du corps de la carte -->
          <div class="card-body text-center">
            <p class="text-muted small">{{ member.description }}</p>
            <div class="d-flex flex-wrap justify-content-center mb-3">
              <span
                v-for="skill in member.skills"
                :key="skill"
                class="badge bg-light text-secondary m-1"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue'

const hoveredMember = ref(null)

const teamMembers = [
  {
    name: "Ali Nayeri",
    role: "CEO - Project Manager",
    image: "/img/team/team-1.jpg",
    description: "Expert en gestion de projet avec plus de 10 ans d'expérience dans le développement de solutions innovantes.",
    skills: ["Gestion de projet", "Leadership", "Stratégie"],
    linkedin: "https://www.linkedin.com/in/alinyr/",
  },
  {
    name: "Morgan Chappe",
    role: "Vice CEO - Data Scientist - Project Manager",
    image: "/img/team/team-2.jpg",
    description: "Spécialiste en science des données, dirigeant des projets d'analyse avancée et d'intelligence artificielle.",
    skills: ["Data Science", "Machine Learning", "Gestion de projet"],
    linkedin: "https://www.linkedin.com/in/morgan-chappe-3b6911181",
  },
  {
    name: "Oswald Essongue",
    role: "Full Stack Developer",
    image: "/img/team/team-3.jpg",
    description: "Développeur Full Stack passionné par la création d'applications web robustes et performantes, expert en intégration front-end et back-end.",
    skills: ["JavaScript", "Node.js", "React"],
  },
  {
    name: "Wacil Khelifi",
    role: "Data Scientist",
    image: "/img/team/team-4.jpg",
    description: "Data Scientist spécialisé dans l'analyse prédictive et l'exploration des données pour fournir des insights commerciaux impactants.",
    skills: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    name: "Seibel Edouard",
    role: "Full Stack Developer",
    image: "/img/team/team-5.jpg",
    description: "Ingénieur Full Stack expérimenté dans la conception et le développement d'applications scalables, avec une attention particulière à l'expérience utilisateur.",
    skills: ["Vue.js", "Express", "MongoDB"],
  },
  {
    name: "Mehdi Goude",
    role: "UI/UX Designer",
    image: "/img/team/team-6.jpg",
    description: "UI/UX Designer créatif, spécialisé dans la conception d'interfaces intuitives et esthétiques pour améliorer l'expérience utilisateur.",
    skills: ["Figma", "User Research", "Prototyping"],
  },
  {
    name: "Dylan Palmier",
    role: "UI/UX Designer",
    image: "/img/team/team-7.jpg",
    description: "Designer UX/UI axé sur la conception de produits centrés sur l'utilisateur, avec une expertise dans le prototypage interactif.",
    skills: ["Adobe XD", "Wireframing", "Usability Testing"],
  },
  {
    name: "Julien Blancon",
    role: "Full Stack Developer",
    image: "/img/team/team-9.png",
    description: "Développeur Full Stack polyvalent, capable de travailler sur des projets complexes du back-end au front-end, avec une expertise en gestion de bases de données.",
    skills: ["PHP", "Laravel", "MySQL"],
  },
  {
    name: "Thomas Tran",
    role: "Back-End Developer",
    image: "/img/team/team-8.jpg",
    description: "Développeur Back-End expert dans la conception d'architectures serveur robustes et scalables, avec une maîtrise des API RESTful.",
    skills: ["Node.js", "Docker", "PostgreSQL"],
  },
  {
    name: "Kathy Nguyen",
    role: "UI/UX Designer",
    image: "/img/team/team-11.png",
    description: "Designer UI/UX passionnée, axée sur la création de designs attrayants et fonctionnels qui améliorent l'expérience utilisateur.",
    skills: ["Sketch", "Visual Design", "User Flows"],
  },
  {
    name: "Oussama El Figha",
    role: "Director of Cybersecurity",
    image: "/img/team/team-10.png",
    description: "Directeur de la cybersécurité, spécialisé dans la protection des systèmes et des données contre les menaces et les cyberattaques.",
    skills: ["Cybersecurity", "Risk Assessment", "Penetration Testing"],
  },
]
</script>

<style scoped>
/* Style de la carte pour ajouter une ombre à l'ensemble de la carte */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
}

/* Overlay couvrant toute la carte avec un dégradé gris-noir */
.overlay-gradient {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Gestion de l'opacité lors du survol */
.opacity-100 {
  opacity: 1;
}

.opacity-0 {
  opacity: 0;
}

/* Texte en bas de l'overlay */
.text-overlay {
  text-align: center;
  color: #fff;
}

/* Pour assurer que le texte est bien visible */
.overlay-gradient p {
  margin: 0;
}

/* Style pour l'ombre circulaire sur les images */
.card .rounded-circle {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); /* Ombre circulaire */
}

/* Optionnel : Ajoute un léger zoom sur hover pour l'image (si souhaité) */
.card:hover .rounded-circle {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}


</style>