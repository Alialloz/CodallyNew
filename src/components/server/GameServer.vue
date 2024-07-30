<template>
  <section class="ptb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center mb-5">
            <h2 class="text-white mb-4">Most Popular Game Servers</h2>
            <p class="text-off-white">
              Give your Website the speed, security, and uptime it deserves and
              become part of the fastest Web Hosting Quiety.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="server-left position-relative z-5">
            <div class="server-list mb-3 z-5">
              <router-link to="/" class="text-decoration-none">
                <div class="d-flex align-items-center">
                  <img
                    src="@/assets/img/server/s1.png"
                    class="img-fluid me-3"
                    alt="server"
                  />
                  <h5 class="m-0 text-white fw-medium">7 Days to Die</h5>
                </div>
              </router-link>
            </div>
            <div class="server-list mb-3">
              <router-link to="/" class="text-decoration-none">
                <div class="d-flex align-items-center">
                  <img
                    src="@/assets/img/server/s2.png"
                    class="img-fluid me-3"
                    alt="server"
                  />
                  <h5 class="m-0 text-white fw-medium">Ark Survival Evolved</h5>
                </div>
              </router-link>
            </div>
            <div class="server-list mb-3">
              <router-link to="/" class="text-decoration-none">
                <div class="d-flex align-items-center">
                  <img
                    src="@/assets/img/server/s3.png"
                    class="img-fluid me-3"
                    alt="server"
                  />
                  <h5 class="m-0 text-white fw-medium">Counter Strike GO</h5>
                </div>
              </router-link>
            </div>
            <div class="server-list mb-3">
              <router-link to="/" class="text-decoration-none">
                <div class="d-flex align-items-center">
                  <img
                    src="@/assets/img/server/s4.png"
                    class="img-fluid me-3"
                    alt="server"
                  />
                  <h5 class="m-0 text-white fw-medium">Call of Duty</h5>
                </div>
              </router-link>
            </div>
            <img
              src="@/assets/img/circle.png"
              class="server-circle z-2"
              alt="cicle"
            />
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="game-card mb-3 mb-lg-0">
            <div class="card-top">
              <img
                src="@/assets/img/server/card-img.png"
                class="img-fluid w-100"
                alt="game"
              />
              <h4 class="mt-4 mb-3">
                Battlefield Bad Company-2 Ranked Servers.
              </h4>
              <p class="m-0 text-off-white">
                Our custom control panel allows you to configure and customize &
                Administrators.
              </p>
            </div>
            <div class="card-bottom">
              <router-link to="/" class="d-flex justify-content-between">
                From $6.00/GB Per Month
                <img src="@/assets/img/server/arrows.svg" alt="" />
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="server-list mb-3">
            <router-link to="/" class="text-decoration-none">
              <div class="d-flex align-items-center">
                <img
                  src="@/assets/img/server/s5.png"
                  class="img-fluid me-3"
                  alt="server"
                />
                <h5 class="m-0 text-white fw-medium">7 Days to Die</h5>
              </div>
            </router-link>
          </div>
          <div class="server-list mb-3">
            <router-link to="/" class="text-decoration-none">
              <div class="d-flex align-items-center">
                <img
                  src="@/assets/img/server/s6.png"
                  class="img-fluid me-3"
                  alt="server"
                />
                <h5 class="m-0 text-white fw-medium">Ark Survival Evolved</h5>
              </div>
            </router-link>
          </div>
          <div class="server-list mb-3">
            <router-link to="/" class="text-decoration-none">
              <div class="d-flex align-items-center">
                <img
                  src="@/assets/img/server/s1.png"
                  class="img-fluid me-3"
                  alt="server"
                />
                <h5 class="m-0 text-white fw-medium">Unreal Tournament 3</h5>
              </div>
            </router-link>
          </div>
          <div class="server-list mb-3">
            <router-link to="/" class="text-decoration-none">
              <div class="d-flex align-items-center">
                <img
                  src="@/assets/img/server/s8.png"
                  class="img-fluid me-3"
                  alt="server"
                />
                <h5 class="m-0 text-white fw-medium">Garry's Mod</h5>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center mt-4">
        <div class="col-lg-4 col-md-7">
          <div
            class="game-server-lists d-flex align-items-center justify-content-between"
          >
            <div class="d-none d-md-block">
              <img src="@/assets/img/server/c-arrow.png" alt="shape" />
            </div>
            <ul class="list-unstyled d-flex game-img">
              <li>
                <router-link to="/">
                  <img src="@/assets/img/server/e1.png" alt="game" />
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <img src="@/assets/img/server/e2.png" alt="game" />
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <img src="@/assets/img/server/e3.png" alt="game" />
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <img src="@/assets/img/server/e4.png" alt="game" />
                </router-link>
              </li>
            </ul>
            <router-link to="/" class="fw-medium text-white">
              More Games
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
