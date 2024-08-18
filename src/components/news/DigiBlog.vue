<template>
  <section class="dg-news pt-120 pb-60">
    <div class="container">
      <div class="row justify-content-between align-items-end mb-5">
        <div class="col-lg-6 col-md-6">
          <div>
            <div>
              <span class="span-arrow">News & Blogs</span>
              <img src="@/assets/img/arro-right.svg" alt="arrow" />
            </div>
            <h2>Browse our Articles on Marketing & Growth</h2>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="text-md-end mt-3 mt-md-0">
            <router-link to="/news" class="btn rounded-pill btn-outline-dark"
              >Browse Articles</router-link
            >
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="digi-blog-single border p-3 rounded mb-4 mb-lg-4">
            <router-link to="/news-details">
              <div class="digi-blog-thumb">

                <span class="d-tag marketing">Marketing</span>
              </div>
            </router-link>
            <div class="mt-4 digi-blog-info">
              <span class="fs-sm text-muted fw-normal"
                ><i class="fal fa-calendar-minus me-2"></i>22 Feb, 2022</span
              >
              <h4>
                <router-link to="/news-details"
                  >5 SEO Factors to Consider for your Website to rank
                  Better</router-link
                >
              </h4>
              <p>
                Holisticly innovate principle-centered evia eth Eincentivize
                sticky processes
              </p>
              <router-link
                to="/news-details"
                class="read-more-link text-decoration-none"
                >Explore More <i class="far fa-arrow-right ms-2"></i
              ></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="digi-blog-single border p-3 rounded mb-4 mb-lg-0">
            <router-link to="/news-details">
              <div class="digi-blog-thumb">
                
                <span class="d-tag design">Marketing</span>
              </div>
            </router-link>
            <div class="mt-4 digi-blog-info">
              <span class="fs-sm text-muted fw-normal"
                ><i class="fal fa-calendar-minus me-2"></i>22 Feb, 2022</span
              >
              <h4>
                <router-link to="/news-details"
                  >5 SEO Factors to Consider for your Website to rank
                  Better</router-link
                >
              </h4>
              <p>
                Holisticly innovate principle-centered evia eth Eincentivize
                sticky processes
              </p>
              <router-link
                to="/news-details"
                class="read-more-link text-decoration-none"
                >Explore More <i class="far fa-arrow-right ms-2"></i
              ></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="digi-blog-list">
            <div class="list-header">
              <h5>The Top Three Insights</h5>
            </div>
            <div class="digi-blog-posts">
              <ul class="list-unstyled">
                <li class="mb-3">
                  <router-link to="/news-details">
                    <span class="fs-sm text-muted"
                      >John Carter October 30, 2021</span
                    >
                    <h5 class="h6">
                      5 SEO Factors to Consider for your Website to rank Better
                    </h5>
                  </router-link>
                </li>
                <li class="mb-3">
                  <router-link to="/news-details">
                    <span class="fs-sm text-muted"
                      >John Carter October 30, 2021</span
                    >
                    <h5 class="h6">
                      5 SEO Factors to Consider for your Website to rank Better
                    </h5>
                  </router-link>
                </li>
                <li class="mb-3">
                  <router-link to="/news-details">
                    <span class="fs-sm text-muted"
                      >John Carter October 30, 2021</span
                    >
                    <h5 class="h6">
                      5 SEO Factors to Consider for your Website to rank Better
                    </h5>
                  </router-link>
                </li>
                <li class="mb-3">
                  <router-link to="/news-details">
                    <span class="fs-sm text-muted"
                      >John Carter October 30, 2021</span
                    >
                    <h5 class="h6">
                      5 SEO Factors to Consider for your Website to rank Better
                    </h5>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
