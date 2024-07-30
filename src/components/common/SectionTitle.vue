<template>
  <div class="row justify-content-center">
    <div class="col-lg-6 col-md-10">
      <div class="section-heading text-center">
        <h2>{{ title }}</h2>
        <p>
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: String,
    desc: String,
  },
};
</script>
