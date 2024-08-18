<template>
  <section
    class="page-header position-relative overflow-hidden ptb-120 bg-dark" 
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <h1 class="display-5 fw-bold">{{ title }}</h1>
          <p class="lead">
            &nbsp&nbsp{{ desc }}
          </p>
        </div>
      </div>
      <div
        class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: {
    title: String,
    desc: String,
  },
};
</script>

<style></style>
