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
            <p class="text-muted small">{{ t(member.descriptionKey) }}</p>

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
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const hoveredMember = ref(null);

const teamMembers = [
  {
    name: "Ali Nayeri",
    role: "CEO - Project Manager",
    image: "/img/team/team-1.jpg",
    descriptionKey: "team.ali_description",
    skills: ["Gestion de projet", "Leadership", "Stratégie"],
    linkedin: "https://www.linkedin.com/in/alinyr/",
  },
  {
    name: "Morgan Chappe",
    role: "Vice CEO - Data Scientist - Project Manager",
    image: "/img/team/team-2.jpg",
    descriptionKey: "team.morgan_description",
    skills: ["Data Science", "Machine Learning", "Gestion de projet"],
    linkedin: "https://www.linkedin.com/in/morgan-chappe-3b6911181",
  },
  {
    name: "Oswald Essongue",
    role: "Full Stack Developer",
    image: "/img/team/team-3.jpg",
    descriptionKey: "team.oswald_description",
    skills: ["JavaScript", "Node.js", "React"],
  },
  {
    name: "Wacil Khelifi",
    role: "Data Scientist",
    image: "/img/team/team-4.jpg",
    descriptionKey: "team.wacil_description",
    skills: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    name: "Seibel Edouard",
    role: "Full Stack Developer",
    image: "/img/team/team-5.jpg",
    descriptionKey: "team.seibel_description",
    skills: ["Vue.js", "Express", "MongoDB"],
  },
  {
    name: "Mehdi Goude",
    role: "UI/UX Designer",
    image: "/img/team/team-6.jpg",
    descriptionKey: "team.mehdi_description",
    skills: ["Figma", "User Research", "Prototyping"],
  },
  {
    name: "Dylan Palmier",
    role: "UI/UX Designer",
    image: "/img/team/team-7.jpg",
    descriptionKey: "team.dylan_description",
    skills: ["Adobe XD", "Wireframing", "Usability Testing"],
  },
  {
    name: "Julien Blancon",
    role: "Full Stack Developer",
    image: "/img/team/team-9.png",
    descriptionKey: "team.julien_description",
    skills: ["React", "TypeScript", "Node.js"],
  },
  {
    name: "Thomas Tran",
    role: "Back-End Developer",
    image: "/img/team/team-8.jpg",
    descriptionKey: "team.thomas_description",
    skills: ["Node.js", "Docker", "PostgreSQL"],
  },
  {
    name: "Kathy Nguyen",
    role: "UI/UX Designer",
    image: "/img/team/team-11.png",
    descriptionKey: "team.kathy_description",
    skills: ["Sketch", "Visual Design", "User Flows"],
  },
  {
    name: "Oussama El Figha",
    role: "Director of Cybersecurity",
    image: "/img/team/team-10.png",
    descriptionKey: "team.oussama_description",
    skills: ["Cybersecurity", "Risk Assessment", "Penetration Testing"],
  },
];

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