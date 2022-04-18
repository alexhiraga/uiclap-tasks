<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="container">
      

      <nav class="navbar">
        <RouterLink to="/" class="navbar-item">Home</RouterLink>
        <RouterLink to="/about" class="navbar-item">About</RouterLink>
      </nav>
    </div>
  </header>
  <section class="container">
    <RouterView />
  </section>
</template>

<style>
@import '@/assets/css/main.css';


</style>
