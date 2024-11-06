<template>
  <section id="team-list" class="team-section ptb-120" :class="[bgLight ? 'bg-light' : '']">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="(member, index) in teamMembers" :key="index">
          <div class="team-card text-center p-3 mb-5">
            <!--profil cliquable uniquement pour 1 et 2 -->
            <a v-if="member.clickable" :href="member.linkedin" target="_blank" class="team-img-container mx-auto">
              <img :src="member.image" :alt="member.name" class="img-fluid rounded-circle profile-img" />
            </a>
            <a v-else class="team-img-container mx-auto">
              <img :src="member.image" :alt="member.name" class="img-fluid rounded-circle profile-img" />
            </a>
            <div class="team-info mt-3">
              <h5 class="team-name">{{ member.name }}</h5>
              <p class="team-position text-muted small">{{ member.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bgLight: String,
  },
  data() {
    return {
      teamMembers: [
        {
          name: "Ali Nayeri",
          position: "CEO - Project Manager",
          image: "/img/team/team-1.jpg",
          linkedin: "https://www.linkedin.com/in/alinyr/",
          clickable: true 
        },
        {
          name: "Morgan Chappe",
          position: "Vice CEO - Data Scientist - Project Manager",
          image: "/img/team/team-2.jpg",
          linkedin: "https://www.linkedin.com/in/morgan-chappe-3b6911181",
          clickable: true 
        },
        {
          name: "Oswald Essongue",
          position: "Full Stack Developer",
          image: "/img/team/team-3.jpg",
          clickable: false 
        },
        {
          name: "Wacil Khelifi",
          position: "Data Scientist",
          image: "/img/team/team-4.jpg",
          clickable: false 
        },
        {
          name: "Seibel Edouard",
          position: "Full Stack Developer",
          image: "/img/team/team-5.jpg",
          clickable: false 
        },
        {
          name: "Mehdi Goude",
          position: "UI/UX Designer",
          image: "/img/team/team-6.jpg",
          clickable: false 
        },
        {
          name: "Dylan Palmier",
          position: "UI/UX Designer",
          image: "/img/team/team-7.jpg",
          clickable: false 
        },
        {
          name: "Julien Blancon",
          position: "Full Stack Developer",
          image: "/img/team/team-9.png",
          clickable: false 
        },
        {
          name: "Thomas Tran",
          position: "Back-End Developer",
          image: "/img/team/team-8.jpg",
          clickable: false
        },
        {
          name: "Kathy Nguyen",
          position: "Designer UI/UX",
          image: "/img/team/team-11.png",
          clickable: false
        },
        {
          name: "Oussama El figha",
          position: "Director of Cybersecurity",
          image: "/img/team/team-10.png",
          clickable: false
        }
      ]
    };
  }
};
</script>

<style scoped>
.team-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), 0 12px 24px rgba(0, 0, 0, 0.15);
}

.team-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px; /* Taille du conteneur d'image */
  height: 60px; /* Taille du conteneur d'image */
  overflow: hidden;
  border: 2px solid #ddd;
  border-radius: 50%;
}

.profile-img {
  width: 100%; /* L'image prend 100% de la largeur du conteneur */
  height: auto; /* Maintient le ratio d'aspect */
}

.team-name {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-top: 10px;
}

.team-position {
  font-size: 0.85rem;
  color: #666;
}
</style>


