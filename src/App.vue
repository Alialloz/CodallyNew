<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import 'glightbox/dist/css/glightbox.css';
import 'glightbox/dist/js/glightbox.js';
import { onMounted } from 'vue';
import AOS from 'aos';
onMounted(() => {
  AOS.init({
    duration: 1000,  
  });
});
</script>

<style>
.gscrollbar-fixer {
  margin: 0 !important;
}
</style>
