<template>
  <section class="portfolio bg-light ptb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="section-heading text-center mb-5">
            <h2 class="text-primary display-4 font-weight-bold">{{ $t('TitrePort') }}</h2>
            <p class="text-intro font-weight-semibold"> {{ $t('PortDes') }}</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center equal-height-cards">
        <!-- boite 1 -->
        <div class="col-md-4 mb-4 d-flex">
          <div class="card shadow-lg border-0 text-center p-3 w-100">
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
        <div class="col-md-4 mb-4 d-flex">
          <div class="card shadow-lg border-0 text-center p-3 w-100">
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
        <div class="col-md-4 mb-4 d-flex">
          <div class="card shadow-lg border-0 text-center p-3 w-100">
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
      <div class="row justify-content-center mt-5">
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
.card-content p {
  text-align: justify;
}
.text-intro {
  font-size: 1.25rem;
  font-weight: 500;
  color: #343a40;
  line-height: 1.5;
}

.equal-height-cards {
  display: flex;
  flex-wrap: wrap;
}

.card {
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  height: 100%;
}

.card-body {
  padding: 2rem;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-content {
  flex-grow: 1;
}

.card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.card-body:hover {
  transform: translateY(-5px);
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

.text-muted {
  font-size: 1rem;
}

.additional-info {
  list-style-type: none;
  padding-left: 0;
  font-size: 0.95rem;
  margin-top: auto;
}

.additional-info li {
  color: #6c757d;
  margin-bottom: 5px;
  text-align: left;
}

.additional-info li i {
  margin-right: 8px;
}
</style>