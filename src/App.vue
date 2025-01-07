<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="container box my-5">
      

      <nav class="navbar gap-6 ">
        <RouterLink to="/" class="navbar-item">Home</RouterLink>
        <RouterLink to="/about" class="navbar-item">About</RouterLink>
        <RouterLink to="/list" class="navbar-item">List</RouterLink>
      </nav>
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
