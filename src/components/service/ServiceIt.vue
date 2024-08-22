<template>
  <section class="services-icon ptb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <div class="section-heading text-center">
            <h2>{{ $t('Project') }}</h2>
            <p>
              {{ $t('projectDescription') }}
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <!-- Webler -->
        <div class="col-lg-4 col-md-6 p-0">
          <div
            class="single-service p-lg-5 p-4 text-center mt-3 border-bottom border-end"
          >
            <div class="service-icon icon-center">
              <router-link :to="{ path: '/about-us', hash: '#webler' }">
                <img
                  src="\src\assets\img\webler.png"
                  alt="Icône du logiciel webler"
                  width="65"
                  height="65"
                />
              </router-link>
            </div>
            <div class="service-info-wrap">
              <h3 class="h5">{{ $t('webler') }}</h3>
              <p>
                {{ $t('weblerDes') }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Taskaii -->
        <div class="col-lg-4 col-md-6 p-0">
          <div
            class="single-service p-lg-5 p-4 text-center mt-3 border-bottom border-end"
          >
            <div class="service-icon icon-center">
              <router-link :to="{ path: '/about-us', hash: '#taskaii' }">
                <img
                  src="\src\assets\img\taskaii.svg"
                  alt="Icône du logiciel taskaii"
                  width="65"
                  height="65"
                />
              </router-link>
            </div>
            <div class="service-info-wrap">
              <h3 class="h5">{{ $t('Taskaii') }}</h3>
              <p>
                {{ $t('TaskaiiDes') }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Chat Whats App -->
        <div class="col-lg-4 col-md-6 p-0">
          <div class="single-service p-lg-5 p-4 text-center mt-3 border-bottom">
            <div class="service-icon icon-center">
              <router-link :to="{ path: '/about-us', hash: '#ChatWhatsApp' }">
                <img
                  src="\src\assets\img\whatsapp.png"
                  alt="Icône du logiciel de messagerie"
                  width="65"
                  height="65"
                />
              </router-link>
            </div>
            <div class="service-info-wrap">
              <h3 class="h5">{{ $t('serviceClient') }}</h3>
              <p>
                {{ $t('serviceClientDes') }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Assistante Téléphonique Ia -->
        <div class="col-lg-4 col-md-6 p-0">
          <div class="single-service p-lg-5 p-4 text-center border-end">
            <div class="service-icon icon-center">
              <router-link :to="{ path: '/about-us', hash: '#GestionClient' }">
                <img
                  src="\src\assets\img\serviceClient.png"
                  alt="Icône du service client"
                  width="65"
                  height="65"
                />
              </router-link>
            </div>
            <div class="feature-info-wrap">
              <h3 class="h5">{{ $t('assistance') }}</h3>
              <p>
                {{ $t('assistanceDes') }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Logiciel de Facturation -->
        <div class="col-lg-4 col-md-6 p-0">
          <div class="single-service p-lg-5 p-4 text-center border-end">
            <div class="service-icon icon-center">
              <router-link :to="{ path: '/about-us', hash: '#ServiceFacture' }">
                <img
                  src="\src\assets\img\logicielDeFacturation.png"
                  alt="Icône du logiciel de facturation"
                  width="65"
                  height="65"
                />
              </router-link>
            </div>
            <div class="feature-info-wrap">
              <h3 class="h5">{{ $t('facturation') }}</h3>
              <p>
                {{ $t('facturationDes') }}
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-4">
        <div class="col-lg-8 col-md-10 text-center">
          <router-link
            to="/about-us"
            class="text-black link-with-icon text-decoration-none mt-4"
          >
            {{ $t('knowMore2') }}
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>