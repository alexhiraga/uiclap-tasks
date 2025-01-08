<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>

    <div class="container box my-5">
      <Navbar />
    </div>
  </header>
  <section class="container">
    <RouterView />
  </section>
</template>

<style>
@import './assets/css/main.css';
@import './assets/css/custom.css';


</style>
