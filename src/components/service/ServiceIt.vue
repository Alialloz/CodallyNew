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
          ,
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 p-0">
          <div
            class="single-service p-lg-5 p-4 text-center mt-3 border-bottom border-end"
          >
            <div class="service-icon icon-center">
              <img
                src="src\assets\img\webler.png"
                alt="Icone du logiciel webler"
                width="65"
                height="65"
              />
            </div>
            <div class="service-info-wrap">
              <h3 class="h5">{{ $t('webler') }}</h3>
              <p>
                {{ $t('weblerDes') }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 p-0">
          <div
            class="single-service p-lg-5 p-4 text-center mt-3 border-bottom border-end"
          >
            <div class="service-icon icon-center">
              <img
                src="src\assets\img\taskaii.png"
                alt="Icone du logiciel taskaii"
                width="65"
                height="65"
              />
            </div>
            <div class="service-info-wrap">
              <h3 class="h5">{{ $t('Taskaii') }}</h3>
              <p>
                {{ $t('TaskaiiDes') }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 p-0">
          <div class="single-service p-lg-5 p-4 text-center mt-3 border-bottom">
            <div class="service-icon icon-center">
              <img
                src="src\assets\img\whatsapp.png"
                alt="Icone du logiciel de messagerie"
                width="65"
                height="65"
              />
            </div>
            <div class="service-info-wrap">
              <h3 class="h5">{{ $t('serviceClient') }}</h3>
              <p>
                {{ $t('serviceClientDes') }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 p-0">
          <div class="single-service p-lg-5 p-4 text-center border-end">
            <div class="service-icon icon-center">
              <img
                src="src\assets\img\serviceClient.png"
                alt="Icone du service client"
                width="65"
                height="65"
              />
            </div>
            <div class="feature-info-wrap">
              <h3 class="h5">{{ $t('assistance') }}</h3>
              <p>
                {{ $t('assistanceDes') }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 p-0">
          <div class="single-service p-lg-5 p-4 text-center border-end">
            <div class="service-icon icon-center">
              <img
                src="src\assets\img\logicielDeFacturation.png"
                alt="service icon"
                width="65"
                height="65"
              />
            </div>
            <div class="feature-info-wrap">
              <h3 class="h5">{{ $t('facturation') }}</h3>
              <p>
                {{ $t('facturationDes') }}
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-4 col-md-6 p-0">
          <div class="single-service p-lg-5 p-4 text-center">
            <div class="service-icon icon-center">
              <img
                src="@/assets/img/service/promotion.png"
                alt="service icon"
                width="65"
                height="65"
              />
            </div>
            <div class="feature-info-wrap">
              <h3 class="h5">ouioui</h3>
              <p>
                 Holisticly morph distinctive methodologies and vertical
                e-tailers. Rapidiously grow customized data. 
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>
