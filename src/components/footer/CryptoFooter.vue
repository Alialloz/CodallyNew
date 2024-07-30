<template>
  <footer class="bg-dark-black crypto-footer pt-60">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="crypto-footer-widget text-center">
            <div class="">
              <router-link to="/" class="crypto-logo">
                <img
                  src="@/assets/img/logo-white.png"
                  class="mb-30"
                  alt="logo"
                />
              </router-link>
              <p>
                Bitcoin, first released as open-source software in is the first
                decentralized cryptocurrency. Since the release of bitcoin
              </p>
            </div>
            <nav class="crypto-footer-nav py-5">
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item px-lg-4 px-3">
                  <router-link
                    to="/"
                    class="text-decoration-none fw-semibold text-white"
                  >
                    Home
                  </router-link>
                </li>
                <li class="list-inline-item px-lg-4 px-3">
                  <router-link
                    to="/about-us"
                    class="text-decoration-none fw-semibold text-white"
                  >
                    About
                  </router-link>
                </li>
                <li class="list-inline-item px-lg-4 px-3">
                  <router-link
                    to="/about-us"
                    class="text-decoration-none fw-semibold text-white"
                  >
                    Market
                  </router-link>
                </li>
                <li class="list-inline-item px-lg-4 px-3">
                  <router-link
                    to="/contact-us"
                    class="text-decoration-none fw-semibold text-white"
                  >
                    Trading
                  </router-link>
                </li>
                <li class="list-inline-item px-lg-4 px-3">
                  <router-link
                    to="/about-us"
                    class="text-decoration-none fw-semibold text-white"
                  >
                    Team
                  </router-link>
                </li>
              </ul>
            </nav>
            <h4 class="text-white mb-4 fw-medium">Join the Conversation</h4>
            <ul class="list-unstyled crypto-footer-social pb-120">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-dribbble"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-behance"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="crypto-footer-border py-3">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6 col-md-7">
            <div class="crypto-footer-left">
              <p class="m-0 text-center text-lg-start">
                Copyright@themestags. 2022. All rights reserved.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-5">
            <div class="crypto-footer-right text-center text-md-end">
              <ul class="list-unstyled mt-3 mt-md-0">
                <li class="list-inline-item pe-2">
                  <router-link to="/helps" class="text-decoration-none">
                    Support
                  </router-link>
                </li>
                <li class="list-inline-item">
                  <router-link to="/helps-details" class="text-decoration-none">
                    Privacy Policy
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
