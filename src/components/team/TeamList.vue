<template>
  <div class="container py-5">
    <div class="row">

      <!-- Section pour les directeurs -->
      <div
        v-for="member in directors"
        :key="member.name"
        class="col-12 col-md-6 col-lg-4 mb-4"
        @mouseenter="hoveredMember = member.name"
        @mouseleave="hoveredMember = null"
        data-aos="fade-up"
      >
        <div class="card border-0 shadow-sm h-100 position-relative overflow-hidden highlight-director">
          <div class="text-center p-3" data-aos="zoom-in">
            <div
              class="rounded-circle overflow-hidden mx-auto mb-3 border border-white shadow"
              style="width: 100px; height: 100px;"
            >
              <img :src="member.image" :alt="member.name" class="img-fluid" />
            </div>
            <h2 class="h5">{{ member.name }}</h2>
            <p class="director-role">{{ member.role }}</p>
          </div>
          <!-- Overlay -->
          <div
            class="position-absolute top-0 start-0 w-100 h-100 overlay-gradient d-flex flex-column justify-content-end text-white p-3"
            :class="{ 'overlay-visible': hoveredMember === member.name }"
          >
            <div class="text-overlay d-flex align-items-center justify-content-between">
              <p class="fw-bold mb-1">{{ member.name }}</p>
              <a v-if="member.linkedin" :href="member.linkedin" target="_blank" class="text-white ms-3">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <p class="small">{{ member.role }}</p>
          </div>
          <div class="card-body text-center" data-aos="fade-in">
            <p class="text-muted small">{{ t(member.descriptionKey) }}</p>
            <div class="d-flex flex-wrap justify-content-center mb-3">
              <span
                v-for="skill in member.skills"
                :key="skill"
                class="badge bg-light text-secondary m-1"
                data-aos="flip-up"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Section pour le reste de l'équipe -->
      <div
        v-for="member in otherMembers"
        :key="member.name"
        class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
        @mouseenter="hoveredMember = member.name"
        @mouseleave="hoveredMember = null"
        data-aos="fade-down"
      >
        <div class="card border-0 shadow-sm h-100 position-relative overflow-hidden">
          <div class="text-center p-3" data-aos="flip-right">
            <div
              class="rounded-circle overflow-hidden mx-auto mb-3 border border-white shadow"
              style="width: 100px; height: 100px;"
            >
              <img :src="member.image" :alt="member.name" class="img-fluid" />
            </div>
            <h2 class="h5">{{ member.name }}</h2>
            <p class="text-primary small">{{ member.role }}</p>
          </div>
          <!-- Overlay -->
          <div
            class="position-absolute top-0 start-0 w-100 h-100 overlay-gradient d-flex flex-column justify-content-end text-white p-3"
            :class="{ 'overlay-visible': hoveredMember === member.name }"
          >
            <div class="text-overlay d-flex align-items-center justify-content-between">
              <p class="fw-bold mb-1">{{ member.name }}</p>
              <a v-if="member.linkedin" :href="member.linkedin" target="_blank" class="text-white ms-3">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <p class="small">{{ member.role }}</p>
          </div>
          <div class="card-body text-center" data-aos="zoom-in">
            <p class="text-muted small">{{ t(member.descriptionKey) }}</p>
            <div class="d-flex flex-wrap justify-content-center mb-3">
              <span
                v-for="skill in member.skills"
                :key="skill"
                class="badge bg-light text-secondary m-1"
                data-aos="zoom-in-up"
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
    name: "Morgan Chappe",
    role: "Vice CEO - Data Scientist - Project Manager",
    image: "/img/team/team-2.jpg",
    descriptionKey: "team.morgan_description",
    skills: ["Data Science", "Machine Learning", "Project Manager"],
    linkedin: "https://www.linkedin.com/in/morgan-chappe-3b6911181",
  },
  {
    name: "Ali Nayeri",
    role: "CEO - Project Manager",
    image: "/img/team/team-1.jpg",
    descriptionKey: "team.ali_description",
    skills: ["Project Manager", "Leadership", "Java Spring"],
    linkedin: "https://www.linkedin.com/in/alinyr/",
  },
  {
    name: "Oussama El Figha",
    role: "Director of Cybersecurity",
    image: "/img/team/team-10.png",
    descriptionKey: "team.oussama_description",
    skills: ["Cloud engineering", "Cybersecurity", "DevSecOps"],
  },
  {
    name: "Oswald Essongue",
    role: "Full Stack Developer",
    image: "/img/team/team-3.jpg",
    descriptionKey: "team.oswald_description",
    skills: ["C++", "Java", "React"],
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
    skills: ["Agile", "User Research", "Information architecture"],
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
];

// Filtrage des directeurs
const directors = teamMembers.filter((member) =>
  ["Morgan Chappe", "Ali Nayeri", "Oussama El Figha"].includes(member.name)
);

// Filtrage des autres membres
const otherMembers = teamMembers.filter(
  (member) => !directors.includes(member)
);

</script>


<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
}
.card .badge {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.overlay-visible ~ .card-body .badge {
  opacity: 0.1; 
  transform: scale(0.8); 
}

.card-body .badge {
  opacity: 1;
  transform: scale(1);
}

.highlight-director {
  border: 2px solid #007bff; }

.director-role {
  font-size: 1.1rem; 
  font-weight: bold; 
  color: #007bff;
}

.overlay-gradient {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.opacity-100 {
  opacity: 1;
}

.opacity-0 {
  opacity: 0;
}

.overlay-gradient {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
  opacity: 0;
  pointer-events: none; 
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.overlay-visible {
  opacity: 1 !important;
  pointer-events: auto;
  transform: translateY(0); 
}

.overlay-gradient:not(.overlay-visible) {
  transform: translateY(-10px);
}

.text-overlay {
  text-align: center;
  color: #fff;
}

.card:hover .rounded-circle {
  transform: scale(1.1); 
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
</style>
