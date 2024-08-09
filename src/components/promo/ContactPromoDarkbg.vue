<template>
    <section class="contact-promo ptb-120" style="background-color: rgb(var(--bs-dark-rgb));">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div
              class="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100"
              style="background: rgba(255, 255, 255, 0.9); border: 1px solid rgba(0, 0, 0, 0.1);"
            >
              <span class="fad fa-envelope fa-3x text-primary"></span>
              <div class="contact-promo-info mb-4">
                <h5>Email Us</h5>
                <p>
                  Simple drop us an email at
                  <strong>codally.agency@outlook.com</strong> and you'll receive a
                  reply within 24 hours
                </p>
              </div>
              <a href="mailto:codally.agency@outlook.com" class="btn btn-primary mt-auto">
                Email Us
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div
              class="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100"
              style="background: rgba(255, 255, 255, 0.9); border: 1px solid rgba(0, 0, 0, 0.1);"
            >
              <span class="fad fa-phone fa-3x text-primary"></span>
              <div class="contact-promo-info mb-4">
                <h5>Give us a call</h5>
                <p>
                  Give us a ring.Our Experts are standing by
                  <strong>monday to friday</strong> from
                  <strong>9am to 5pm EST.</strong>
                </p>
              </div>
              <a href="tel:00-976-561-008" class="btn btn-link mt-auto">
                00-976-561-008
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .contact-promo h5,
  .contact-promo p {
    color: black;
  }
  
  .contact-us-promo {
    background: rgba(255, 255, 255, 0.95); /* Adding transparency */
    border: 1px solid rgba(0, 0, 0, 0.1); /* Adding a subtle border */
    transition: transform 0.3s ease; /* Adding a hover effect */
  }
  
  .contact-us-promo:hover {
    transform: translateY(-5px);
  }
  </style>
  