<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isActive = ref(false)

const toggleMenu = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <nav class="navbar gap-6" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://uiclap.com/" target="_blank">
        <img src="https://uiclap.com/wp-content/uploads/2021/12/uiclap-logo.png" alt="UICLAP" />
      </a>
    </div>

    <div class="navbar-buttons">
      <a 
        role="button" 
        class="navbar-burger" 
        aria-label="menu" 
        aria-expanded="false" 
        data-target="navMenu"
        :class="{ 'is-active': isActive }"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div id="navMenu" :class="['navbar-menu', { 'is-active': isActive }]">
        <RouterLink to="/" class="navbar-item">
          <i class="mdi mdi-home is-size-4"></i>
          Home
        </RouterLink>
        <RouterLink to="/about" class="navbar-item">
          <i class="mdi mdi-information is-size-4"></i>
          About
        </RouterLink>
        <RouterLink to="/list" class="navbar-item">
          <i class="mdi mdi-list-box is-size-4"></i>
          List
        </RouterLink>
      </div>
    </div>
  </nav>
</template>