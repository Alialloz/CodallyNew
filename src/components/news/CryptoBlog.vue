<template>
  <section class="crypto-blog bg-dark-black">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center mb-5">
            <h2 class="text-white">Cryptocurrency Recent Posts</h2>
            <p>
              Right Click on the Download Button in the Font Post and Copy Link
              Address and Paste it in the New Tab The Download will Start
              Automatically.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="crypto-blog-card bg-soft-black mb-30 mb-lg-0">
            <router-link to="/news-details" class="text-decoration-none">
              <div class="blog-thumb">
                <img
                  src="@/assets/img/blog/cbl-1.png"
                  class="img-fluid"
                  alt="thumb"
                />
              </div>
              <h3 class="h4 fw-medium text-white">
                How Filecoin is Up in a Week Could Take Care
              </h3>
              <p class="m-0">
                Words combined with a handful of model to generate which looks
                reasonable.
              </p>
            </router-link>
            <div class="author-meta d-flex align-items-center py-4">
              <div class="pe-3">
                <img
                  src="@/assets/img/testimonial/app-testimonial-1.png"
                  alt=""
                />
              </div>
              <div>
                <h5 class="fw-normal text-white h6 m-0">St Adward</h5>
                <span>Feb 19, 2022</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="crypto-blog-card bg-soft-black mb-30 mb-lg-0">
            <router-link to="news-details" class="text-decoration-none">
              <div class="blog-thumb">
                <a hrft="blog-single.html">
                  <img
                    src="@/assets/img/blog/cbl-2.png"
                    class="img-fluid"
                    alt="thumb"
                  />
                </a>
              </div>
              <h3 class="h4 fw-medium text-white">
                Ethereum Summit Attendees Governance
              </h3>
              <p class="m-0">
                Words combined with a handful of model to generate which looks
                reasonable.
              </p>
            </router-link>
            <div class="author-meta d-flex align-items-center py-4">
              <div class="pe-3">
                <img
                  src="@/assets/img/testimonial/app-testimonial-3.png"
                  alt=""
                />
              </div>
              <div>
                <h5 class="fw-normal text-white h6 m-0">Noah L. Paulsen</h5>
                <span>Feb 19, 2022</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="crypto-blog-card bg-soft-black">
            <router-link to="/news-details" class="text-decoration-none">
              <div class="blog-thumb">
                <img
                  src="@/assets/img/blog/cbl-3.png"
                  class="img-fluid"
                  alt="thumb"
                />
              </div>
              <h3 class="h4 fw-medium text-white">
                Ethereum Summit Attendees Governance Plan
              </h3>
              <p class="m-0">
                Words combined with a handful of model to generate which looks
                reasonable.
              </p>
            </router-link>
            <div class="author-meta d-flex align-items-center py-4">
              <div class="pe-3">
                <img
                  src="@/assets/img/testimonial/app-testimonial-2.png"
                  alt="Noah"
                />
              </div>
              <div>
                <h5 class="fw-normal text-white h6 m-0">John L. Paulsen</h5>
                <span>Feb 19, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-3">
          <div class="text-center mt-5">
            <router-link
              to="/news"
              class="btn-outline-primary btn rounded-pill text-decoration-none"
            >
              All Blog Post
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
