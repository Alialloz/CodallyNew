Section d'intégration (version mise à jour)

<template>
  <section class="integration-section ptb-120 bg-dark">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-3">
          <div class="integration-list-wrap">
            <a
              href="https://lavicennes.ch/"
              class="integration-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Your Brand Name"
              target="_blank"
              rel="noopener noreferrer"  
            >
              <img
                src="src/assets/img/LogoLavicennes.png"
                alt="integration"
                class="img-fluid rounded-circle"
              />
            </a>
            <router-link
              to="/integration-single"
              class="integration-2"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Your Brand Name"
            >
              <img
                src="@/assets/img/integations/2.png"
                alt="integration"
                class="img-fluid rounded-circle"
              />
            </router-link>
            <a
              href="https://intelchain.io/"
              class="integration-3"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Your Brand Name"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/img/logoIntelChain.png"
                alt="integration"
                class="img-fluid rounded-circle"
              />
            </a>
            <router-link
              to="/integration-single"
              class="integration-4"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Your Brand Name"
            >
              <img
                src="@/assets/img/integations/4.png"
                alt="integration"
                class="img-fluid rounded-circle"
              />
            </router-link>
            <router-link
              to="/integration-single"
              class="integration-5"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Your Brand Name"
            >
              <img
                src="@/assets/img/integations/5.png"
                alt="integration"
                class="img-fluid rounded-circle"
              />
            </router-link>
            <router-link
              to="/integration-single"
              class="integration-6"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Your Brand Name"
            >
              <img
                src="@/assets/img/integations/6.png"
                alt="integration"
                class="img-fluid rounded-circle"
              />
            </router-link>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="section-heading text-center my-5 my-lg-0 my-xl-0">
            <h4 class="text-primary h2">{{ $t('tireCollab') }}</h4>
            <h2 class="h5">{{ $t('sloganCollab') }}</h2>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="col-lg-4">
            <div class="integration-list-wrap">
              <router-link
                to="/integration-single"
                class="integration-7"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Your Brand Name"
              >
                <img
                  src="@/assets/img/integations/7.png"
                  alt="integration"
                  class="img-fluid rounded-circle"
                />
              </router-link>
              <router-link
                to="/integration-single"
                class="integration-8"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Your Brand Name"
              >
                <img
                  src="@/assets/img/integations/8.png"
                  alt="integration"
                  class="img-fluid rounded-circle"
                />
              </router-link>
              <router-link
                to="/integration-single"
                class="integration-9"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Your Brand Name"
              >
                <img
                  src="@/assets/img/integations/9.png"
                  alt="integration"
                  class="img-fluid rounded-circle"
                />
              </router-link>
              <router-link
                to="/integration-single"
                class="integration-10"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Your Brand Name"
              >
                <img
                  src="@/assets/img/integations/10.png"
                  alt="integration"
                  class="img-fluid rounded-circle"
                />
              </router-link>
              <router-link
                to="/integration-single"
                class="integration-11"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Your Brand Name"
              >
                <img
                  src="@/assets/img/integations/11.png"
                  alt="integration"
                  class="img-fluid rounded-circle"
                />
              </router-link>
              <router-link
                to="/integration-single"
                class="integration-12"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Your Brand Name"
              >
                <img
                  src="@/assets/img/integations/12.png"
                  alt="integration"
                  class="img-fluid rounded-circle"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>