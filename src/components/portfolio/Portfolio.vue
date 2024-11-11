<template>
  <section class="portfolio bg-light ptb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="section-heading text-center mb-5">
            <h2 class="text-primary">{{ $t('TitrePort') }}</h2>
            <p class="text-muted mb-4">{{ $t('PortDes') }}</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-4 mb-4">
          <div class="card shadow-lg border-0 text-center p-3">
            <div class="card-body">
              <i class="fas fa-desktop fa-2x mb-3 text-primary"></i>
              <h4 class="mb-2">{{ $t('Titrepourquoi1') }}</h4>
              <p class="text-muted">{{ $t('pourquoi1') }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card shadow-lg border-0 text-center p-3">
            <div class="card-body">
              <i class="fas fa-laptop-code fa-2x mb-3 text-primary"></i>
              <h4 class="mb-2">{{ $t('Titrepourquoi2') }}</h4>
              <p class="text-muted">{{ $t('pourquoi2') }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card shadow-lg border-0 text-center p-3">
            <div class="card-body">
              <i class="fas fa-comments fa-2x mb-3 text-primary"></i>
              <h4 class="mb-2">{{ $t('Titrepourquoi3') }}</h4>
              <p class="text-muted">{{ $t('pourquoi3') }}</p>
            </div>
          </div>
        </div>
      </div>

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
    font-size: 2rem;
    font-weight: bold;
  }

  .card-body {
    padding: 2rem;
    transition: transform 0.3s ease-in-out;
  }

  .card-body:hover {
    transform: translateY(-5px);
  }

  .card {
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
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
</style>
