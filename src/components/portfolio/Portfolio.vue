<template>
  <section class="portfolio bg-light ptb-120" data-aos="fade-up">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="section-heading text-center mb-5" data-aos="zoom-in" data-aos-duration="800">
            <h2 class="text-primary display-4 font-weight-bold">{{ $t('TitrePort') }}</h2>
            <p class="text-intro font-weight-semibold"> {{ $t('PortDes') }}</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center equal-height-cards">
        <!-- boite 1 -->
        <div class="col-md-4 mb-4 d-flex" data-aos="fade-right" data-aos-delay="200">
          <div class="card shadow-lg border-0 text-center w-100">
            <div class="card-body d-flex flex-column">
              <div class="card-content">
                <i class="fas fa-desktop fa-2x mb-3 text-primary"></i>
                <h4 class="mb-2">{{ $t('Titrepourquoi1') }}</h4>
                <p class="text-muted"> {{ $t('pourquoi1') }}</p>
              </div>
              <ul class="additional-info text-left mt-auto">
                <li><i class="fas fa-check text-primary"></i> {{ $t('pourquoi1raison1') }}</li>
                <li><i class="fas fa-check text-primary"></i> {{ $t('pourquoi1raison2') }}</li>
                <li><i class="fas fa-check text-primary"></i> {{ $t('pourquoi1raison3') }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- boite 2 -->
        <div class="col-md-4 mb-4 d-flex" data-aos="fade-up" data-aos-delay="400">
          <div class="card shadow-lg border-0 text-center w-100">
            <div class="card-body d-flex flex-column">
              <div class="card-content">
                <i class="fas fa-laptop-code fa-2x mb-3 text-primary"></i>
                <h4 class="mb-2">{{ $t('Titrepourquoi2') }}</h4>
                <p class="text-muted"> {{ $t('pourquoi2') }}</p>
              </div>
              <ul class="additional-info text-left mt-auto">
                <li><i class="fas fa-check text-primary"></i> {{ $t('pourquoi2raison1') }}</li>
                <li><i class="fas fa-check text-primary"></i> {{ $t('pourquoi2raison2') }}</li>
                <li><i class="fas fa-check text-primary"></i> {{ $t('pourquoi2raison3') }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- boite 3 -->
        <div class="col-md-4 mb-4 d-flex" data-aos="fade-left" data-aos-delay="600">
          <div class="card shadow-lg border-0 text-center w-100">
            <div class="card-body d-flex flex-column">
              <div class="card-content">
                <i class="fas fa-comments fa-2x mb-3 text-primary"></i>
                <h4 class="mb-2">{{ $t('Titrepourquoi3') }}</h4>
                <p class="text-muted"> {{ $t('pourquoi3') }}</p>
              </div>
              <ul class="additional-info text-left mt-auto">
                <li><i class="fas fa-check text-primary"></i> {{ $t('pourquoi3raison1') }}</li>
                <li><i class="fas fa-check text-primary"></i> {{ $t('pourquoi3raison2') }}</li>
                <li><i class="fas fa-check text-primary"></i> {{ $t('pourquoi3raison3') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Bouton -->
      <div class="row justify-content-center mt-5" data-aos="zoom-in" data-aos-duration="800">
        <div class="col-md-12 text-center">
          <router-link to="/contact-us" class="btn btn-primary btn-lg px-5 py-3">
            {{ $t('contact') }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-heading h2 {
  font-size: 2.5rem;
  font-weight: bold;
}

.card {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  height: 100%;
}

.card-content {
  flex-grow: 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.card i {
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #007bff;
}

.card h4 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.card p {
  text-align: justify;
  font-size: 1rem;
  color: #6c757d;
}

.card p.text-muted {
  margin-top: auto; 
  padding-top: 0.5rem;
}

.additional-info {
  list-style-type: none;
  padding-left: 0;
  font-size: 0.95rem;
  color: #6c757d;
  text-align: left;
  width: 100%;
}

.additional-info li {
  display: flex;
  margin-bottom: 5px;
}

.additional-info li i {
  margin-right: 8px;
  color: #007bff;
  font-size: 1rem; 
  vertical-align: middle;
}

.text-muted {
  font-size: 1rem;
  text-align: center;

}

.btn {
  font-weight: 600;
  padding: 15px 30px;
  font-size: 1.1rem;
}

.btn:hover {
  background-color: #007bff;
  transform: translateY(-2px);
}

.card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.card-body:hover {
  transform: translateY(-5px);
}

</style>